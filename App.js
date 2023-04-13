import { Outlet } from "react-router-dom";
import "./App.css"

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
