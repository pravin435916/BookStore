import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Default to true to show loading spinner initially
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className={`btn-switch ${
            showType === 'table' ? 'active' : ''
          }`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className={`btn-switch ${
            showType === 'card' ? 'active' : ''
          }`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-3xl">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
