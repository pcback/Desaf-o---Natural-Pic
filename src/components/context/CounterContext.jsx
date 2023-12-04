import axios from "axios";
// crear el contexto
import { createContext, useState, useEffect } from "react";
// proveer el contexto
export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    datos();
  }, []);

  const url = "../../public/photos.json";
  const datos = async () => {
    await axios
      .get(url)
      .then(function (response) {
        // handle success
        setData(response.data.photos);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  };

  return (
    <CounterContext.Provider value={{ data, setData }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterProvider;
