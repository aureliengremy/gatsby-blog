//Sample Layout Component - src/components/layout 📁
import React from "react"

const Layout = ({children}) => {
  return (
    <div>
      <nav className="navigation-bar">
         <ul>
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="/blog">Blog</a></li>
           <li><a href="#contact">Contact</a></li>
     </ul>
      </nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
export default Layout;
