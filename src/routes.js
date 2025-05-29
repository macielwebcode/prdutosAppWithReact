import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Favoritos from './pages/Favoritos';


function RoutesApp(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="products/:id" element={ <Produto /> } />
                <Route path="/favoritos" element={ <Favoritos /> } />


                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;