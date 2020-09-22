/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  function hoverOver(event) {
    event.target.className = "animate__animated animate__fadeOut"
  }

  function hoverOff(event) {
    event.target.className = "animate__animated animate__fadeIn"
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{
          paddingTop: "80px",
          paddingBottom: "2rem",
          maxWidth: "100%",
          alignItems: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
        <div
          id="mystery-link-container"
          style={{ textAlign: "left", marginTop: "4rem" }}
        >
          <Link
            onMouseOver={hoverOff}
            onMouseOut={hoverOver}
            id="mystery-link"
            to="/page-2"
            className="animate__animated animate__fadeOut"
          >
            ?
          </Link>
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
