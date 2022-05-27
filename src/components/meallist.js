import React, { useContext } from 'react'
import Loading from './loading'
import AppContext from '../context/createcontext'
import Meal from './meal'

const MealList = () => {
    const { meals, loading } = useContext(AppContext)

    if (loading) {
        return <Loading />
    }
    if (meals.length < 1) {
        return <h2 className='text-center'>No meals match ur search</h2>
    }

    return (
        <div className='container' >
            <h2 className='d-flex justify-content-center'>Meals</h2>
            <div className='container my-3 d-flex justify-content-around'>
                <div className='row'>
                    {meals.map((elm) => {
                        return <div className='col-md-4 my-3' key={elm.id}>
                            <Meal  {...elm} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default MealList