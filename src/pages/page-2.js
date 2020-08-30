import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <iframe
      title="SOL"
      style={{ border: "0", width: "350px", height: "350px" }}
      src="https://bandcamp.com/EmbeddedPlayer/track=1226866873/size=large/bgcol=ffffff/linkcol=7137dc/minimal=true/transparent=true/"
      seamless
    >
      <a href="http://phytin.bandcamp.com/track/sol">sol by Phytiŋ</a>
    </iframe>
  </Layout>
)

export default SecondPage
