import {API_URL} from './config';

// Search meal by ID 
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
    return await response.json()
}
    
// Get All categories of meals
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php')
    return await response.json()
}

// filter by category
const getFilterCategory = async (categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
    return await response.json()

}

export {getMealById, getAllCategories, getFilterCategory};