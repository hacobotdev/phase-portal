import React, { useContext, useEffect, useState } from "react";
import TextField from "../../../components/textField";
import Boton from "../../../components/button"

const PartidaJoin = ({
  onSubmit,
  onCancel
}) => {
  const [ codigo, setCodigo ] = useState('');

  const handleSaveUser = () => {
    if ((codigo || "").length > 3 && onSubmit) {
      onSubmit({ nombre: codigo});
    }
  }

  const handleOnCancel = () => {
    if (onCancel) {
      onCancel();
    }
  }

  const handleOnTextChanged = (target) => {
    setCodigo(target?.value);
  }

  return (
    <>
      <TextField
        label={"Codigo de partida"}
        onTextChanged={handleOnTextChanged}
      />
      <Boton
        title={"Unirse"}
        onAction={handleSaveUser}
        disabled={(codigo || "").length < 4}
      />
      <Boton
        type={"cancel"}
        title={"Cancelar"}
        onAction={handleOnCancel}
      />
    </>
  );
};
export default PartidaJoin;