import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      {/* <div className="home-heading"> */}
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>++ home ++</h1>
        <h1>hello from home page</h1>
        <p className={text}>
          Adipisicing mollit exercitation eu sint dolore. Ex veniam tempor enim
          eiusmod deserunt veniam officia dolor aliqua laborum. Excepteur
          eiusmod veniam occaecat adipisicing dolor anim eu. Consequat Lorem
          adipisicing elit eiusmod fugiat.
        </p>
        <div>
          <Link to="/about">about gatsby link</Link>
        </div>
        <div>
          <Link to="/company/history">company history</Link>
        </div>
        <div>
          <a href="https://www.gatsbyjs.com/docs/">hef link</a>
        </div>
        {/* <div>
          <Link to="https://www.gatsbyjs.com/docs/">gatsby Link</Link>
        </div> */}
      </div>
    </Layout>
  )
}
