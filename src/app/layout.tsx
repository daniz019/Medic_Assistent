import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "Assistente Médico",
  description: "Descreva seus sintomas e receba possíveis diagnósticos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 min-h-screen flex flex-col`}
      >
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}