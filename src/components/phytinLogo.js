import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhytinLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      phytinLogo: file(relativePath: { eq: "phytin.png" }) {
        childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.phytinLogo.childImageSharp.fixed} />
}

export default PhytinLogo
