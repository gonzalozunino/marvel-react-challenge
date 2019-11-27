import CryptoJS from "crypto-js";
import moment from "moment";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY_PRIVATE = process.env.REACT_APP_API_KEY_PRIVATE;
const BASE_URL = "http://gateway.marvel.com";

const ApiService = () => {
  const getCharacters = (origOptions = {}) => {
    const defaultOptions = { page: 0, count: 20, name: "", nameStartsWith: "" };
    const options = Object.assign(defaultOptions, origOptions);
    const URI = "/v1/public/characters";
    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(timeStamp + API_KEY_PRIVATE + API_KEY).toString(
      CryptoJS.enc.Hex
    );
    const currentOffset =
      options.page === 1 ? 0 : options.count * (options.page - 1);
    let params = `?apikey=${API_KEY}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`;

    if (options.name) {
      params = params.concat(`&name=${options.name}`);
    }

    if (options.nameStartsWith) {
      params = params.concat(`&nameStartsWith=${options.nameStartsWith}`);
    }

    return fetch(`${BASE_URL}${URI}${params}`);
  };

  return { getCharacters };
};

export default ApiService;
