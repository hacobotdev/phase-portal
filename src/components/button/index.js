import React, { useEffect } from "react";
import '../../App.css';

const Boton = ({
    title,
    onAction,
    disabled,
    loading,
    style,
    ...props
  }) => {

  const handleOnClick = (event) => {
    if(onAction){
        onAction(event);
    }
  }

  return (
    <button
      className={`App-button${ style ? (' '+ style) : ''}${ disabled ? ' btnDisabled' : ''}`}
      onClick={handleOnClick}
    >{title}</button>
  );
};
export default Boton;