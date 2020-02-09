// 假如一个Promise已经完成了，再.then()会怎样？
// https://www.imooc.com/video/16615

const console = require('./console.js');

console.log('start');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello, world');
    }, 3000);
});

setTimeout(() => {
    promise.then(value => {
        console.log(value);
    });
}, 1000);