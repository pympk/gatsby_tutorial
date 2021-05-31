import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      {/* <div className="about-heading"> */}
      <div className={page}>
        <h1>++ About ++</h1>
        <h1>hello from about page</h1>
        <p className={text}>
          Occaecat aute ex aute dolor mollit. Magna dolor qui est aliquip esse
          mollit tempor nostrud in excepteur sit. Proident reprehenderit id
          culpa magna nostrud reprehenderit. Officia ad ullamco sint aute quis
          sunt voluptate dolor occaecat. Excepteur aliqua non quis aliqua
          nostrud commodo consequat ipsum enim dolore adipisicing est. Ipsum
          dolor dolor et cillum sunt cupidatat et. Occaecat incididunt commodo
          sunt in labore elit Lorem ea qui veniam nulla dolor officia.
        </p>
      </div>
    </Layout>
  )
}

export default about
