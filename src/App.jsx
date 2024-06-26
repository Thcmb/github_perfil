import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


  function App() {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
    const [nomeUsuario, setnomeUsuario] = useState('')


    return (
      <>
      <div className="usuario">
        <label htmlFor="">Insira o nome do Usuario</label>
      <input type="text" onBlur={(e) =>setnomeUsuario(e.target.value)}/>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
      {/* {formularioEstaVisivel && <Formulario />}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
      </>
    )
  }

export default App
