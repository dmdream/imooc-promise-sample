// Promise.race()
// https://www.imooc.com/video/16627
const console = require('./console.js');

console.log('start');

let p1 = new Promise(resolve => {
    // 这是一个长时间的调用
    setTimeout(() => {
        resolve('I\'m P1');
    }, 3000);
});
let p2 = new Promise(resolve => {
    // 这是个稍短的调用
    setTimeout(() => {
        resolve('I\'m P2');
    }, 1000)
});
Promise.race([p1, p2]).then(value => {
    console.log(value);
});