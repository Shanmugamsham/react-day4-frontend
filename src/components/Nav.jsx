
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import Home from './Home';

const Nav = () => {

    return (
        <div>
      <BrowserRouter>
      <Routes>
        
       <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
            
        </div>
    );
};

export default Nav;