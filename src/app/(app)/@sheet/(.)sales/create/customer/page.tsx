import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from '@/components/ui/sheet'

export default function InterceptedCustomer() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Intercepted Create Customer</SheetTitle>
          <SheetDescription>Intercepted Create Customer</SheetDescription>
        </SheetHeader>
      </InterceptedSheetContent>
    </Sheet>
  )
}
