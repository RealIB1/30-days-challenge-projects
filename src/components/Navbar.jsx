import React, { Component, Fragment, useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import Home from '/src/routes/Home'
import About from '/src/routes/About'
import Projects from '/src/routes/Projects'
import Contact from '/src/routes/Contact'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Outlet,
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'


const NavMenu = () => {
    const [ isOpen, setClick] = useState(false)
    const handleClick = () => setClick(!isOpen)
    const handleLinkClick = () => setClick(false)
    return (
        <Fragment>
            <nav className='navbar'>
                <Link to={'/'} className='nav__logo' onClick={handleLinkClick}><svg id="logo-13" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z" class="ccustom" fill="#442781"></path> <path d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z" class="ccompli1" fill="#61459C"></path> <path d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z" class="ccompli2" fill="#A992DB"></path> <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" class="ccustom" fill="#FF7917"></path> </svg></Link>
                <div>
                    <div className='navbar__toggle' onClick={handleClick}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                </div>
                <ul className={isOpen ? 'nav__menu active' : 'nav__menu'}>
                    <li className='nav__item'>
                        <NavLink to={'/'} className={({ isActive }) => 'nav__link' + (isActive ? ' activated' : '')}
                        onClick={handleLinkClick}>Home</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to={'/projects'} className={({ isActive }) => 'nav__link' + (isActive ? ' activated' : '')}
                        onClick={handleLinkClick}>Projects</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to={'/contact'} className={({ isActive }) => 'nav__link' + (isActive ? ' activated' : '')}
                        onClick={handleLinkClick}>Contact</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to={'/about'} className={({ isActive }) => 'nav__link' + (isActive ? ' activated' : '')}
                        onClick={handleLinkClick}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}


// const Routers = () => {
//     return (
//         <Router>
//             <NavMenu />
//             <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route exact strict path="/about" element={<About />} />
//                 <Route exact strict path="/contact" element={<Contact />} />
//                 <Route exact strict path="/projects" element={<Projects />} />
//             </Routes>
//         </Router>
//     )
// }

const NavLayout = () => {
    return (
        <>
            <NavMenu />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([ {
    element: <NavLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
    ]
}
])



const Navbar = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Navbar;