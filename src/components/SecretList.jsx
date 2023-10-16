import { useRef, useState } from 'react'
import { Button } from '../../@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../../@/components/ui/popover'
import { FileLock2, RefreshCw } from 'lucide-react';
import { shuffle } from './Lists';

const colorArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4]
export function SecretList({ className, state, ...props }) {
  const { dimension, colors } = state
  const [secretState, setSecretState] = useState(() => shuffle(new Array(dimension * dimension).fill(0).map((_, i) => i)))
  // console.log(secretState)
  return <Popover >
    <PopoverTrigger asChild className='absolute z-50  right-3 bottom-3'>
      <Button {...props}
        variant='none'
        size="icon"
        className={className}
      >
        <FileLock2 className="h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className=' m-2 max-w-[60vmin] pb-1 border border-[--border]'>
      {/* <Controls
        setState={setState}
      /> */}
      <SecretListGrid {...{ dimension, colors, secretState, setSecretState }} />
      <Button
        variant='none'
        size="icon"
        onClick={() => {
          setSecretState(s => shuffle(s))
        }}
      >
        <RefreshCw asChild className="ml-[-1rem] h-4 w-4" />
      </Button>
    </PopoverContent>
  </Popover>
}

function SecretListGrid({ dimension, colors, secretState, setSecretState }) {
  return <div
    className="aspect-square grid gap-2"
    style={{
      gridTemplate: `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`,
    }}
  >
    {secretState.map((num, index) => <div
      key={num}
      data-flip-id={'little-square-' + num}
      className={`rounded-md`}
      style={{ background: colors[colorArr[num]] }}
    >

    </div>)}
  </div>

}