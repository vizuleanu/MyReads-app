import React from 'react';
import { Link } from 'react-router-dom';

const AddBook = () => {
    return(
        <div className="open-search">
            <Link to="/search">Add book</Link>
        </div>
    )
}

export default AddBook