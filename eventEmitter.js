//  引入events 模块
var events = require('events');

// 创建eventsEmitter 对象
var eventsEmitter = new events.EventEmitter();

var connectHandler = function connected () {
	console.log('连接成功。');

	//  触发data_received事件
	eventsEmitter.emit('data_received');

}

eventsEmitter.on('connection', connectHandler);

eventsEmitter.on('data_received', function () {
	console.log('数据接收成功');
})

eventsEmitter.emit('connection');

console.log('程序执行完毕');





