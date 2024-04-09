import { sampleData } from './data'

const recipeApi = {
  fetch: async(id:string) => {
    const recipe = sampleData.find((recipe) => recipe.id === id);
    return await Promise.resolve(recipe);
  },
  get: async () => {
    console.log('GET recipe data', sampleData)
    return await Promise.resolve(sampleData);
  }

}

export { recipeApi }