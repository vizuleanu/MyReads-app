import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ShelfOfBooks extends Component {

    render() {
        const { title, books, onShelfChange } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            <Book
                                key={index} 
                                book={book} 
                                onShelfChange={onShelfChange} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

ShelfOfBooks.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default ShelfOfBookss