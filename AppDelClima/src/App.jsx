import {useEffect, useState} from "react";

import { getCountries } from "./service/countries";
import { getCities } from "./service/cities";
import { getCityWeather } from "./service/weather";

//https://www.youtube.com/watch?v=A3SOd0c7a9s&t=542s
//npm run dev--
//apis de los paises restcountries.com
//api de las ciudades spot-rappi tambien puedes usar otra
//api del clima open wethermap
//crear cuenta de rappiappi
//crear una carpeta toolts donde esta todos tus servicios
//LLamada y estados realizados a la carpeta tools y archivo ajax
//definicion de ajax
//24:00
//31:00
//40:00
// sevicios crear una carpeta
//ser bien organizado y no tener funciones locas
//(..) los benditos dos puntos =)
//sintaxis prestar atencion
//58:00
//no entiendo q realizo; ya entendi cambios saco de aqui para meter en otro lugar
// error de sintaxis era method no nethod no se ve la m de n
// 1:09:00
// 1:20:00
//literal el problema era la "key" tenia q actualizar
//1:25:00
//1:30:00
//Con chatgtp se puede ubicar rapido el error
//1:55:00

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());

    })();
  

 
  }, []);

  // el codigo de abajo lo saque de chatgtp;
  // este del youtube originalconst countryHandler = async e => setCities (await getCities(e.currentTarget.value));    
  
  //siguiente codigo para hacer una VALIDACION y no salte error
  const countryHandler = async e => e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
  const cityHandler = async e => e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));
  
  
    

 return (
  <>  
    <div>
      <label>Elige un pais:</label>
      <select onChange={countryHandler}>
        <option value="">Selecciona</option>
        {countries.map(country => <option key={country.cca2} value={country.cca2}>
          {country.name.common}</option>)}
        
      </select>
    </div>
      {cities.length > 0 && (
       <div>
        <label> Elige una ciudad</label>
        <select onChange={cityHandler}>
          <option value="">Selecciona</option>
          {cities.map(city => <option key={city.id}>{city.name}</option>)}

        </select>
       </div>
      )}
      <hr />
      { weather && (
        <div>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          <h2>Actual temperature: {weather.main.temp}º</h2>
          <p>Min: {weather.main.temp_min}º</p>
          <p>Max: {weather.main.temp_max}º</p>
          {JSON.stringify(weather, null, 2)}
          
        </div>
      )}
   
   </>
  );
}

export default App;