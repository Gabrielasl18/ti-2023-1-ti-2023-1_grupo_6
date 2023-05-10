import React from 'react'
import './style.css';
import { useSelector } from 'react-redux';
import HeaderLoja from '../HeaderLoja'
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'

export default function HomeLoja({nome, produtos}) {
    const { user } = useAuth();
    const lojx = useSelector((state) => state.lojas) ?? [];
    const navigate = useNavigate();
    const urlLoja = localStorage.getItem('urlLoja'); // recupera a urlLoja do Local Storage
    console.log(lojx);  
    const lojxComUrl = lojx.filter((loja) => loja.url === urlLoja);
    const lojxEncontrada = lojxComUrl[0];
    return (
        <div className='homeLoja'>
        <HeaderLoja/>
            <h1>{lojxEncontrada.nome}</h1>
        </div>
    )
}
