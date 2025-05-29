import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

function Produto() {

    const { id } = useParams()
    const navigation = useNavigate()
    const [produto, setProduto] = useState([])

    useEffect(() => {
      async function loadProduto(){
        await api.get(`/products/${id}`)
                  .then((response) => {
                  
                  setProduto(response.data)
              })
              .catch(() => {
                navigation("/", {replace: true})
                return;
              })
      }
      loadProduto()

      return() => {
        console.log('componente desmontado')
      }

    }, [id, navigation])

    function saveProduct(){
      const myList = localStorage.getItem("@produtos")

      let savedProducts = JSON.parse(myList) || [];

      const hasProduct = savedProducts.some((savedProducts) => savedProducts.id === produto.id)
      
      if(hasProduct){
        toast.warning("produto existente na lista")
        return;
      }

      savedProducts.push(produto);
      localStorage.setItem("@produtos", JSON.stringify(savedProducts))
      toast.success("produto salvo com sucesso")
    }

    return (
      <div>
        <div className="itemDetailt">
          Detalhes do Produto: {produto.description}
        </div>
        <div className="containerBtnSave">
        <button onClick={saveProduct}>Salvar como Favorito</button>
        </div>
      </div>
    );
  }
  
  export default Produto;
  