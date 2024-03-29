import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

interface CustomPagepProps {
  session: Session
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<CustomPagepProps>) {
  return (
    // Higher order component
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
