import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {

    state = {
      books: [],
      currentBooks: []
    }

    componentDidMount() {
      BooksAPI.getAll()
        .then(books => {
          const booksID = books.map(book => ({id: book.id,shelf: book.shelf}))
          this.setState({currentBooks: booksID})
        })
    }

    onSearch = (e) => {
      const value = e.target.value
      
      if(value) {
        BooksAPI.search(value).then(books => {
          if(!books || books.hasOwnProperty('error')) {
            this.setState({books: []})
          } else {
              this.setState({books: books})
          }  
        })
      } else {
        this.setState({books: []})
      }
    }

    onShelfChange = (book, shelf) => {
      const nBooks = []
      BooksAPI.update(book, shelf)
        .then(books => {
          Object.keys(books).forEach(shelf => {
              return books[shelf].map(id => ({ id: id, shelf: shelf})).forEach(book => {
                nBooks.push(book)
              })
            })
            return nBooks
        })
        .then(nBooks => {
          this.setState({ currentBooks: nBooks })
        })
    }
 
    render() {
        const { books, currentBooks } = this.state
        let booksList

        if (books.length >= 1) {
          booksList = books.map((book, index) => {
            currentBooks.forEach(currentBook => {
              if(currentBook.id === book.id) {
                book.shelf = currentBook.shelf
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
          booksList = null
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
               {booksList}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookSearch