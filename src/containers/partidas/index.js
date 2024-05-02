import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/data";
import Header from "../../components/header";
import Boton from "../../components/button"

const Partidas = () => {
  const { getPartidas, savePartida } = useContext(DataContext);
  const [partidas, setPartidas] = useState(null);

  useEffect(() => {
    if (!partidas) {
      setPartidas(getPartidas())
    }
  }, [partidas]);

  const handleAddPartidaClick = () => {
    setPartidas(savePartida({ nombre: 'partida' }));
  }

  return (
    <>
      <Header />
      <Boton
        style="circle"
        title={"+"}
        onAction={handleAddPartidaClick}
      />
      {(partidas || []).map(partida => <p key={partida.id}>Partida #{partida.id}</p>)}
    </>
  );
};
export default Partidas;