const Zing = require("./zing-mp3");

const abc = Zing.getTop100().then((r) => console.log(r));
console.log(abc);
