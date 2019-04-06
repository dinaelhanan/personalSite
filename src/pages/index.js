
import React from "react"
import { Link, graphql } from "gatsby"
import Logo from "../components/logo.js"
import Header from  "../components/header.js"
class BlogIndex extends React.Component {
  render() {
    return (

      //TODO just add links to about and blog and make about a seperate page. Keep it simple stupid
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
     <Logo />
     <Header />
     <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
