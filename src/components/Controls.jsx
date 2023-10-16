import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu"
import { Button } from "../../@/components/ui/button"
import { Checkbox } from "../../@/components/ui/checkbox"
import { shuffle } from "./Lists"
export default function Controls({ setState }) {
  return <div className='controls-container'>
    <Button className="mr-2" variant='destructive' onClick={() => { setState(s => ({ ...s, itemList: shuffle(s.itemList) })) }}>
      shuffle
    </Button>
    <Button className="mr-2" variant='destructive' onClick={() => { setState(s => ({ ...s, dimension: s.dimension + 1 })) }}>
      dim
    </Button>
    <Checkbox >check</Checkbox>
    {/* <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> */}

  </div>
}