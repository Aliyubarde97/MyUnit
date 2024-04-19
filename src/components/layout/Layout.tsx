import { ReactNode } from "react"
import Navigation from "../navigation/Navigation"
import Footer from "../footer/Footer"

interface LayoutProps{
    children:ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <Navigation/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout
