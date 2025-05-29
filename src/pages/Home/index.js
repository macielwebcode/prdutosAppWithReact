import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home() {

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      async function loadProdutos(){
        const response = await api.get("products")
        
        setProdutos(response.data.slice(0, 10))
        setLoading(false)

      }

      loadProdutos()

    }, [])


    if(loading){
      return(
        <div>
          <h2>Carregando Produtos...</h2>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="lista-produtos">
          {produtos.map((item) => {
            return(
              <div className="item" key={item.id}>
                <div className="headerItem">
                  <h4>{item.title}</h4>
                </div>
                <div className="bodyItem">
                  <span className="price">Preço: {item.price}</span>
                  
                </div>
                <div className="bodyItem">
                  <span className="category">Ctaegoria: {item.category}</span>
                </div>
                <div className="imageItem">
                  <img src={item.image} alt={item.title} />
                </div>
                
                <Link to={`/products/${item.id}`}>Mais Detalhes</Link>
                
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;
  