import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookDetails } from "../redux/bookSlice";
import { Link } from "react-router-dom";


export default function AddBooks() {
    const [bookTitle, setBookTitle] = useState('0');
    const [readStatus, setReadStatus] = useState(false);

    /**
     * dispatcher makes changes in the store with the help of reducers
     */
    const dispatch = useDispatch();

    /**
     * 
     * @param {*} event 
     * @description to add book details to the store with the help of reducer
     */
    const addBookFn = (event) => {
        event.preventDefault();
        // console.log("Book Title: ", bookTitle, "Read Status", readStatus);
        dispatch(addBookDetails({bookTitle, readStatus}));

    }



    return (
        <>
        <div className="flex justify-center items-center rounded-lg border-4 w-1/2">
            <div className="grid grid-rows-2">
                <div>
                    <h1>Add Books Details here:</h1>
                </div>
                <div>
                    <form onSubmit={addBookFn}>
                        <div>
                            <label htmlFor="bookName" className="mx-2">Book Name:</label><input type="text" name="" id="bookName" className="rounded-lg border-4 border-red px-2" placeholder="Enter name of the book" onChange={(event) => setBookTitle(event.target.value)} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="bookStatus" className="mx-2">Read Status:</label>
                            <input
                                type="radio"
                                name="bookStatusRadio"
                                id="unreadRadio"
                                onClick={() => setReadStatus(false)} />
                            <label htmlFor="unreadRadio" className="mr-4 ml-1">Unread</label>
                            <input
                                type="radio"
                                name="bookStatusRadio"
                                id="unreadRadio"
                                onClick={ () => setReadStatus(true)} />
                            <label htmlFor="readRadio" className="ml-1" >Read</label>
                        </div>
                        <br />
                        <div>
                            <button type="submit" className="rounded-full bg-lime-300 hover:bg-slate-900 hover:text-slate-50 border-2 border-white px-5 py-1">Add Books</button>
                            <button type="reset" className="rounded-full bg-lime-300 hover:bg-slate-900 hover:text-slate-50 border-2 border-white px-5 py-1">Reset</button>
                            <button type="button"  className="rounded-full bg-lime-300 hover:bg-slate-900 hover:text-slate-50 border-2 border-white px-5 py-1" onClick={() => window.location.href="/"}>Back to Home</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}