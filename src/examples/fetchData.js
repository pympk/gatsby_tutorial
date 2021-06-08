import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
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
const FetchData = () => {
  const {
    site: {
      info: {
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  // console.log(useStaticQuery(getData))
  return (
    <div>
      {/* <h1>hello from fetchData</h1> */}
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h2>person name is : {name}</h2>
    </div>
  )
}

// const FetchData = () => {
//   const {
//     site: {
//       info: { title },
//     },
//   } = useStaticQuery(getData)
//   // console.log(useStaticQuery(getData))
//   return (
//     <div>
//       {/* <h1>hello from fetchData</h1> */} */}
//       {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
//       <h2>site title is : {title}</h2>
//     </div>
//   )
// }

// const FetchData = () => {
//   const data = useStaticQuery(getData)
//   // console.log(useStaticQuery(getData))
//   return (
//     <div>
//       {/* <h1>hello from fetchData</h1> */}
//       <h2>Name: {data.site.siteMetadata.person.name}</h2>
//     </div>
//   )
// }

export default FetchData
