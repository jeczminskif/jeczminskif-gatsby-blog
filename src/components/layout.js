import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
    return (
        <div className={container}>
            <nav>
                <Link to ="/" className={navLinkText}>back to homepage</Link> // <Link to ="/about" className={navLinkText}>about me</Link> // <Link to="/blog" className={navLinkText}>blog</Link>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout