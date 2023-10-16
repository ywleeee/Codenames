import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '../../@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../../@/components/ui/popover'
import Controls from './Controls'
import { Settings2 } from 'lucide-react';
import { Switch } from '../../@/components/ui/switch';
import { Label } from '../../@/components/ui/label';
export function SettingButton({ state, setState }) {
  return <Popover >
    <PopoverTrigger asChild className='absolute z-50'>
      <Button
        onClick={() => {
          const glass = document.querySelector('.glass')
          if (glass.classList.contains('on')) {
            glass.classList.remove('on')
          } else {
            glass.classList.add('on')
          }
        }}
        variant='none'
        size="icon"
      // className='m-3'
      >
        <Settings2 className="h-5 w-5" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className='m-2 max-w-[60vmin] border border-[--border]'>
      卡片分類
      <div className="flex flex-wrap">
        {Object.keys(state.categories).map(key => (
          <div key={key} className="flex items-center space-x-2 p-2" >
            <Switch
              id={`cate-${key}`}
              variant='outline'
              // className='border border-[--border]'
              defaultChecked={state.categories[key]}
              onCheckedChange={val => {
                if (window.Flip) {
                  setState(s => ({ ...s, flipState: Flip.getState('.card', { props: 'opacity' }), categories: { ...s.categories, [key]: val } }))
                } else {
                  setState(s => ({ ...s, categories: { ...s.categories, [key]: val } }))
                }
              }}
            />
            <Label className='text-md' htmlFor={`cate-${key}`}> {key}</Label>
          </div>
        ))}
      </div>

    </PopoverContent>
  </Popover >
}