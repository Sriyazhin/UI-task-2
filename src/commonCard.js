import React from 'react';


const Commoncard = (props)=>{
    return(
        <div className={props.divisionName}>
        <div className='foricon'><img src={props.photoName} alt='image' className='cardicon' height='100px'></img></div>
        <div className='headingone'>{props.cardName}</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
    );
};
export default Commoncard;