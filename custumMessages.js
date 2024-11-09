//This function returns a random fortune cookie message

const getFortune = () => {
    const colors = require('ansi-colors')
    const fortunes = require('./fortunes.json')
    const randomFortune = colors.red(fortunes[Math.floor(Math.random() * fortunes.length)]);
    return colors.yellow(`My Fortune Cookie Message: ${randomFortune}`);  // return Random fortune
}

module.exports = getFortune 