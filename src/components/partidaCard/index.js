import React, { useEffect } from "react";

const PartidaCard = ({
  data
}) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={"App-partidaCard"}
      key={"codigo"}
    >
      <p>{`Código: ${data?.codigo}`}</p>
      <p>{`Jugadores: ${data?.jugadores?.length}`}</p>
      <p>{`Estatus: ${data?.status?.nombre}`}</p>
    </div>
  );
};
export default PartidaCard;