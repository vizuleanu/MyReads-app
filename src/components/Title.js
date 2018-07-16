import React from 'react';
import PropTypes from 'prop-types'

const Title = (p) => {
    return(
        <div className="list-books-title">
            <h1>{p.name}</h1>
        </div>
    )
}

Title.defaultProps = {
    name: 'My Reads App'
}

Title.propTypes = {
    name: PropTypes.string.isRequired
}

export default Title