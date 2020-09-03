import React from "react"
// import Link from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <h1 style={{ marginTop: "0%" }}>
        GIVE ME YOUR EMAIL ADDRESS AND I'LL SIGN YOU UP FOR THINGS YOU'VE NEVER
        EVEN HEARD OF BEFORE
      </h1>
      <input />
      <button type="submit">SUBMIT</button>
    </Layout>
  )
}

export default Contact
