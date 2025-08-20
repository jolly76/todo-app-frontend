
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="bg-gray-100 shadow-md p-4">
            <nav className="flex justify-center space-x-5">
            <Link to="/todo-add">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add</button>
                </Link>
            <Link to="/todo-show">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Show</button>
                </Link>
                <Link to="/todo-done">
                <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Done</button>
                </Link>
            </nav>
        </div>
    )
}
export default Header