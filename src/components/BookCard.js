import React from 'react'

const BookCard = props =>{
    return(
        <div className='BookContainer'>
            <div className='BearCard' style={{ backgroundImage: `url('${}')`}}>
                <p>price per day</p>
                <p>Book name</p>
            </div>
        </div>
    )
}