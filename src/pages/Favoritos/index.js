import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos(){

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem("@produtos")
        setProdutos(JSON.parse(myList) || [])
    }, [])

    function hanldeDelete(id){
        let filtroProdutos = produtos.filter( (item) => {
            return(item.id !== id)
        })
        setProdutos(filtroProdutos)
        localStorage.setItem("@produtos", JSON.stringify(filtroProdutos))
        toast.success("produto removido da lista de favoritos com sucesso!!")
    }

    return(
        <div>
            <h1>Meus Produtos Favoritos</h1>

            {produtos.length === 0 && <span>não possui nenhum produto</span>}

            <ul>
                {produtos.map((item) => {
                    return(
                        <li key={item.id}>
                            {item.title}
                            <div>
                                <Link to={`/products/${item.id}`}>Ver Mais</Link>
                            </div>
                            <button onClick={() => hanldeDelete(item.id)}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;