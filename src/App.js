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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBzXeOtgHHU5wCndbd5bp6CtN8z_ROHy7Y",
//   authDomain: "appstudy-8700b.firebaseapp.com",
//   projectId: "appstudy-8700b",
//   storageBucket: "appstudy-8700b.firebasestorage.app",
//   messagingSenderId: "400117595966",
//   appId: "1:400117595966:web:b8fb237f4fdb8a1656b66f",
//   measurementId: "G-FT4SZ85WSP"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);