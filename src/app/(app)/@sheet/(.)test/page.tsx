import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import {
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from '@/components/ui/sheet'

export default function InterceptedTest() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Intercepted Test</SheetTitle>
          <SheetDescription>Intercepted Test</SheetDescription>
        </SheetHeader>
      </InterceptedSheetContent>
    </Sheet>
  )
}
