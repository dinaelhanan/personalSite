/*kodus to this codepen for the highlighted style:
https://codepen.io/carlitocenteno/pen/myxgod
*/
import React from "react"
import { Link, graphql } from "gatsby"
import Logo from "../components/logo.js"
import Header from  "../components/header.js"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (

      //TODO make a toolbar (look up list horizontal)
      //TODO add site stuff from figa and do 
      //it on global.css :)
      // note: use intro to stylingin gatsby tutorial
      <div>
      <Header />
     <Logo />
     </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
