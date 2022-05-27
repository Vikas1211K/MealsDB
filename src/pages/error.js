import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return(
        <div className='container text-center'>
            <h1>OOPs!! That's a dead end</h1>
            <Link to='/' className='btn btn-success'>Back Home</Link>
        </div>
    )
}
export default Error