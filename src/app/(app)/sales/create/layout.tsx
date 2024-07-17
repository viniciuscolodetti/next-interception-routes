export default async function SalesLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  return (
    <div className="space-y-4">
      {children}
      {sheet}
    </div>
  )
}
