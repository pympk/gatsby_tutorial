import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "capitalize" }}>++ home ++</h1>
      <h2>hello from home page</h2>
      <div>
        <Link to="/about">About gatsby link</Link>
      </div>
      <div>
        <Link to="/company/history">company history</Link>
      </div>
      <div>
        <a href="https://www.gatsbyjs.com/docs/">hef link</a>
      </div>
      <div>
        <Link to="https://www.gatsbyjs.com/docs/">gatsby Link</Link>
      </div>
    </Layout>
  )
}
