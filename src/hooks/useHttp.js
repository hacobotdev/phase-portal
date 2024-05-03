import { useCallback, useState, useEffect } from "react";

//Hook que realizar requests a un API
export const useHttp = () => {
  //Estados que manejan el estado de carga y error del request
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    return () => {
      // Previene error: Can't perform a React state update on an unmounted component
      setIsLoading(false);
      setError(null);
      setStatus(null);
      setMessages(null);
    };
    // eslint-disable-next-line
  }, []);

  /**
   * Administra el envio y recepcion de un HTTP Request
   * @param {*} requestConfig - Configuracion del Request (url, headers, etc.)
   * @param {*} applyData - Aplica los datos dependiendo la respuesta
   */
  const sendRequest = useCallback(async (requestConfig, applyData, onError) => {
    //Se establece el estado de carga
    setIsLoading(true);
    //Se limpia el estado de error
    setError(null);
    setMessages(null);
    try {
      //Constante de respuesta
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: { 'Content-Type': 'application/json' },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      setStatus(response.status);
      
      //Si la respuesta no es un Ok, devuelve el error
      if (!response.ok) {
        const res = await response.json();
        setMessages(res);
        if (onError) {
          onError(res);
        }
      }
      else {
        //Se obtiene la respuesta de la llamada
        const res = await response.json();
        if (applyData) {
          applyData(res);
        }
      }
    } catch (err) {
      //En caso de error se regresa el objeto
      const errorBody = err.error || err.errors;
      const errorValue = errorBody || {
        errorCode: "500",
        error:
          "Se produjo un error al enviar o recuperar información del servidor",
      };
      if (onError) {
        onError(errorValue);
      }
      setError(errorValue);
    }
    //Se termina la carga
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Constante que limpia el estado de errores para modales
  const clearError = useCallback(async () => {
    setError(null);
  }, []);

  //Estados y funciones utilizables del hook
  return {
    isLoading,
    error,
    status,
    messages,
    clearError,
    sendRequest,
  };
};

export default useHttp;
