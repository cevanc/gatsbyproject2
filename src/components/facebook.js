import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Facebook = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "facebook_icnmnstr.png" }) {
        childImageSharp {
          fluid(maxWidth: 40, maxHeight: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Facebook
