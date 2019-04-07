
import React from "react"
import { Link, graphql } from "gatsby"
class Header extends React.Component {
  render() {
    return (
        <div class="header">
      <ul>
                <i><li><Link style={{ boxShadow: `none`,fontSize: '3em' }} to="/blog">
                  >the blog
                </Link></li></i>
                <i><li><Link style={{ boxShadow: `none`,fontSize: '3em'  }} to="/about">
                 >more on me
                </Link></li></i>
     </ul>
     <br/>

     </div>
    )
  }
}

export default Header
