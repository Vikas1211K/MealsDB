import React from 'react'
import MealList from '../components/meallist'
import SearchForm from '../components/searchform'

const Home = () => {
    return (
        <main>
            <SearchForm/>
            <MealList/>
        </main>
    )
}
export default Home