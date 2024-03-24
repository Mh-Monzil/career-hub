import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      
    }, [])

    const routes = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Jobs",
    path: "/jobs"
  },
  {
    id: 3,
    name: "Applied",
    path: "/applied"
  },
  {
    id: 4,
    name: "Blogs",
    path: "/blogs"
  },
  {
    id: 5,
    name: "Statistics",
    path: "/statistics"
  },
];


    return (
        <nav className="flex justify-between items-center gap-4 md:p-0 bg-white border-b-2 border-purple-400 md:border-0">
            <div className="flex justify-between w-full md:w-2/5 p-4 md:py-4 z-30 bg-white">
                <h1 className="text-4xl font-bold hover:cursor-pointer">CareerHub</h1>
                <div onClick={() => setMenu(!menu)} className="flex items-center md:hidden ">
                    {
                        menu ? 
                        <IoClose className="text-3xl"/> :
                        <GiHamburgerMenu className="text-3xl"/> 
                    }
                </div>
                
            </div>
            <ul className={`md:w-4/5 flex flex-col md:items-center md:justify-between gap-4 md:flex-row md:gap-6 lg:gap-10 bg-teal-400  md:bg-white absolute md:static ${menu ? "top-[74px]" : "-top-[800px]"} w-full md:w-fit md:top-0 md:m-4 p-4 duration-700 ease-in-out z-10`}>
                <div className="flex flex-col md:flex-row gap-6">
                    {
                        routes.map(route => <li key={route.id}><NavLink className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300 cursor-pointer" to={`${route.path}`}>{route.name}</NavLink></li>)
                    }
                </div>
                
                <button className=" btn w-fit bg-purple-500 px-6 py-2 rounded-md text-white font-semibold hover:bg-purple-600">Apply Now</button>
            </ul>
        </nav>
    );
};

export default Nav;