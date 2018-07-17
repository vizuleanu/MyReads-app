import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

import ShelfOfBooks from './ShelfOfBooks'

class BookShelf extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books
            })
        })
    }

    onShelfChange = (book, shelf) => {
        const id = book.id
        const displayedBooks = [...this.state.books]
        const updateIndex = displayedBooks.findIndex(book => book.id === id)
        const updateBook = Object.assign( {}, displayedBooks[updateIndex], {
            shelf: shelf
        });

        this.setState({
            books: [...displayedBooks.slice( 0, updateIndex), updateBook, 
            ...displayedBooks.slice(updateIndex + 1)]
        })

        BooksAPI.update(book, shelf)
    }

    render() {
        const { books } = this.state
        
        let currentlyReading = [];
        let wantToRead = [];
        let read = [];

        books.forEach(book => {
            switch(book.shelf) {
                case 'currentlyReading':
                    currentlyReading.push(book)
                    break
                case 'wantToRead':
                    wantToRead.push(book)
                    break
                case 'read':
                    read.push(book)
                    break
                default:
                    break
            }
        })
        
        const listShelf = [
            { name: 'Currently Reading', books : currentlyReading },
            { name: 'Want To Read', books : wantToRead },
            { name: 'Read', books : read }
        ]

        return(
            <div className="list-books-content">
                {books.length > 0  ? (<div>
                                        {listShelf.map((shelf, index) => (
                                        <ShelfOfBooks
                                            key={index} 
                                            title={shelf.name}
                                            books={shelf.books} 
                                            onShelfChange={this.onShelfChange}/>
                                        ))}
                                    </div>) : (<div>searching</div>)
                }
            </div>
        )
    }
}

export default BookShelf