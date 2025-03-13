const info = require('country-information-1')

const a = async()=>{

  const responce = await info.countryData("india")
  return responce
}
console.log(a())