import React, { Component } from 'react'

import Title from './Title'
import AddBook from './AddBook'

class ListOFBooks extends Component {
    
    render() {
        return(
            <div className="list-books">
                <Title /> 
                <AddBook />
            </div>
        )
    }
}

export default ListOFBooks