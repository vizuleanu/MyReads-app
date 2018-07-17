import React from 'react';
import PropTypes from 'prop-types'

const BookTitle = (p) => {
    return(
        <div className="list-books-title">
            <h1>{p.name}</h1>
        </div>
    )
}

BookTitle.defaultProps = {
    name: 'My Reads App'
}

BookTitle.propTypes = {
    name: PropTypes.string.isRequired
}

export default BookTitle