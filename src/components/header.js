import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Image from "../components/image"
import PhytinLogo from "../components/phytinLogo"
import Facebook from "../components/facebook"
import Soundcloud from "../components/soundcloud"
import Spotify from "../components/spotify"
import Apple from "../components/apple"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "grid",
      justifyContent: "start",
      gridColumnGap: ".85vw",
      position: "fixed",
      background: `rgb(139,0,139)`,
      padding: `0`,
      width: "100%",
    }}
  >
    <div
      id="logo-holder"
      style={{
        margin: "12.5% 0 0 0",
        gridColumnStart: "0",
        gridColumnEnd: "1",
        gridRowStart: "0",
        gridRowEnd: "1",
      }}
    >
      <Link to="/">
        <PhytinLogo />
      </Link>
    </div>
    <div
      id="navbar-links"
      style={{
        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "0",
        gridRowEnd: "1",
        margin: "15% .05vw 15% .05vw",
      }}
    >
      <Link
        id="releases"
        to="/"
        style={{
          border: "1px solid black",
          color: `white`,
          textDecoration: `none`,
          padding: "10px",
          fontSize: "14px",
          marginRight: "4px",
        }}
      >
        Releases
      </Link>

      <Link
        id="other"
        to="/page-2"
        style={{
          border: "1px solid black",
          color: `white`,
          textDecoration: `none`,
          padding: "10px",
          fontSize: "14px",
        }}
      >
        Other
      </Link>
    </div>
    <div
      id="link-box"
      style={{
        margin: "80% 0 80% 0",
        width: "4vw",
        minWidth: "3.9vw",
        display: "inline-grid",
        gridColumnGap: ".5%",
        gridRowGap: ".5%",
        gridColumnStart: "2",
        gridColumnEnd: "3",
        gridRowStart: "0",
        gridRowEnd: "1",
      }}
    >
      <div
        id="link-container"
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "2",
        }}
      >
        <a
          href="https://www.soundcloud.com/phytin"
          id="profile-link"
          target="_blank"
          rel="noreferrer"
        >
          <Soundcloud />
        </a>
      </div>
      <div
        id="link-container"
        style={{
          gridColumnStart: "2",
          gridColumnEnd: "3",
        }}
      >
        <a
          href="https://music.apple.com/us/artist/phyti%C5%8B/1436978382"
          id="profile-link"
          target="_blank"
          rel="noreferrer"
        >
          <Apple />
        </a>
      </div>
      <div
        id="link-container"
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "2",
        }}
      >
        <a
          href="https://www.facebook.com/phytinn"
          id="profile-link"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
      </div>
      <div
        id="link-container"
        style={{
          gridColumnStart: "2",
          gridColumnEnd: "3",
        }}
      >
        <a
          href="https://open.spotify.com/artist/59Qzda0hhZqLEZqjNmEn7m  "
          id="profile-link"
          target="_blank"
          rel="noreferrer"
        >
          <Spotify />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Phytiŋ`,
}

export default Header
