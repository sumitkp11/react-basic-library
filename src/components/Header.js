import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="columns-2 h-11 bg-slate-900 text-slate-50 px-10">
            <div className='my-2'>
                <h1>Basic Book Library</h1>
            </div>
            <div>
                <Link to="/add" className="rounded-full hover:bg-slate-50 hover:text-slate-900 border-2 border-white px-5 py-1 my-2">Add Books</Link>
            </div>
        </header>
    );
};

export default Header;