// async/await
// https://www.imooc.com/video/16631
const console = require('./console');

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`gogogo`);
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    console.log(`1： begin`);
    var x = await resolveAfter2Seconds(10);
    console.log(`1： done`);
}

f1();