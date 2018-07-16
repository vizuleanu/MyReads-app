import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {

    state = {
      books: [],
      displayedBooks: []
    }

    componentDidMount() {
      BooksAPI.getAll()
        .then(books => {
          const idBooks = books.map(book => ({ id: book.id,shelf: book.shelf }))
          this.setState({ displayedBooks: idBooks })
        })
    }

    onSearch = (e) => {
      const eventValue = e.target.eventValue
      
      if(eventValue) {
        BooksAPI.search(eventValue).then(books => {
          if(!books || books.hasOwnProperty('error')) {
            this.setState({ books: [] })
          } else {
              this.setState({ books: books })
          }  
        })
      } else {
        this.setState( { books: [] })
      }
    }

    onShelfChange = (book, shelf) => {
      const nBooks = []
      BooksAPI.update(book, shelf)
        .then(books => {
          Object.keys(books)
            .forEach(shelf => {
              return books[shelf].map(id => ({ id: id, shelf: shelf}))
              .forEach(book => {
                nBooks.push(book)
              })
            })
            return nBooks
        })
        .then(nBooks => {
          this.setState({ displayedBooks: nBooks })
        })
    }
 
    render() {
        const { books, displayedBooks } = this.state
        let booksGrid

        if (books.length > 0) {
          booksGrid = books.map((book, index) => {
            displayedBooks.forEach(cbook => {
              if(cbook.id === book.id) {
                book.shelf = cbook.shelf
              }
            })

            return (
              <li key={index}>
                <Book
                  onShelfChange={this.onShelfChange}
                  book={book} />
              </li>
            ) 
          })
        } else {
          booksGrid = null
        }

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  onChange={this.onSearch}
                  placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
               {booksGrid}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookSearch