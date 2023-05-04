import { Outlet } from "react-router-dom";
import "./App.css"
import ButtonLightning from "./buton-lightning/button-lightning";
import ButtonFly from "./button-fly/button-fly";
import CardFly from "./card-fly/card-fly";

function App() {
  const handleOpenLoginRegister= () => {
    const card = document.querySelector('.login-register-card');
    card.style.transform = '';
    card.style.opacity = '';
  }
  return (
    <div className="container ">
    <div className="row">
      <div className="col">
        <h1 className="mt-3">Test Layout</h1>
      </div>
      <div className="col text-end">
      <button onClick={handleOpenLoginRegister}>Login/Register</button>
        </div>
        <hr className="mb-3"></hr>
    </div>

    <div className="row ">
      <div >
        <ButtonFly
         content="Home">
        </ButtonFly>
        <ButtonFly
         content="Contact">
        </ButtonFly>
        <CardFly>
          
        </CardFly>
        <Outlet
          context={{
            
          }}
        />
      </div>
    </div>
  </div>
  );
}

export default App;
