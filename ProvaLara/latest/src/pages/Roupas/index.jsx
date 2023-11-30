import { Link } from "react-router-dom";
import Header from "../../components/Header";
import './style.css';
import axios from 'axios';
import { useEffect, useState } from "react";


export default function Roupas() {
const [roupas, setRoupas] = useState([]);

useEffect( ()=>{
  axios.get("https://64e73583b0fd9648b78f8944.mockapi.io/roupas")
    .then( (response) =>{
      setRoupas(response.data);
    }).catch( ()=>{
      console.log("Deu problema na req....");
    })
},[]);

function deleteRoupas(id){
  axios.delete(`https://64e73583b0fd9648b78f8944.mockapi.io/roupas/${id}`);

  setRoupas(roupas.filter(roupas=>roupas.id !== id))
}

  return (
    <div>
      <Header/>
      <main>
        <div className="cards">
          {roupas.map((roupa, key)=>{
          return(  
          <div className="card" key={key}>
            <header>
              <h2>{roupa.titulo}</h2>
            </header>
            <div className="line"></div>

            <p>{roupa.descricao}</p>

            <div className="btns">
              <div className="btn-edit">
                <Link to={`/update/${roupa.id}`}>
                  <button>Editar</button>
                </Link>
              </div>
              <div className="btn-delete">
                <button onClick={ ()=>deleteRoupas(roupa.id)}>Apagar</button>
              </div>
            </div>
          </div>
          );
          })}
        </div>
      </main>
    </div>
  );
}
