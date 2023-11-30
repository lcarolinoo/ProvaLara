import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <div className="container">
                <Link to={"/"}>
                    {/* <img src={Back} style={{ width: '50px' }}/> */}
                </Link>
            </div>
        </header>
    )
}
