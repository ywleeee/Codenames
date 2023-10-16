import {
  Card as ShadCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card"

export function Card({ index, children }) {
  return <ShadCard
    key={index}
    data-flip-id={`${children}`}
    data-state='0'
    className='card border border-[--bd-color]'
  >
    <CardContent>
      {children}
    </CardContent>
  </ShadCard>
}