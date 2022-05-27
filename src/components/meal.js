import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({ id, name, area, image, tag, yt, source }) => {
    return (
        <div className="card" >
            <img src={image} className="card-img-top" alt="./logo.png" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {area ? `Origin : ${area}` : `Origin : unknown`}<br />
                    Category : {tag ? tag : 'Not Listed'}
                </p>
                {/* <p>yt-{yt} <br/> source-{source}</p> */}
                <div className='d-flex justify-content-evenly'>
                    <a href={source?source:'/'}  className={`btn btn-primary ${source?'':`disabled`}`}  target="_blank"  >Details</a>
                    <a href={yt} target="_blank" className={`btn btn-primary ${yt?'':`disabled`}`}  >Youtube video</a>
                    {/* <Link to={`/meal/${id}`} className="btn btn-primary ">Details</Link> */}
                </div>
            </div>
        </div>
    )
}
export default Meal