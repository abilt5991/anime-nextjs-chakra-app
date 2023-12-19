import type { Metadata } from 'next'
import { Providers } from './providers'

//setting information about the page with Metadata
//This application lists animes in the "Information Page" and only users who have an account can access the application.
export const metadata: Metadata = {
  title: 'Anime',
  description: 'Watch your favourite animes at Anime',
}

export default function RootLayout({ //The top-most layout, shared across all pages in an application. Must contain html and body tags.
  children,
}: {
  children: React.ReactNode //children prop of type ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {/* Provider is imported and it is a wrapper around the main content. More in "providers" */}
        <Providers>{children}</Providers> 
        </body>
    </html>
  )
}
