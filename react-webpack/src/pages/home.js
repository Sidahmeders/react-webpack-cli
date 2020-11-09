import React from 'react'
import '../styles/home.scss'
import Navbar from '../components/navbar/navbar.jsx'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <h2>Home Page</h2>
        </div>
    )
}

export default Home