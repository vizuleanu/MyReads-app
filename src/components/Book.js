import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

    render() {
        const { b, onShelfChange } = this.props
        const noThumbLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif"

        return(
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${
                                b.imageLinks ? b.imageLinks.thumbnail : noThumbLink
                            })`}}>                        
                    </div>
                    <div className="book-shelf-changer">
                        <select 
                            onChange={e => onShelfChange(b, e.target.value)}
                            value={b.shelf ? b.shelf : ''}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{b.title ? b.title : null}</div>
                <div className="book-authors">{b.authors ? b.authors.join(',') : null}</div>
            </div>
        )
    }
}

Book.propType = {
    b: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func
}

export default Book