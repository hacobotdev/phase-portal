import React, { useEffect } from "react";

const TextField = ({
    label,
    onTextChanged,
    value,
    ...props
  }) => {
  
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (event) => {
    if(onTextChanged){
      onTextChanged(event?.target);
    }
  }

  return (
    <>
      <p className={"App-textfield-label"}>{`${label}:`}</p>
      <input
        className={"App-textfield"}
        onChange={handleOnChange}
        value={value}
      />
    </>
  );
};
export default TextField;