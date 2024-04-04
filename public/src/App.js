import React from 'react';
import ListElements from './ListElements'
import CreateNewElement from './CreateNewElement'

function App() {
  const {elementos, setNombreNuevo, handleSubmit } = ListElements();

  return (
      <><header className="bg-dark text-white">
      <nav className="navbar navbar-dark">
        <ul className="navbar-nav mx-auto">
          <li>
            <a className="nav-link" href="index.html">Listado</a>
          </li>
        </ul>
      </nav>
      <div className="bg-danger text-white text-center py-3 h1">UFC</div>
    </header>
    
    <main className="h-100 flex-grow-1 bg-secondary">
      <div className="container-fluid py-5">
        <div className="row" id="filaContenedor">
          <div className="col-12">
            <div className="bg-light p-4 rounded shadow-sm m-4">
              <h1>Agregar Nuevo Elemento</h1>
              <form className="row g-2 py-2" onSubmit={handleSubmit}>
                <label className="fw-bold" htmlFor="nombreNuevo">Nombre: </label>
                <input type="text" className="form-control" id="nombreNuevo" name="nombreNuevo" onChange={(e) => setNombreNuevo(e.target.value)} />

                <button type="submit" className="btn btn-primary">Agregar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          {elementos.map((peleador) => <CreateNewElement key={peleador.id} peleador={peleador}/>)}
        </div>
      </div>
    </main>

    <footer className="bg-dark text-white text-center py-2">
      <p>&copy; 2023 Listado de Elementos</p>
    </footer></>
  );
}

export default App;