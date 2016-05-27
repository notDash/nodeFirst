// 引入http模块
var http = require("http");
// 引入url模块
var url = require('url');



function start(route, handle) {

	function onRequest(request, response) {
		console.log('request received...');
		var pathname = url.parse(request.url).pathname;
		//var postData = '';
		// request.setEncoding('utf-8');

		// 添加数据监听
		/*request.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log('received post data chunk ' + postDataChunk);
		});*/

		// 数据接收完毕监听
		/*request.addListener('end', function() {
			route(handle, pathname, response, postData);
		});*/

		route(handle, pathname, response, request);
		
	}

	http.createServer(onRequest).listen(3000); 
	console.log("Server has started.");
			
}

exports.start = start;



