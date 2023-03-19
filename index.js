const userInfo = require('./information');
const { think, SQUIRREL } = require('cowsay')

console.log(think({
    text: `${userInfo.name} ${userInfo.campus}`,
    cow: SQUIRREL
}))

