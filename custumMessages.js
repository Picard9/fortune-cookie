//This function returns a random fortune cookie message

const getFortune = () => {
    const colors = require('ansi-colors')
    const fortunes = require('./fortunes.json')
    const randomFortune = colors.red(fortunes[Math.floor(Math.random() * fortunes.length)]);
    console.log(colors.yellow(`My Fortune Cookie Message: ${randomFortune}`));  // Random fortune will be display
}

module.exports = getFortune 