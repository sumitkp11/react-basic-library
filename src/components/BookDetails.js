import { useSelector, useDispatch } from "react-redux";
import { removeBookDetails } from "../redux/bookSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function BookDetails() {
    let booksList = useSelector(state => state.books);

    useEffect(() => {
        setFilteredBooks(booksList);
    }, [booksList]);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // Local state to store filtered books
    const [filteredBooks, setFilteredBooks] = useState(booksList);

    const filterBy = (status) => {
        if (status == 'all') {
            setFilteredBooks(booksList);
        } else {
            const newFilteredBooks = booksList.filter((book) => book.readStatus === status);
            setFilteredBooks(newFilteredBooks); // Update local state with filtered books

        }

    };

    return (

        <div className="flex items-center justify-center h-screen">
            <div>Filter By: <button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => filterBy(true)}>Read</button><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => filterBy(false)}>Unread</button><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => filterBy('all')}>Show All</button></div><br />

            {filteredBooks.length > 0 ?
                <div>
                    <table className="border-separate border-spacing-2 border border-slate-500 table-auto">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 bg-slate-600 text-white w-40">Book Title</th>
                                <th className="border border-slate-600 bg-slate-600 text-white w-40">Read Status</th>
                                <th className="border border-slate-600 bg-slate-600 text-white w-40">Edit/Delete</th>
                            </tr>
                        </thead>
                        {filteredBooks.map((book) => (
                            <tbody>
                                <tr>
                                    <td className="border border-slate-700 text-center">{book.bookTitle}</td>
                                    <td className="border border-slate-700 text-center">{book.readStatus ? "Read" : "Unread"}</td>
                                    <td className="border border-slate-700"><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => navigate('/add', { state: { editBookTitle: book.bookTitle, editBookId: book.id, updateCall: true } })}>Edit</button><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => dispatch(removeBookDetails(book.id))}>Delete</button></td>
                                </tr>
                            </tbody>
                        ))}</table> </div> : <div className="flex"><h2>No book to show. Please insert atleast one book!</h2></div>}
        </div>
    )
}