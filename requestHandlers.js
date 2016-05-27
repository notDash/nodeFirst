// 请求处理模块

// 引入child_process模块
var exec = require("child_process").exec;
// 引入查询参数字符串
var querystring = require('querystring');
// 进入文件操作模块
var fs = require('fs');
// 引入文件上传模块 npm install formidable
var formidable = require("formidable");
/**
 * 请求开始
 * @author lishengyong
 * @date   2016-05-27T15:59:13+0800
 * @param  {[type]}                 response [description]
 * @param  {[type]}                 postData [description]
 * @return {[type]}                          [description]
 */
function start(response, request) {
	console.log('start is called...');
  	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
};

/**
 * 文件上传
 * @author lishengyong
 * @date   2016-05-27T15:59:00+0800
 * @param  {[type]}                 response [description]
 * @param  {[type]}                 postData [description]
 * @return {[type]}                          [description]
 */
function upload (response, request) {
	console.log('upload is called...');

	var form = new formidable.IncomingForm();
	form.uploadDir = "./tmp";
	// 开始解析
	form.parse(request, function(error, fields, files) {
		// 解析完毕
		fs.renameSync(files.upload.path, 'tmp/test.png');
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write('received img : <br/>');
		response.write('<img src="/show" />');
		response.end();
	});

}

/**
 * 文件读取
 * @author lishengyong
 * @date   2016-05-27T15:59:22+0800
 * @param  {[type]}                 response [description]
 * @param  {[type]}                 postData [description]
 * @return {[type]}                          [description]
 */
function show(response, request) {
	fs.readFile('tmp/test.png', 'binary', function(error, file) {
		if(error) {
			response.writeHead(500, {'Content-type':'text/plain'});
			response.write(error + '\n');
			response.end();
		} else {
			response.writeHead(200, {'Content-type':'image/png'});
			response.write(file, 'binary');
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;





