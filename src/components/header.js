import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "flex",
      position: "fixed",
      background: `rgb(139,0,139)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: ".5rem .2rem .25rem .4rem",
        maxWidth: 960,
        padding: `0.1525rem 0.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div id="navbarLinks">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Releases
      </Link>
    </div>
    <div id="navbarLinks">
      <Link
        to="/page-2"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Other
      </Link>
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
