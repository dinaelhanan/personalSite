
import React from "react"
import { Link, graphql } from "gatsby"
class Header extends React.Component {
  render() {
    return (
        <div class="header">
      <ul>
                <i><li><Link style={{ boxShadow: `none` }} to="/blog">
                  >the blog
                </Link></li></i>
                <i><li><Link style={{ boxShadow: `none` }} to="/about">
                 >more on me
                </Link></li></i>
     </ul>
     <br/>

     </div>
    )
  }
}

export default Header
