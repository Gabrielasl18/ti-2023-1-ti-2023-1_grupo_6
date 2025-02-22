import React from "react";
import './style.css';
import Header from '../Header/index.js';
import { useLocation } from 'react-router-dom';
import  { useContext } from 'react';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';
import { useNavigate } from 'react-router-dom';
import PedidosAndamento from "../pedidoEmAndamento";


const Pedidos = () => {
    const navigate = useNavigate();
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);

    const pedidosProduto = [{
        "id": 1,
        "idUser": 1,
        "idStore": 1,
        "nameStore": "Pássaro Pet Shop",
        "totalValue" : 35.99,
        "products": [
            {
            "class": "Limpeza",
            "name": "Shampoo para cachorro",
            "value": 35.99,
            "amount": 1
            }
        ]
    },
    {
        "id": 2,
        "idUser": 1,
        "idStore": 1,
        "nameStore": "Pássaro Pet Shop",
        "totalValue" : 35.99,
        "products": [
            {
            "id": 1,
            "class": "Limpeza",
            "name": "Shampoo para cachorro",
            "value": 35.99,
            "amount": 1
            }
        ]
    }]

    const produtos = pedidosProduto.products

    React.useEffect(() => {
        const handleResize = () => {
        setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o Navbar
        };

        handleResize(); // define a largura da tela na montagem inicial do componente
        window.addEventListener('resize', handleResize); // adiciona um listener para o evento de redimensionamento da tela
        return () => {
        window.removeEventListener('resize', handleResize); // remove o listener do evento de redimensionamento da tela
        };
    }, []);

    return (
        <div class="pedidos-usuario">
            <div>
            {isScreenWideEnough && <Header />}
            </div>
            <h2>Seus pedidos:</h2>
            
            {pedidosProduto.length > 0 ? (
                <ul class="ul-pedidos">
                {pedidosProduto.map((pedido) => (
                    <li key={pedido.id}>
                    <h2>Número do pedido: {pedido.id}</h2>
                    <h3>Loja: {pedido.nameStore} <br/> Total: R$ {pedido.totalValue} </h3>
                    <button className="botao-pedido" onClick={(produtos)=>{navigate(<PedidosAndamento produto = {produtos}/>)}}>
                    Visualizar pedido
                    </button>
                    </li>
                ))}
                </ul>
            ) : (
                <p> Você ainda não fez nenhum pedido </p>
            ) }
        </div>
    );
};

export default Pedidos;
