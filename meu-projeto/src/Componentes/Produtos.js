// 


function Produtos(props){
       
        
    return(
        <div>
        <ul>
                <li>{props.nave.nome}</li>
                <li>Preço:{props.nave.preco}</li>
                <li>{props.nave.imagem}</li>
                
                </ul></div>
    )
}
export default Produtos