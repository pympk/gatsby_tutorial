import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food"
          height={400} // max value
          placeholder="tracedSVG"
          layout="constrained" // default constrained
          className="example-img"
          as="section"
        />
        {/* <StaticImage src="../assets/images/big.jpg" alt="food" /> */}
        {/* <StaticImage src="../assets/images/croissant.jpg" alt="food" /> */}
        {/* <img src={big} alt="food" /> */}
        {/* <h2>gatsby image</h2> */}
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 50vw;
  margin: 0 auto;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
  /* img {
    width: 200px;
  } */
`
export default Images
