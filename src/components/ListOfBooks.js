import React, { Component } from 'react'

import BookTitle from './BookTitle'
import AddBook from './AddBook'
import BookShelf from './BookShelf'

class ListOFBooks extends Component {
    
    render() {
        return(
            <div className="list-books">
                <BookTitle /> 
                <AddBook />
                <BookShelf />
            </div>
        )
    }
}

export default ListOFBooks