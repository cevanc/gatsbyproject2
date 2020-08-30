import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
      position: "sticky",
      background: `rgb(139,0,139)`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: ".5rem .2rem 1.25rem .4rem",
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
            textAlign: "centered",
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
          padding: "10px",
        }}
      >
        Releases
      </Link>

      <Link
        to="/page-2"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: "10px",
        }}
      >
        Other
      </Link>
    </div>
    <div
      id="linkBox"
      style={{
        margin: "30px",
        display: "flex",
        justifyContent: "space between",
      }}
    >
      <a
        href="https://www.soundcloud.com/phytin"
        id="profile-link"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "0 5% 0 0" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          style={{
            backgroundImage:
              'URL("https://www.iconsdb.com/icons/preview/white/square-xxl.png")',
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-14.333 15.524c-.405-.365-.667-.903-.667-1.512 0-.608.262-1.146.667-1.512v3.024zm1.333.476c-.243 0-.369.003-.667-.092v-3.792c.316-.101.465-.097.667-.081v3.965zm1.333 0h-.666v-3.778l.206.121c.091-.375.253-.718.461-1.023v4.68zm1.334 0h-.667v-5.378c.206-.154.426-.286.667-.377v5.755zm1.333 0h-.667v-5.905c.251-.027.328-.046.667.006v5.899zm1.333 0h-.667v-5.7l.253.123c.119-.207.261-.395.414-.572v6.149zm6.727 0h-6.06v-6.748c.532-.366 1.16-.585 1.842-.585 1.809 0 3.275 1.494 3.41 3.386 1.303-.638 2.748.387 2.748 1.876 0 1.143-.869 2.071-1.94 2.071z" />
        </svg>
      </a>
      <a
        href="https://music.apple.com/us/artist/phyti%C5%8B/1436978382"
        id="profile-link"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "0 5% 0 0" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          style={{
            backgroundImage:
              'URL("https://www.iconsdb.com/icons/preview/white/square-xxl.png")',
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3.814 3c.205 1.871-1.467 3.823-3.207 3.687-.215-1.634 1.322-3.611 3.207-3.687zm-.229 15.979c-1.072.021-1.416-.635-2.641-.635s-1.607.616-2.621.656c-1.715.065-4.361-3.886-4.361-7.331 0-3.165 2.205-4.734 4.132-4.762 1.033-.019 2.009.696 2.64.696.633 0 1.819-.86 3.065-.733.52.021 1.984.21 2.926 1.585-2.496 1.627-2.107 5.032.57 6.284-.524 1.519-2.093 4.211-3.71 4.24z" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/phytinn"
        id="profile-link"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "0 5% 0 0" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          style={{
            backgroundImage:
              'URL("https://www.iconsdb.com/icons/preview/white/square-xxl.png")',
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
        </svg>
      </a>
      <a
        href="https://open.spotify.com/artist/59Qzda0hhZqLEZqjNmEn7m  "
        id="profile-link"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "0 5% 0 0" }}
      >
        <svg
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            backgroundImage:
              'URL("https://www.iconsdb.com/icons/preview/white/square-xxl.png")',
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <path d="M19 0c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14zm-7 4c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8s8-3.581 8-8c0-4.418-3.582-8-8-8zm3.669 11.539c-.144.236-.451.31-.686.166-1.878-1.148-4.243-1.408-7.028-.772-.268.062-.535-.106-.597-.375-.061-.268.106-.535.375-.596 3.048-.697 5.662-.397 7.771.891.235.144.309.451.165.686zm.979-2.178c-.181.293-.565.385-.858.205-2.15-1.322-5.428-1.704-7.972-.932-.33.099-.678-.087-.778-.416-.1-.33.086-.677.416-.778 2.905-.881 6.517-.454 8.987 1.063.293.181.385.565.205.858zm.084-2.269c-2.578-1.531-6.832-1.672-9.294-.925-.395.12-.813-.103-.933-.498-.12-.396.103-.814.499-.934 2.826-.858 7.523-.692 10.492 1.07.356.211.472.671.262 1.026-.211.355-.671.472-1.026.261z" />
        </svg>
      </a>
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
