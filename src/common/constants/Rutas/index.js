import appConfig from "../../../config/app";

export const urls = {
  apiUrl: appConfig.API_URL,
  postPartida: appConfig.API_URL + "/{usuario_id}/partida",
};
