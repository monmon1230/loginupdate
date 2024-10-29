import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Component/Login or register/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./Component/HomePage/HomePage";
import Register from "./Component/Login or register/register";
import ParticlesBg from "particles-bg";
import ForgetPass from "./Component/Login or register/ForgetPass";
import Signin from "./Component/Login or register/signin";


const App = () => { 

  return (
    <div className="App">
      
      <BrowserRouter>
      <Container className="Container">
      <ParticlesBg type="thick" bg={true} />
        <Routes>
       
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="forgetpassword" element={<ForgetPass/>}/>
            <Route path="/signin" element={<Signin/>}/>
       
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
