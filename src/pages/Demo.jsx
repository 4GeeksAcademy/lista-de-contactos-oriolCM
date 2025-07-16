// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <h1 className="text-center">Añade un nuevo contacto</h1>
      <form>
        <div className="form-group">
          <label for="name" className="mb-1">Nombre completo</label>
          <input type="text" className="form-control mb-3" id="inputName" aria-describedby="emailHelp" placeholder="Nombre Completo"/>
        </div>
        <div className="form-group">
          <label for="email" className="mb-1">Email</label>
          <input type="text" className="form-control mb-3" id="inoutEmail" placeholder="Introduce tu email"/>
        </div>
        <div className="form-group">
          <label for="phone" className="mb-1">Telefono</label>
          <input type="text" className="form-control mb-3" id="inputPhone" placeholder=" Introduce tu telefono"/>
        </div>
        <div className="form-group">    
          <label for="adress" className="mb-1">Dirección</label>    
          <input type="text" className="form-control mb-3" id="inputAdress" placeholder="Introduce tu dreccion"/>
        </div>
      </form>
      <br />
      <div>
        <Link to="/">
        <button className="btn btn-danger">Volver a los contactos</button>
      </Link>
      <button type="submit" className="btn btn-primary mx-5">Guardar contacto</button>
      </div>
    </div>
  );
};
