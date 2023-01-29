
import homs from "../img/homs.jpg"
import Produtos from "./Produtos"
import Filter from "./Filter"


function Home(props){

    return(
        <label>
        <section >
            <article>
            <h1>
                Bem-vindo a <span>Astroloja </span>
            </h1>
            <p>Aqui você encontra as melhores naves para dar uma volta no Universo.</p>
            <img src={homs} alt="Costs"/>
            
            </article>
            <article><Filter/></article>
            <article><Produtos  nave={props.naves[0]}/></article>
            <article><Produtos  nave={props.naves[1]}/></article>
            <article><Produtos  nave={props.naves[2]}/></article>
            <article><Produtos  nave={props.naves[3]}/></article>
            <article><Produtos  nave={props.naves[4]}/></article>
            
            
        </section>
        
       
       
       </label>


    )
}
export default Home