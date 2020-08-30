import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="iFrameContainer">
      <iframe
        style={{ border: "0", width: "350px", height: "350px" }}
        title="whelm-skbimbo"
        src="https://bandcamp.com/EmbeddedPlayer/album=1969772665/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
        seamless
      >
        <a href="http://phytin.bandcamp.com/album/whelm-skbimbo">
          Whelm/Skbimbo by Phytiŋ
        </a>
      </iframe>
    </div>
    <div className="iFrameContainer">
      <iframe
        style={{ border: "0", width: "350px", height: "350px" }}
        title="spiceal-ep"
        src="https://bandcamp.com/EmbeddedPlayer/album=558470286/size=large/bgcol=ffffff/linkcol=7137dc/minimal=true/transparent=true/"
        seamless
      >
        <a href="http://phytin.bandcamp.com/album/spiceal-ep">
          Spiceal EP by Phytiŋ
        </a>
      </iframe>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
