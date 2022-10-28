


const userName = "Edward";
userName ? console.log(`Hello, ${userName} !`) : console.log(`Hello!`)
let userQuestion = "Will i find love one day?"
console.log(`${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightball = "";

if (randomNumber === 0) {
    eightball = `Most def dude`
} else if ( randomNumber === 1) {
    eightball = `Guess so champ`
}else if ( randomNumber === 2) {
    eightball = `I wouldnt bet money on it`
}else if ( randomNumber === 3) {
    eightball = `Yaaaaaassss Queen!`
}else if ( randomNumber === 4) {
    eightball = `Of course King!`
}else if ( randomNumber === 5) {
    eightball = `Big oof`
}else if ( randomNumber === 6) {
    eightball = `Whose gonna tell him?`
}else if ( randomNumber === 7) {
    eightball = `Are you sure you want to know the answer?`
}

console.log(eightball);