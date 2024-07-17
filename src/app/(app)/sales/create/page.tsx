import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SalesCreate() {
  return (
    <div className="space-y-4">
      <h1>Sales Create</h1>

      <div className="space-x-2">
        <Button asChild>
          <Link href={'/sales/create/customer'}>Create Customer</Link>
        </Button>
      </div>
    </div>
  )
}
