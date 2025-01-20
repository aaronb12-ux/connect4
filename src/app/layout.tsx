//importing the metadata type from next.js
import type { Metadata } from 'next'
//importing the global css (tailwind)
import './globals.css'

//setting up the metadata for the website (shows in browser tab, search results)
export const metadata: Metadata = {
    title: 'Connect 4',
    description: 'A Connect 4 game',
}


//main layout component
export default function RootLayout({
    //children is what get's passed into this layout (the page content)
    children,
}: {
    //typescript syntax: says children must be a react node
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-slate-800">
        {children}
        </body>
        </html>
    )
}

//className="min-h-screen bg-gray-50" -> making the body as large as the viewport. and setting the background color
                                         //of the page to gray