const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
function Translator() {

  this.americanOnlyTranslator = function(input) {
    let splitted = input.split(" ");
    for (let i = 0; i < splitted.length; i++) {
      if (/\d\d\:\d\d/.test(splitted[i])) {
        let matched = splitted[i].split(":").join(".")
        splitted.splice(i, 1, `<span class="highlight">${matched}</span>`)
        splitted = splitted.join(" ")
      }
      else if (americanOnly[`${splitted[i]}`]) {
        console.log("only")
        splitted.splice(i, 1, `<span class="highlight">${americanOnly[`${splitted[i]}`]}</span>`)
        splitted = splitted.join(" ");
      }
      else if (americanToBritishSpelling[`${splitted[i]}`]) {
        console.log("spelling")
        splitted.splice(i, 1, `<span class="highlight">${americanToBritishSpelling[`${splitted[i]}`]}</span>`)
        splitted = splitted.join(" ");
        consol
      }
      else if (americanToBritishTitles[`${splitted[i]}`]) {
        console.log("titles")
        splitted.splice(i, 1, `<span class="highlight">${americanToBritishTitles[`${splitted[i]}`]}</span>`)
        splitted = splitted.join(" ");
      }
      else if (americanOnly[`${splitted[i]} ${splitted[i + 1]}`]) {
        console.log("more than a word")
        splitted.splice(i, 2, `<span class="highlight">${americanOnly[`${splitted[i]} ${splitted[i + 1]}`]}</span>`)
        splitted = splitted.join(" ");
      }
      if(i === splitted.length - 1){
        if(splitted === input.split(" ")){
          splitted = undefined;
          return splitted;
        } else {
          return splitted;
        }
      }
    }
    
  }

  this.britishOnlyTranslator = function(input) {
    let britishToAmericanSpelling = Object.entries(americanToBritishSpelling).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
    let britishToAmericanTitles = Object.entries(americanToBritishTitles).reduce((acc, [key, value]) => (acc[value] = key, acc), {})


    let splitted = input.split(" ");
    for (let i = 0; i < splitted.length; i++) {
      if (/\d\d\.\d\d/.test(splitted[i])) {
        console.log("time")
        let matched = splitted[i].split(".").join(":")
        splitted.splice(i, 1, `<span class="highlight">${matched}</span>`)
        splitted = splitted.join(" ")
      }
      else if (britishOnly[`${splitted[i]}`]) {
        console.log("only")
        splitted.splice(i, 1, `<span class="highlight">${britishOnly[`${splitted[i]}`]}</span>`)
        splitted = splitted.join(" ");
      }
      else if (britishToAmericanSpelling[`${splitted[i]}`]) {
        console.log("spelling")
        splitted.splice(i, 1, `<span class="highlight">${britishToAmericanSpelling[`${splitted[i]}`]}</span>`)
        splitted = splitted.join(" ");
      }
      else if (britishToAmericanTitles[`${splitted[i]}`]) {
        console.log("titles")
        splitted.splice(i, 1, `<span class="highlight">${britishToAmericanTitles[`${splitted[i]}`]}</span>`)
        splitted = splitted.join(" ");
      } else if (britishOnly[`${splitted[i]} ${splitted[i + 1]}`]) {
        console.log("more than a word")
        splitted.splice(i, 2, `<span class="highlight">${britishOnly[`${splitted[i]} ${splitted[i + 1]}`]}</span>`);
        splitted = splitted.join(" ");
      }
    }
    if(splitted === input.split(" ")){
      splitted = undefined;
      return splitted
    }
  }
}
module.exports = Translator;