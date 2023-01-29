

import Home from './Componentes/Home';
import Footer from './Componentes/Layout/Footer';
import Navbar from './Componentes/Layout/Navbar';
import { GlobalStyles } from './Componentes/Globalstyles';
import caro from "./img/imagem1000.jpg"
import foguete from "./img/foguete 0,01.jpg"
import medio from "./img/nave500.jpg"
import oMelhor from "./img/nave5000.jpg"
import naveMae from "./img/nave10000.jpg"



function App() {
  const produtos = [{
    // id: 001,
    nome: "foguete para a vida toda",
    preco: "R$ 1000,00",
    imagem:<img src={caro} alt="caro" />
},{
    // id:002,
    nome:"foguete quase bom",
    preco:"R$0,01",
    imagem:<img src={foguete} alt="Foguete" />

},{
    // id:003,
    nome:"foguete de boa qualidade",
    preco:"R$500,00",
    imagem:<img src={medio} alt="médio" />


},{
    // id:004,
    nome:"Nave Mãe",
    preco: "R$ 10000,00",
    imagem: <img src={naveMae} alt="navemae" />
},{
    // id:005,
    nome:"O melhor custo beneficio para sua familia",
    preco:"R$ 5000,00",
    image:<img src={oMelhor} alt="omelhor" />
}]
  return (
    <div >
      <GlobalStyles/>
      <Navbar/>
      <Home naves = {produtos}/>
      <Footer/>
     
     
    </div>
  );
}

export default App;
