const countryData = async(country)=>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    const data = await response.json()
   
    const countryInfo = {
        flag: data[0].flag,
        capital : data[0].capital[0],
        currency :data[0].currencies,
        language :data[0].languages,
        continents: data[0].continents[0]
    }

    return countryInfo;
  
}
console.log(countryData('india'))


// module.exports = {
//     countryData : countryData
// }
