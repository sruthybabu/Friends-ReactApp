import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addfriend from './components/Addfriend';
import Viewfriend from './components/Viewfriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/" exact element={<Addfriend/>}/>
<Route path="/view" exact element={<Viewfriend/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
