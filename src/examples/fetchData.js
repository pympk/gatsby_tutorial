import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
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

const FetchData = () => {
  // const data = useStaticQuery(getData)
  console.log(useStaticQuery(getData))
  return (
    <div>
      <h1>hello from fetchData</h1>
    </div>
  )
}

export default FetchData
