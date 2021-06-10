import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// if recipes is missing return empty Array
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        console.log(recipe)
        return <p>{recipe.title}</p>
      })}
    </div>
  )
}

export default RecipesList
