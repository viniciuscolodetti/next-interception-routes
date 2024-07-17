export default async function AppLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  return (
    <div className="space-y-4 p-4">
      {children}
      {sheet}
    </div>
  )
}
