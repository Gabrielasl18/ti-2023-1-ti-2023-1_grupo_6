import React from "react";
import './style.css';
import Header from '../Header/index.js';
import { useLocation, useNavigate } from 'react-router-dom';
import  { useContext } from 'react';
import { CarrinhoContext } from '../CarrinhoContext/CarrinhoContext.js';


const PedidosAndamento = () => {
    const location = useLocation();
    const { state: pedidosProduto } = location;
    const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
    const navigate = useNavigate();

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
            <h2>Detalhes do pedido:</h2>
            
            <ul class="ul-pedidos">
                {pedidosProduto.map((pedido) => (
                    <li key={pedido.id}>
                    <h2>{pedido.nameStore}</h2>
                    {pedido.products.map((produto) => (
                        <p key={produto.id}>{produto.name}</p>
                    ))}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default PedidosAndamento;
