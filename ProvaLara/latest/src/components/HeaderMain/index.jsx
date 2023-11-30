import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';
export default function HeaderMain(props) {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <h1>{props.nome} </h1>
                </div>
                {/* <div className="btn-newPost">
                    <Link to={"/categorias"}>
                        <button> </button>
                    </Link>
                </div> */}
            </div>
        </header>
    )
}
