import { Button } from "../../@/components/ui/button";
// import { ChevronRight } from "lucide-react"
import { RefreshCw } from 'lucide-react';
import { cn } from "../../@/lib/utils";

export function ShuffleButton({ className, ...props }) {
  return (
    <Button {...props}
      variant='none'
      size="icon"
      className={cn(className)}
    >
      <RefreshCw className="h-4 w-4" />
    </Button>
  )
}