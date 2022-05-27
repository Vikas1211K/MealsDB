import React, { useContext } from 'react'
import AppContext from '../context/createcontext'

const SearchFrom = () => {
    const { setsearchTerm } = useContext(AppContext)
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchMeal() {
        if (searchValue.current.value.length < 1) {
            setsearchTerm('c')
        }
        else {
            setsearchTerm(searchValue.current.value)

        }
    }
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className=" container my-3" style={{ width: "80%" }}>

            <form className="d-flex justify-content-center" onSubmit={handleSubmit} >
                {/* <label htmlFor="name">Search Meal: </label> */}
                <input className="form-control me-2" placeholder='Search for meals here' type="text" name='name' id='name' aria-label="Search" ref={searchValue} onChange={searchMeal} />
                {/* <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button> */}
            </form>
        </div>
    )
}
export default SearchFrom