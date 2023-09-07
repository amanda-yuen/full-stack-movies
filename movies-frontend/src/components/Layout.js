import { Outlet } from "react-router-dom";

//create boilerplate code for layout component
import React from 'react'

const Layout = () => {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default Layout