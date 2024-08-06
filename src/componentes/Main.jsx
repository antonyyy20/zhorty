import React from 'react'
import "./Main.css"
import { useState, useRef, useEffect } from 'react';
import stars from "../stars.png"
import custom from "../custom.png"
import enlace from "../enlace.png"
import axios from "axios"
import Table from './Table';
const Main = () => {

    const originalUrl = useRef("");
    const customUrlLabel = useRef("");
    const [urlData, seturlData] = useState([]);
    const [render, setrender] = useState(false);
  
    
    const handleSubmit = async(e) =>{
      e.preventDefault();
      const url = originalUrl.current.value;
      const custom = customUrlLabel.current.value;
    
    const data = {
        originalUrl: url,
        customUrlLabel: custom
    };
    
    try {
        const response = await axios.post('https://backapi2.onrender.com/', data);
        console.log('Respuesta del servidor:', response.data);
        seturlData(prevData => [...prevData, response.data]);
        console.log(urlData)
        setrender(true)
      } catch (error) {
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango de 2xx
          console.error('Error en la respuesta:', error.response.data);
        } else if (error.request) {
          // La petición fue hecha pero no hubo respuesta
          console.error('No se recibió respuesta:', error.request);
        } else {
          // Algo sucedió al configurar la petición que desencadenó un error
          console.error('Error al configurar la petición:', error.message);
        }
      }
    }

  return (
    <main className="main">
    <h1 className="h1">Zhorten Your Looong Links FREE :)</h1>
    <p className="p">Zhorty is a simply way to shorten and custom your URLs for free – quick and simple!</p>
    <form className="form" onSubmit={handleSubmit}>
        <div className="mobile">
            <img src={enlace} className="image1" alt=''/>
            <input className="input1" placeholder='Enter the link here' ref={originalUrl}></input>
        </div>
        <div className="mobile">
            <img src={custom} className="image2" alt=''/>
            <input className="input2" placeholder='Customize your URL'  ref={customUrlLabel}></input>
        </div>
        <button className="button">Zhorten Now!</button>
    </form>
    {/* <p className="p">🎁You can generate infinite zhort URLs totally FREE🎁.</p>
    <div className="container">
        <p className="p">+More than 10,000 URLs generated.</p>
        <img src={stars} className="image3" alt=''/>
    </div> */}
    {render &&  <Table data={urlData}/>}
</main>
  )
}

export default Main