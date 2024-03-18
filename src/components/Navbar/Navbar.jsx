import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "../Link/Link";
import { useState } from "react";


const Navbar = () => {
const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Service' },
        { id: 4, path: '/products/:id', name: 'Contact' },
        { id: 5, path: '/contact', name: 'Help' }
      ];
      
     
      

    return (
        <nav>
            <div className="md:hidden text-2xl bg-yellow-600 text-black px-6" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <ImCross />:<GiHamburgerMenu/>
                }
            
            </div>
          <ul className={`md:flex absolute md:static bg-yellow-600 px-6 shadow-lg ml-6 md:ml-0 py-2 duration-1000 ${open ? 'top-6':'-top-60'}`}>
               {
                  routes.map(route => <Link  key={route.id} route={route}></Link>)
               }
          </ul>
        </nav>
    );
};

export default Navbar;