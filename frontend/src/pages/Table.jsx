import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BooksTable from '../components/home/BooksTable';
const Table = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
   <BooksTable books={books}/>
    </div>
  );
};

export default Table;
