import React from "react";

const Boton = ({
    title,
    onAction,
    disabled,
    loading,
    type,
    ...props
  }) => {

  const handleOnClick = (event) => {
    if(onAction){
        onAction(event);
    }
  }

  return (
    <button
      className={`App-button${ type ? (' '+ type) : ''}${ disabled ? ' btnDisabled' : ''}`}
      onClick={handleOnClick}
    >{title}</button>
  );
};
export default Boton;