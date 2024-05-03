import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/data";
import Partidas from "../partidas";
import Usuario from "../usuario";

const Home = () => {
  const { getUsuario } = useContext(DataContext);
  const [usuario, setUsuario] = useState(null);


  useEffect(() => {
    if (!usuario) {
      let user = getUsuario();
      setUsuario(user?.nombre || '')
    }
    // eslint-disable-next-line
  }, [usuario]);

  return <>
      { !usuario && 
        <Usuario
          onSubmit={(value) => {setUsuario(value)}}
        />
      }
      {
        usuario &&
        <Partidas/>
      }
    </>
};
export default Home;