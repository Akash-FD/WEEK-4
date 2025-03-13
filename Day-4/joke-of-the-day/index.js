const fs = require('fs')
const file = 'jokes.json'

const getRandomeJokes = ()=>{
    try {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'))
        console.log(data[Math.floor(Math.random()*file.length)].body);
        
        
    } catch (error) {
        return console.log('go to kapil sharma show')
    }
}
module.exports =  {
    getRandomeJokes : getRandomeJokes
}