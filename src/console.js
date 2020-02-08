function getDate(extra) {
    let dat = new Date;//生成日期
    const year = dat.getFullYear();//取得年
    const month = dat.getMonth() + 1;    //取得月,js从0开始取,所以+1
    const date1 = dat.getDate(); //取得天
    const hour = dat.getHours();//取得小时
    const minutes = dat.getMinutes();//取得分钟
    const second = dat.getSeconds();//取得秒
    const milliseconds = dat.getMilliseconds();
    dat = undefined;
    return `[${extra}] ` + year + "-" + month + "-" + date1 + " " + hour + ":" + minutes + ":" + second + "." + milliseconds + " ";
}

console.oldlog = console.log;
console.oldtrace = console.trace;
console.olddebug = console.debug;
console.oldinfo = console.info;
console.oldwarn = console.warn;
console.olderror = console.error;


function log() {
    process.stdout.write(getDate('LOG'));
    console.oldlog.apply(console, arguments);
}

function trace() {
    process.stdout.write(getDate('TRACE'));
    console.oldtrace.apply(console, arguments);
}

function info() {
    process.stdout.write(getDate('INFO'));
    console.oldinfo.apply(console, arguments);
}

function warn() {
    process.stdout.write(getDate('WARN'));
    console.oldwarn.apply(console, arguments);
}

function error() {
    process.stderr.write(getDate('ERROR'));
    console.olderror.apply(console, arguments);
}

function debug() {
    process.stdout.write(getDate('DEBUG'));
    console.olddebug.apply(console, arguments);
}

console.log = log;
console.debug = debug;
console.trace = trace;
console.info = info;
console.warn = warn;
console.error = error;

global.log = log;
global.debug = debug;
global.trace = trace;
global.info = info;
global.warn = warn;
global.error = error;

module.exports = global;