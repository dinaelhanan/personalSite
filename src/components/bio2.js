import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            
            <div
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: 250,
                borderRadius: `100%`,
              }}
            >            
              <img src={require('../../static/me.jpeg')} style={{borderRadius:`50%`}} alt={author}/>
            </div>
            <p>
              Written by <strong>{author}</strong> who leads the Milton Hack Club (which she founded) and loves working on and hearing about cool projects. She rarely checks social media, so
              {` `}
              <a href={`mailto:dinaelhanan@gmail.com`}>
                here's her email.
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery2 = graphql`
  query BioQuery2 {
    
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
