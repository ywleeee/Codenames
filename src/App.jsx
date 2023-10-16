// import { useState } from 'react'
import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import { CardContainer } from './components/CardContainer'
import { Button } from '../@/components/ui/button'
import { BibleItemLists, shuffle } from './components/Lists'
import { SecretList } from './components/SecretList'
import { ShuffleButton } from './components/ShuffleButton'
import useScript from './components/hooks/useScript'
import { ThemeProvider } from './components/ThemeProvider'
import { Toggle } from './components/Toggle'
import { SettingButton } from './components/SettingButton'
import { RotateButton } from './components/RotateButton'

function App() {
  const [state, setState] = useState(() => {
    let obj = {}
    Object.keys(BibleItemLists).forEach(key => obj[key] = true)
    return {
      // useAllLists: true,
      categories: obj,
      dimension: 5,
      flipState: null,
      colors: ['transparent', '#52ffd155', '#817aff55', '#f255', '#9995'],
      itemList: shuffle([].concat(...Object.values(BibleItemLists)))
    }
  })
  let finalList = makeFinalList(state)
  // console.log(makeFinalList(state))
  useScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js")
  useScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Flip.min.js")
  useScript("https://unpkg.com/rough-notation/lib/rough-notation.iife.js")
  useLayoutEffect(() => {
    if (!state.flipState) return
    console.log('ooo')
    window.Flip && Flip.from(state.flipState, {
      duration: 0.3,
      stagger: 0.05,
      onEnter: el => {
        let newEl = gsap.utils.shuffle(el)
        gsap.from(newEl, { stagger: 0.02, delay: 0, duration: 0.4, opacity: 0, z: null && -200 })
      }
    })
  }, [state.flipState])
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className='app p-3 h-[100vh] w-[100vw]'>

        <CardContainer finalList={finalList} state={state} />
        <SecretList state={state} />
        <SettingButton state={state} setState={setState} />
        <Toggle />
        <ShuffleButton
          onClick={() => {
            if (window.Flip) {
              setState(s => ({ ...s, itemList: shuffle(s.itemList), flipState: Flip.getState('.card', { props: 'opacity' }) }))
            } else {
              setState(s => ({ ...s, itemList: shuffle(s.itemList) }))
            }
          }}
          className='absolute left-3 bottom-3 rounded-md'
        />
        <RotateButton
          onClick={() => {
            gsap && gsap.to('.card', { rotate: 0 })
          }}
          style={{ transform: 'translateX(-50%)' }}
          className='absolute left-[50%] bottom-3 rounded-md'
        />
        <RotateButton
          onClick={() => {
            gsap && gsap.to('.card', { rotate: 180 })
          }}
          style={{ transform: 'translateX(-50%) rotate(0deg)' }}
          className='absolute left-[50%] top-3 rounded-md'
        />

      </div>
    </ThemeProvider>
  )
}

function makeFinalList({ categories }) {
  return shuffle([].concat(...Object.entries(categories).filter(arr => arr[1]).map(arr => BibleItemLists[arr[0]])))
}
export default App
