import { useState,} from "react"



function Filter(){
    const [Preco, setPreco] = useState()
    const [inserirPreco, setInserir] = useState()

    return(
        <div >
           <p> <input type="number"value={Preco} onChange={(ev) => setPreco(ev.target.value)}/> </p>
           <p> <input type="text" value={inserirPreco} onChange={(ev) => setInserir(ev.target.value)}/> </p>
        </div>
    )

}
export default Filter