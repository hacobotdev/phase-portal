import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/data";
import Partidas from "../partidas";
import Usuario from "../usuario";

const Home = () => {
  const { getUsuario} = useContext(DataContext);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (!usuario) {
      let user = getUsuario();
      setUsuario(user?.nombre || '')
    }
  }, [usuario]);

  return !usuario ? 
    <Usuario
      onSubmit={(value) => {setUsuario(value)}}
    /> : 
    <Partidas/>
};
export default Home;