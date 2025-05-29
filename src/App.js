import RoutesApp from "./routes";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  );
}

export default App;


