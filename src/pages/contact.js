import React from "react"
// import Link from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
const Contact = () => {
  function hoverOver(event) {
    event.target.className = "animate__animated animate__fadeOut"
  }

  function hoverOff(event) {
    event.target.className = "animate__animated animate__fadeIn"
  }
  return (
    <Layout>
      <SEO title="contact" />
      <h1 style={{ marginTop: "5rem", fontSize: "16px" }}>
        for all inquiries:{" "}
        <a
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          href="mailto: phytin4@gmail.com"
        >
          phytin4@gmail.com
        </a>
      </h1>
    </Layout>
  )
}

export default Contact
