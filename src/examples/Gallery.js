import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          id
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        console.log(image)
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            ></GatsbyImage>
            <p>name: {name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  /* gap: 1rem; */
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
