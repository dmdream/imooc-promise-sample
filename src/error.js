// Promise会自动捕获内部异常，并交给rejected响应函数处理-catch捕获
// https://www.imooc.com/video/16620
const console = require('./console.js');

console.log('here we go');
new Promise(resolve => {
    throw new Error('bye');
}).then(value => {
    console.log(value + ' world');
}).catch(error => {
    console.error('Error：', error.message);
});