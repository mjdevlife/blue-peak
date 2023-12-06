import Image from 'next/image';
import logo from 'public/images/logo.png';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhoneIncoming } from 'react-icons/hi';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className='flex items-center justify-center'>
        <Link href='/'>
          <Image src={logo} alt='Blue Peak Innovations' height={60} />
        </Link>
      </div>
      <div>
        <ul className='list-none sm:flex space-x-10 items-center justify-center py-4'>
          <li className='flex items-center justify-center'>
            <HiOutlinePhoneIncoming className='mr-1 text-[#062245]  w-5 h-5' />
            <Link href='tel:(617) 207-7850' className='text-[#062245] text-lg'>
              (617) 207-7850
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            <HiOutlineMail className='mr-1 text-[#062245] w-5 h-5' />

            <Link
              href='mailto:info@bluepeakinnovations.com'
              className='text-[#062245] text-lg'
            >
              info@bluepeakinnovations.com
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
