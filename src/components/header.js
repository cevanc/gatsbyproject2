import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PhytinLogo from "../components/phytinLogo"
import Facebook from "../components/facebook"
import Soundcloud from "../components/soundcloud"
import Spotify from "../components/spotify"
import Apple from "../components/apple"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(60px, 110px))",
      justifyItems: "center",
      alignItems: "start",
      justifySelf: "start",
      alignSelf: "center",
      gridColumnGap: "25px",
      position: "fixed",
      background: `rgb(139,0,139)`,
      border: ".5px solid black",
      padding: `0`,
      width: "100%",
    }}
  >
    <div
      id="logo-holder"
      style={{
        alignSelf: "start",
        justifySelf: "start",
        margin: "0 0 0 0",
        gridColumn: "1/2",
      }}
    >
      <Link to="/">
        <PhytinLogo />
      </Link>
    </div>
    <div
      id="navbar-links"
      style={{
        gridColumn: "2 / 3",
        textAlign: "center",
        justifySelf: "center",
        marginTop: "17.5%",
        marginLeft: "9%",
        alignSelf: "start",
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
        margin: "2% 0 5% 0",
        display: "inline-grid",
        gridColumnGap: "5%",
        gridRowGap: "5%",
        gridColumn: "3 / 4",
      }}
    >
      <div
        id="link-container"
        style={{
          gridColumn: "1/2",
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
          gridColumn: "2/3",
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
          gridColumn: "1/2",
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
          gridColumn: "2/3",
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
