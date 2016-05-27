
var fs = require('fs');

var server = require('./server');

// 引入路由模块router
var router = require('./router');

// 引入请求处理模块
var requestHandlers = require("./requestHandlers");
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);

// 同步执行读取文件， 阻塞式读取文件 
// var data = fs.readFileSync('server.js');

// console.log(data.toString());
// console.log('程序执行结束');

// 异步执行， 非阻塞式读取文件
fs.readFile('server.js', function (err, data) {
    if (err) return console.error(err);
    //console.log(data.toString());
});

console.log("程序执行结束!");

