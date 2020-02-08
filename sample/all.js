// 使用`Promise.all()`包装多个Promise实例
// https://www.imooc.com/video/16634


console.log('here we go');
Promise.all([1, 2, 3])
    .then(all => {
        let curTime = new Date().toLocaleString();
        console.log(`${curTime} - 1：`, all);
        return Promise.all([function () {
            console.log('ooxx');
        }, 'xxoo', false]);
    })
    .then(all => {
        let curTime = new Date().toLocaleString();
        console.log(`${curTime} - 2：`, all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                let curTime = new Date().toLocaleString();
                console.log(`${curTime} - p1`);
                resolve('I\'m P1');
            }, 1500);
        });
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                let curTime = new Date().toLocaleString();
                console.log(`${curTime} - p2`);
                resolve('I\'m P2');
            }, 1000);
        });
        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                let curTime = new Date().toLocaleString();
                console.log(`${curTime} - p3`);
                resolve('I\'m P3');
            }, 3000);
        });
        return Promise.all([p1, p2, p3]);
    })
    .then(all => {
        let curTime = new Date().toLocaleString();
        console.log(`${curTime} - all`, all);
    })
    .catch(err => {
        let curTime = new Date().toLocaleString();
        console.log(`${curTime} - Catch：`, err);
    });