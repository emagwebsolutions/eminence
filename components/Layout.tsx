import React from "react"
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import Meta from "./Meta"


const Layout = ( { children }: {
  children: React.ReactNode
}) => {
  return (
          <>
          <Meta title="EMINENCE NEEDLE ART" />
            <Nav />
            <main>
              { children }
            </main>
            <Footer />
          </>
      )
}

export default Layout