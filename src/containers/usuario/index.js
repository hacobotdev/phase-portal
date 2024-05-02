import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/data";
import TextField from "../../components/textField";
import Boton from "../../components/button"

const Usuario = ({
  onSubmit
}) => {
  const { getUsuario, saveUsuario } = useContext(DataContext);
  const [usuario, setUsuario] = useState(null);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (!usuario && !changed) {
      let user = getUsuario();
      setUsuario(user?.nombre || '')
    }
  }, [usuario]);

  const handleSaveUserClick = () => {
    if (usuario) {
      setUsuario(saveUsuario({ nombre: usuario }));
      if (onSubmit) {
        onSubmit(usuario);
      }
    }
  }

  const handleOnTextChanged = (target) => {
    setUsuario(target?.value)
    setChanged(true);
  }

  return (
    <>
      <TextField
        label={"Nombre"}
        onTextChanged={handleOnTextChanged}
      />
      <Boton
        title={"Guardar"}
        onAction={handleSaveUserClick}
        disabled={(usuario || "").length === 0}
      />
    </>
  );
};
export default Usuario;