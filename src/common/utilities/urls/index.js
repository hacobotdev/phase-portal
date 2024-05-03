import { get } from "lodash";

/** Funcion general para administrar los replace en las url */
const replaceUrl = (uri = "", data = {}) => {
  let result = uri;
  const array = uri.match(/[^{}]+(?=})/g) || [];
  array.forEach((element) => {
    let value = get(data, element);
    if(Array.isArray(value)){
      value = JSON.stringify(value);
    }
    result = result.replace(`{${element}}`, value);
  });
  return result;
};
export { replaceUrl };
