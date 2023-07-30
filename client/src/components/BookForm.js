// client/src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = () => {
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    pages: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the book data to the server's POST route using fetch
    fetch('/api/book/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book saved to the database:', data);
        // Do any additional actions here (e.g., show a success message)
      })
      .catch((error) => {
        console.error('Error saving book to the database:', error);
        // Handle errors (e.g., show an error message)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Book Name:</label>
        <input
          type="text"
          id="name"
          value={bookData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="author">Book Author:</label>
        <input
          type="text"
          id="author"
          value={bookData.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="pages">Number of Pages:</label>
        <input
          type="number"
          id="pages"
          value={bookData.pages}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" id="submit">
          Submit Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
