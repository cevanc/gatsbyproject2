import React from "react"

import Layout from "../components/layout"
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
    <div classame="iFrameContainer">
      <iframe
        width="350px%"
        title="bmtp18-19"
        height="350px"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/839889674&color=%23baba58&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      ></div>
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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
