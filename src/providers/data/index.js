import { createContext, useState, useEffect } from 'react';

/** Constante del contexto de persistencia de datos entre navegación */
export const DataContext = createContext({});

export const DataProvider = (props) => {
  const local = JSON.parse(localStorage.getItem('data') || "{}");
  const [data, setData] = useState(local || {});

  /** Hook de prueba para ver los cambios de "data" en consola del explorador */
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    // eslint-disable-next-line
  }, [data])

  const getUsuario = () => {
    return data?.usuario || undefined;
  }

  const saveUsuario = (usuario) => {
    let newObj = JSON.parse(JSON.stringify(data));
    newObj.usuario = usuario;
    setData(newObj);
    return newObj.usuario;
  }

  const getPartidas = () => {
    return data?.partidas?.reverse() || [];
  }

  const savePartida = (partida) => {
    let newObj = JSON.parse(JSON.stringify(data));
    newObj.partidas = getPartidas();
    newObj.partidas.push(partida);
    setData(newObj);
    return newObj.partidas.reverse();
  }

  const deletePartida = (partida_uuid) => {
  }

  return (
    <DataContext.Provider value={{
      getUsuario,
      saveUsuario,
      getPartidas,
      savePartida,
      deletePartida,
    }}>
      {props.children}
    </DataContext.Provider>
  );
};
