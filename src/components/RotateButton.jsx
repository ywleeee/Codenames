import { Button } from "../../@/components/ui/button";
// import { ChevronRight } from "lucide-react"
// import { RefreshCw } from 'lucide-react';
import { Rotate3D } from 'lucide-react';
import { cn } from "../../@/lib/utils";

export function RotateButton({ className, ...props }) {
  return (
    <Button {...props}
      variant='none'
      size="icon"
      className={cn(className)}
    >
      <Rotate3D className="h-4 w-4" />
    </Button>
  )
}