import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

 
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
