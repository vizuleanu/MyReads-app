import React, { Component } from 'react'

import Title from './Title'
import AddBook from './AddBook'
import BookShelf from './BookShelf'

class ListOFBooks extends Component {
    
    render() {
        return(
            <div className="list-books">
                <Title /> 
                <AddBook />
                <BookShelf />
            </div>
        )
    }
}

export default ListOFBooks