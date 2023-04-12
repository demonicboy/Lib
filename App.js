import { Outlet } from "react-router-dom";
import "./App.css"

function App() {
  
  return (
    <div className="container ">
    <div className="row">
      <div className="col">
        <h1 className="mt-3">Test Layout</h1>
      </div>
      
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
