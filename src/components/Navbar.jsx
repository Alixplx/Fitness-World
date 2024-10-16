import './Navbar.css'
import logoImg from './../assets/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data.js'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {

    const [navShow, setNavShow] = useState(false)

    return(

        <nav>
            
            <div className="container nav_container">

                <Link to='/' className='logo' onClick={() => setNavShow(false)}>

                    <img src={logoImg} />
                </Link>

                <ul className={`nav_links ${navShow ? 'show_nav' : 'hide_nav'}`}>

                    {
                        links.map(({name, path}, index) => {

                            return(

                                <li key={index}>

                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setNavShow(prev => !prev)}>
                                        
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                
                <button className='nav_button-toggle' onClick={() => setNavShow(prev => !prev)}> 
                    
                    {

                        navShow ? <IoMdClose /> : <FaBars /> 
                    }
                </button>

            </div>

        </nav>
    )
}

export default Navbar