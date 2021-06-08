import React from "react"
import { graphql } from "gatsby"

// const Testing = props => {
//   console.log(props)
const Testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
export default Testing