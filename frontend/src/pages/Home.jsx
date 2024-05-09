import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import Table from './Table';

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
      <Table />
      {/* <BooksCard books={books}/> */}
    </div>
  );
};

export default Home;
