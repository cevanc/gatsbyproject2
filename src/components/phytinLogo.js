import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhytinLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      phytinLogo: file(relativePath: { eq: "phytin2.png" }) {
        childImageSharp {
          fixed(width: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.phytinLogo.childImageSharp.fixed}
      backgroundColor="rgb(139,0,139)"
    />
  )
}

export default PhytinLogo
