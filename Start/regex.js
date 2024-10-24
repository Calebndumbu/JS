const re = new RegExp("ab+c");

const emailPattern = /[^a-zA-Z0-9._%+-] + \.[a-zA-Z]{2,}$/;
const myEmail = emailPattern.test(calebkyama4@gmail.com);
console.log(myEmail);
