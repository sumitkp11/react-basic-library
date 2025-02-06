import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="border-b-2 grid grid-cols-2 bg-red-500 h-auto">
            <div className='text-white m-4 font-bold text-2xl'>
                <h1 className=''>Basic Book Library</h1>
            </div>
            <div className='m-4'>
                <Link to="/add" className="rounded-full hover:bg-slate-50 hover:text-slate-900 border-2 border-white p-2 text-white">Add Books</Link>
            </div>
        </header>
    );
};

export default Header;