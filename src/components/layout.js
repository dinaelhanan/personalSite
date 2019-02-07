import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
      
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog`}
          >
          <img src={require('../../static/logo.png')} />
            
          </Link>
        
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <img src={require('../../static/logo.png')} />
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, */}
           Built with
          {` `}
          <a href="https://www.gatsbyjs.org">GatsbyJS</a>{` `}and ❤️ by digitaldina
        </footer>
      </div>
    )
  }
}

export default Layout
