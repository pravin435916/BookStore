import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(null); // State for cover photo file
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = async () => {
    const formData = new FormData(); // Create a FormData object for file upload
    formData.append('title', title);
    formData.append('author', author);
    formData.append('publishYear', publishYear);

    if (coverPhoto) { // Check if a cover photo is selected
      formData.append('coverPhoto', coverPhoto, coverPhoto.name); // Append cover photo to FormData
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5555/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });

      setLoading(false);
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error creating book', { variant: 'error' });
      console.error(error);
    }
  };

  const handleCoverPhotoChange = (event) => {
    setCoverPhoto(event.target.files[0]);
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Cover Photo</label>
          <input
            type='file'
            accept='image/*' // Accept only image files
            onChange={handleCoverPhotoChange}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
