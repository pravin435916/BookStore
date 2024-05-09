import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='w-72 h-52 p-8 rounded-lg shadow-xl bg-white overflow-hidden'>
      <div className='flex flex-col gap-2'>
        <span className='text-gray-400'>{book.publishYear}</span>
        <span className='font-bold '>{book.author}</span>
      </div>
      <div className='w-full flex justify-between items-center gap-x-2  p-2'>
        <BiShow
          className='text-3xl  cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl' />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
