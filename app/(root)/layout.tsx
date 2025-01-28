import { ReactNode } from 'react'
import Navbar from '@/app/components/navbar'

interface Props {
  children?: Readonly<ReactNode>;
}

export default function layout({children}: Props) {

  return (<main className="font-work-sans">
    <Navbar />

    {children}
  </main>)
}
