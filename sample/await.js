// async/await
// https://www.imooc.com/video/16631


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            let curTime = new Date().toLocaleString();
            console.log(`${curTime} - gogogo`);

            resolve(x);
        }, 2000);
    });
}

async function f1() {
    let curTime = new Date().toLocaleString();
    console.log(`${curTime} - 1： begin`);

    var x = await resolveAfter2Seconds(10);

    curTime = new Date().toLocaleString();
    console.log(`${curTime} - 1： done`);
}

f1();