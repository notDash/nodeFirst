// 获取events模块
var events = require('events');

// 创建一个eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listner1 = function listner1() {
   console.log('监听器 listner1 执行。');
}

// 监听器 #2
var listner2 = function listner2() {
  console.log('监听器 listner2 执行。');
}

eventEmitter.on('connection', listner1);
eventEmitter.on('connection', listner2);

// 获取 connection  的监听器数量
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listner1);
eventEmitter.emit('connection');








