//阻塞代码实例
//var fs = require('fs');
//var data = fs.readFileSync('../input.txt');
//
//console.log(data.toString());
//console.log("程序执行结束！")

//非阻塞代码实例
//var fs = require("fs");
//
//fs.readFile("../input.txt",function(err,data){//异步读取文件
//	if(err) return console.log(err);
//	console.log(data.toString());
//});
//console.log("程序执行结束！")

//引入 events 模块
/**
var events = require("events");
//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHandler = function connected(){
	console.log('连接成功');
	//触发data_received 事件
	eventEmitter.emit('data_received');
}
//绑定connection事件及事件的处理程序
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received',function(){
	console.log('数据连接成功');
});
//触发 connection 事件
eventEmitter.emit('connection');
console.log("程序执行完毕！")
//触发事件
eventEmitter.emit('eventName');
var listener1 = function(){
	console.log("listener1");
}
eventEmitter.addListener('connection', listener1);
eventEmitter.emit('connection');
console.log(eventEmitter.listenerCount(eventEmitter,'connection') + " 个监听器监听连接事件。");
**/
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");

console.log("写入字节数 ："+ len);

var buf1 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf1[i] = i + 97;
}

console.log( buf1.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf1.toString('ascii',0,5));   // 输出: abcde
console.log( buf1.toString('utf8',0,5));    // 输出: abcde
console.log( buf1.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
//转json
console.log(buf1.toJSON());
/*合并缓冲区 Buffer.concat(list[,totalLength]);
 list 用于合并的Buffer对象数组列表
 totalLength 指定合并后Buffer对象的总长度
 * */
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

/**
 * 缓冲区比较
 * buf.compare(otherBuffer);
 * 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
 */
var buffer1 = new Buffer('我');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
console.log("result:"+result);
if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
/*
 * 拷贝缓冲区  
 * buf.copy(taegetBuffer[,targetStart[,sourceStart[,sourceEnd]]]);
 * argetBuffer - 要拷贝的 Buffer 对象。
	targetStart - 数字, 可选, 默认: 0
	sourceStart - 数字, 可选, 默认: 0
	sourceEnd - 数字, 可选, 默认: buffer.length
	没有返回值
 */
var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
/**
 * 缓冲区裁剪
 * buf.slice([start[,end]]);
    start - 数字, 可选, 默认: 0
    end - 数字, 可选, 默认: buffer.length
    返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
 */
var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
/*
 * 缓冲区长度 buf.length
 */
var bf = new Buffer("%我爱你!1");
console.log("Buffer length:"+ bf.length);
