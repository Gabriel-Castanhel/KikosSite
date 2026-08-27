import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="p-4 bg-opacity-90 bg-neutral-800 text-white">
            <div className="flex justify-center justify-around justify-evenly">
                <img src="./public/img/logo.png" alt="Logo" className="w-60 h-18" />
                <div className="flex items-center w-1/2">
                    <div className="flex items-center w-full bg-neutral-600 rounded-md px-2 py-1">
                        <input type="text" placeholder="Search..." className="text-lg border border-transparent py-2 px-2 text-white w-full placeholder:text-gray-400 focus:outline-none" />
                        <VscSearch className="w-6 h-8" />

                    </div>

                </div>
                <div className="flex items-center">
                    <Link to="/login" className="select-none text-white px-2 py-1 rounded-md border-1 border-red-600 hover:bg-red-600 transition duration-300">Login</Link>
                </div>
            </div>
        </div>
    )
}