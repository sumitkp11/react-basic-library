import { useSelector, useDispatch } from "react-redux";
import { updateBookDetails, removeBookDetails } from "../redux/bookSlice";

export default function BookDetails() {
    const booksList = useSelector(state => state.books);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-center h-screen">
            {booksList.length > 0 ?
                <table className="border-separate border-spacing-2 border border-slate-500 table-auto">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 bg-slate-600 text-white w-40">Book Title</th>
                            <th className="border border-slate-600 bg-slate-600 text-white w-40">Read Status</th>
                            <th className="border border-slate-600 bg-slate-600 text-white w-40">Edit/Delete</th>
                        </tr>
                    </thead>
                    {booksList.map((book) => (
                        <tbody>
                            <tr>
                                <td className="border border-slate-700 text-center">{book.bookTitle}</td>
                                <td className="border border-slate-700 text-center">{book.readStatus ? "Read" : "Unread"}</td>
                                <td className="border border-slate-700"><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => dispatch(updateBookDetails(book.id))}>Edit</button><button className="rounded-full hover:bg-slate-300 hover:text-slate-900 border-2 border-white px-5" onClick={() => dispatch(removeBookDetails(book.id))}>Delete</button></td>
                            </tr>
                        </tbody>
                    ))}</table> : <div className="flex"><h2>No book to show. Please insert atleast one book!</h2></div>}
        </div>
    )
};