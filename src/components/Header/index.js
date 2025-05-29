import { Link } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <div>
        <header>
            <Link className="logo" to="/">Produtos</Link>
            <Link className="others" to="/others">Outros Produtos</Link>
        </header>
      
    </div>
  );
}

export default Header;
