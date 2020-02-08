// 使用`Promise.all()`包装多个Promise实例
// https://www.imooc.com/video/16634
const console = require('./console.js');

console.log('here we go');
Promise.all([1, 2, 3])
    .then(all => {
        console.log(`1：`, all);
        return Promise.all([function () {
            console.log('ooxx');
        }, 'xxoo', false]);
    })
    .then(all => {
        console.log(`2：`, all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                console.log(`p1`);
                resolve('I\'m P1');
            }, 1500);
        });
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`p2`);
                resolve('I\'m P2');
            }, 1000);
        });
        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`p3`);
                resolve('I\'m P3');
            }, 3000);
        });
        return Promise.all([p1, p2, p3]);
    })
    .then(all => {
        console.log(`all`, all);
    })
    .catch(err => {
        console.log(`Catch：`, err);
    });