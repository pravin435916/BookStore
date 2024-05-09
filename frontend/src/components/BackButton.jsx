import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = () => {
  return (
    <div className='flex bg-black h-12 w-12 text-white px-4 py-1 rounded-full justify-center items-center'>
      <Link
        to={'/'}
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;
