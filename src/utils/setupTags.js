const setupTags = recipes => {
  // console.log("hello from utils")
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // console.log(tag)
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    // console.log(firstTag, secondTag, firstTag.localeCompare(secondTag), allTags)
    return firstTag.localeCompare(secondTag)
  })
  // console.log("allTags", allTags)
  // console.log("newTags", newTags)
  return newTags
}

export default setupTags
