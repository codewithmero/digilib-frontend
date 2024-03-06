/* eslint-disable react/prop-types */
import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';

function BookCard({ className, src, title, author, publisher }) {

  return (
    <div className={className}>
      <div className="book-cover-container">
        <img className="book-cover" src={src} width={'200px'} height={'auto'} />
      </div>
      <div className="book-details">
        <h4 className="book-title">Title: {title}</h4>
        <p className="book-author">Author: {author}</p>
        <p className="book-publisher">Publisher: {publisher}</p>
        <NavLink to={`/view-file`}>View Pdf</NavLink>
      </div>
    </div>
  );
}

export default BookCard;