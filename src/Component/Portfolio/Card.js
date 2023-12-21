import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="boc btn_shadow">
        <div className="img">
            <img src={props.image} alt="" />
        </div>
        <div className="category d_flex">
            <span>{props.category}</span>
            <label>
                <i className='far fa-heart'></i>
                {props.totalLike}
            </label>
        </div>
        <div className="title">
            <h2>{props.title}</h2>
            <a href="#popup" className='arrow'>
                <i className='fas fa-arrow-right'></i>
            </a>
        </div>
        </div>
    </>
  )
}

export default Card
