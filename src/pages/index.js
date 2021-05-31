import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <h1>++ Home ++</h1>
        <h1>hello from home page</h1>
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
      </div>
    </Layout>
  )
}
