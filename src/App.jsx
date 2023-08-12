import './App.css'
import { useEffect, useState } from 'react';
import Trabajo from './components/Trabajo';
import Filtros from './components/Filtros';
import work from './data.json'

function App() {
  const [filtro, setfiltro] = useState([]);
  const [data, setData] = useState(work);

  // ++ Añadir filtros ++
  function handleClick(element) {

    let exist = false;
    // ++ Si el filtro existe en la lista de filtros +
    for (let i = 0; i < filtro.length; i++) {
      if ((filtro[i].nombreFiltro) == element.nombreFiltro) {
        alert(element.nombreFiltro + " ya se encuentra dentro de la lista de filtros");
        exist = true;
      }
    }
    // ++ Si el filtro es nuevo ++
    if (exist == false) {
      setfiltro([...filtro, element]);
    }
  }

  // ++ Eliminar filtros ++
  function handleClickDelete(id) {
    setfiltro(filtro.filter(response => (response.id !== id)));
    setData(work)
  }

  function handleClickClear() {
    setfiltro([]);
    setData(work)
  }


  useEffect(
    function () {
        filtro
        .forEach(element => {
          console.log(element)
          console.log(data)
          setData(data.filter(response => ((response.languages).concat(response.tools)).includes(element.nombreFiltro)))
        });
    }
    ,
    [filtro]);

  return (
    <div>
      <header>
        <img src="./src/images/bg-header-desktop.svg" className='banner' alt="" />
      </header>
      <Filtros
        listadoFiltros={filtro}
        handleDelete={handleClickDelete}
        handleClear={handleClickClear}></Filtros>
      <Trabajo
        data={data}
        listadoFiltros={filtro}
        handle={handleClick}></Trabajo>
    </div>
  );

}

export default App
