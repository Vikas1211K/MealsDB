import React, { useEffect, useState, useCallback } from 'react'
import AppContext from './createcontext'


const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`

const AppProvide = ({ children }) => {
    const [loading, setloading] = useState(false)
    const [searchTerm, setsearchTerm] = useState('z')
    const [meals, setmeals] = useState([])

    const featchMeals = useCallback( async () => {
        setloading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            // console.log(data)
            const { meals } = data

            if (meals) {
                const newMeals = meals.map((elm) => {
                    const { idMeal, strMeal, strArea, strMealThumb, strTags, strYoutube, strSource } = elm
                    return {
                        id: idMeal, name: strMeal, area: strArea, image: strMealThumb, tag: strTags, yt: strYoutube, source: strSource
                    }
                })
                setmeals(newMeals)
            }
            else {
                setmeals([])
            }
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    },[searchTerm])

    useEffect(() => {
        featchMeals()
        
    }, [searchTerm,featchMeals])


    return (
        <AppContext.Provider value={{
            loading,
            meals,
            setsearchTerm,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvide