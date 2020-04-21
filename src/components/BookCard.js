import React from 'react'

const BookCard = props =>{
    return(
        <div className='BookContainer'>
            <div className='BookCard' /*style={{ backgroundImage: `url('${}')`}}*/>
                <p>price per day</p>
                <p>Book name</p>
            </div>
            <div className='BookAction'>
                <div onClick>see more detail</div>
                <div onClick>Get It</div>
            </div>
        </div>
    )
}

export default BookCard;