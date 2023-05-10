import React from "react";
import "./style2.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../CarrinhoContext/CarrinhoContext.js";
import "./style.css";
import Header from "../Header/index.js";
import Menu from "../menu/index.js";
import mostrarConfirmacao from "../../../utils/confirmacao-compra";
import { LojaContext } from "../LojaContext/LojaContext.js";
const Lojas = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //const produtos = useSelector((state) => state.produtos) ?? [];
  //const lojx = useSelector((state) => state.lojas) ?? [];
  //const [isScreenWideEnough, setIsScreenWideEnough] = React.useState(false);
  const { adicionarProdutoCarrinho } = useContext(CarrinhoContext);
  const {bucasrLoja} = useContext(LojaContext);
  
  const [carrinho, setCarrinho] = useState([]);
  const [exibirIframe, setExibirIframe] = useState(false);
  const [nome,setNome] = useState("");
  const [animais_atendidos, setAnimais_atendidos] = useState("");
  const [contato, setContato] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [produtos, setProdutos] = useState([]);

  React.useEffect(() => {
    // const handleResize = () => {
    //   setIsScreenWideEnough(window.innerWidth >= 768); // define a condição de largura mínima para exibir o menu
    // };

    const {
        nome,
        animais_atendidos,
        contato,
        avaliacao,
        endereco,
        img,
        image,
        descricao,
        produtos
    } = bucasrLoja(id);

    setNome(        nome);
    setAnimais_atendidos(animais_atendidos);
    setContato(contato);
    setAvaliacao(avaliacao);
    setEndereco(endereco);
    setImg(img);
    setImage(image);
    setDescricao(descricao);
    setProdutos(produtos);

    // handleResize(); // define a largura da tela na montagem inicial do componente
    // window.addEventListener("resize", handleResize); // adiciona um listener para o evento de redimensionamento da tela
    // return () => {
    //   window.removeEventListener("resize", handleResize); // remove o listener do evento de redimensionamento da tela
    // };

    
  }, []);

//   const getProdutosByCategoria = (categoria, produtos) => {
//     console.log(lojx);
//     return produtos.filter((produto) => produto.categoria === categoria);
//   };

  //const handleAdicionarProduto = (produto) => {
  //  adicionarProdutoCarrinho(produto);
  //  setExibirIframe(true);
  //};

  return (
    <div>
        <h1>{nome}</h1>
        <h2>{animais_atendidos}</h2>
        <h3>{contato}</h3>
        <h4>{avaliacao}</h4>
        <h5>{endereco}</h5>
        <p>{descricao}</p>
    </div>
  );
};
export default Lojas;
