
function Header() {

    return (
        <header className="columns-3 h-10 bg-slate-900 text-slate-50 px-10">
                <div>
                    <h1>Basic Book Library</h1>
                </div>
                <div>
                    <a href="/add" className="rounded-full hover:bg-slate-50 hover:text-slate-900 border-2 border-white px-5 py-1">Add Books</a>
                </div>
                <div>
                    <h1>Filter Books</h1>
                </div>

        </header>

    );



};

export default Header;