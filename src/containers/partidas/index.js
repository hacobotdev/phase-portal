import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/data";
import useHttp from "../../hooks/useHttp";
import { urls } from "../../common/constants/Rutas";
import { replaceUrl } from "../../common/utilities/urls";
import Header from "../../components/header";
import Boton from "../../components/button"
import PartidaCard from "../../components/partidaCard";
import PartidaJoin from "./join";

const Partidas = () => {
  const { sendRequest: createPartida, messages, isLoading } = useHttp();
  const { getPartidas, savePartida } = useContext(DataContext);
  const [ partidas, setPartidas ] = useState(null);
  const [ isJoinVisible, setIsJoinVisible ] = useState(false);

  useEffect(() => {
    if (!partidas) {
      setPartidas(getPartidas())
    }
    // eslint-disable-next-line
  }, [partidas]);

  const handleAddPartidaClick = () => {
    createPartida(
      {
        url: replaceUrl(`${urls.postPartida}`, { usuario_id: 12}),
        method: 'POST'
      },
      (data) => {
        setPartidas(savePartida(data));
      }
    );
  }

  const handleJoinPartidaClick = () => {
    setIsJoinVisible(true);
  }

  const handleOnPartidaJoin = (data) => {
    setPartidas(savePartida(data));
    setIsJoinVisible(false);
  }

  const handleOnPartidaJoinCancel = () => {
    setIsJoinVisible(false);
  }

  return (
    <>
      {!isJoinVisible &&
        <>
          <Header />
          <Boton
            type={"circle_1"}
            title={"+"}
            onAction={handleAddPartidaClick}
          />
          <Boton
            type={"circle_2"}
            title={">"}
            onAction={handleJoinPartidaClick}
          />
          {
            (partidas || []).map((partida) =>
              <PartidaCard 
                key={partida?.codigo}
                data={partida} 
              />
            )
          }
        </>
      }
      {isJoinVisible &&
        <PartidaJoin
          onSubmit={handleOnPartidaJoin}
          onCancel={handleOnPartidaJoinCancel}
        />
      }
    </>
  );
};
export default Partidas;