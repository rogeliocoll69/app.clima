import { ajax } from "../tools/ajax";

export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places",
        headers: {
            "X-RapidAPI-Key": "1910a52470msh958174fcc9d32e2p1d1e2djsna5cc8369e71f",
            "X-RapidAPI-Host": "spott.p.rapidapi.com"            
        },
        params: {
            limit: 100,
            type: "CITY",
            country: countryCode ?? "US"
        
        }
    
    };
    return await ajax(optionsRequest);
}
// const fetchedCountries = await getCountries();
//const sortedCountries = fetchedCountries.sort((a, b) =>
//a.name.common.localeCompare(b.name.common)
//);
//setCountries(sortedCountries);
//})();
//para ordenar de forma alfabetica todo se puede hacer de ultimo para nbo romper el codigo.
//el anterior codigo es de chatgtp; a lo ultimo lo ordeno para no romper el codigo
  