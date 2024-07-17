import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-4">
      <h1>Hello world</h1>

      <div className="space-x-2">
        <Button asChild>
          <Link href={'/test'}>Test</Link>
        </Button>

        <Button asChild>
          <Link href={'/sales/create'}>Create Page</Link>
        </Button>

        <Button asChild>
          <Link href={'/sales/create/customer'}>Create Customer</Link>
        </Button>
      </div>
    </div>
  )
}
