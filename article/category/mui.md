## 前言
页面传参数是一种比较常见的业务需求，在html5+ app中，根据实现原理及适用环境可以分为两大类。

## 在普通浏览器端常用的方法有如下几种：
### 1.利用URL传参
在页面跳转的时候通过设置`window.location.href` 添加参数，在接收参数的页面通过`window.location.search`获取参数字符串。

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |

发送参数的页面：

```js // 获取url中的参数
function getUrlParam (name) {
var reg = new RegExp("(^|&amp;)" + name + "=([^&amp;]*)(&amp;|$)");
var r = window.location.search.substr(1).match(reg);
if (r!= null) {
return unescape(r[2]);
}else{
return null;
}}
//获取url中的targetId参数
var targetId = getUrlParam('targetId');
console.log(targetId)```
    
接收参数的页面：
    
```js // 获取url中的参数
function getUrlParam (name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
var r = window.location.search.substr(1).match(reg);
if (r!= null) {
return unescape(r[2]); 
}else{
return null;
}} 
//获取url中的targetId参数
var targetId = getUrlParam('targetId');
console.log(targetId);```
    
### 2.利用本地存储传参
可以使用本地存储的方式，可以使用`cookie`、`sessionStorage`和`localStorage`。
发送参数的页面：
    
```js 
localStorage.setItem("targetId","123");```
    
接收参数的页面：
    
```js 
localStorage.getItem("targetId");```
    
## mui框架根据业务场景不同，提供了两种传值模式：
### 1.页面初始化时，通过扩展参数传值
html5+ webview中在创建新窗口的时候有一个extras参数，用于创建Webview窗口的额外扩展参数。
    
```js var w = plus.webview.create("new.html","new",{},{ targetId: '123'});
w.show();
// 显示窗口 
// 获取扩展参数属性值 
console.log("extras:" + w.targetId);```
    
注意：id是WebviewObject的一个属性，所以extras不能使用id作为参数名。

mui在初始化页面时，提供了extras配置参数，通过该参数可以设置页面参数，从而实现页面间传值。
mui框架在如下几种场景下，会执行页面初始化操作：

* 通过`mui.openWindow()`打开新页面（若目标页面为已预加载成功的页面，则在openWindow方法中传递的extras参数无效）；
* 通过`mui.init()`方法创建子页面；
* 通过`mui.init()`方法预加载页面；
* 通过`mui.preload()`方法预加载页面
以打开新页面为例说明浏览器和基于5+的APP的兼容写法：
    
```js var targetId = '123'; 
var baseUrl = 'new.html'; 
var url = mui.os.plus?baseUrl:baseUrl+'?targetId=' + targetId; 
mui.openWindow({ url: url, extras: { targetId: targetId }});```
    
想获取某个webview页面的拓展参数，可以通过webview对象获取。例如在new.html页面可以通过下面的方法获取拓展参数：
    
```js mui.plusReady(function () {
var self = plus.webview.currentWebview();
// 或 var self = plus.webview.getWebviewById('new');
console.log("extras:" + self.targetId);
})```
    
至于浏览器和APP兼容的写法自己根据上面的方法和这个方法结合一下就OK了。

### 2.页面已创建，通过自定义事件传值
Webview窗口对象窗口对象WebviewObject有一个evalJS方法，可以将JS脚本发送到Webview窗口中运行，可用于实现Webview窗口间的数据通讯。

```js 
mui.fire(target, event, data)```
    
参数说明：

* target： Type: WebviewObject 需传值的目标webview
* event：Type: String 自定义事件名称
* data：Type: JSON json格式的数据
发送参数的页面：
    
```js var ws = null;
mui.plusReady(function () {
ws = plus.webview.create("new.html","new",{top:"0px",bottom:"0px"});
})
document.querySelector('#send').addEventListener('tap',function () {
var targetId = '123';
ws.evalJS('send('+targetId+')');
ws.show();
})```
    
接收参数的页面：
    
```js mui.init();
// 接收参数的函数
function send(param){
document.getElementById("text").innerHTML = param;
} 

mui.back = function(){
var self = plus.webview.currentWebview();
self.hide();
}```
    
注：这里要重写back,不然默认为close，当我们返回的时候再次打开show的时候需要重新创建。

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

显然这样写有点复杂，为此mui将evalJS传值的机制进行了封装，通过自定义事件实现页面传值，可以使用mui.fire()方法可触发目标窗口的自定义事件。
    
发送参数的页面：
    
```js var ws = null;
mui.plusReady(function () {
ws = plus.webview.create("new.html","new",{top:"0px",bottom:"0px"});
})
document.querySelector('#send').addEventListener('tap',function () {
mui.fire(ws,'send',{
  targetId: '123'
})
ws.show();
})```
    
接收参数的页面：
    
```js // 添加send自定义事件监听
window.addEventListener('send',function(event){
//获得事件参数
var targetId = event.detail.targetId;
document.getElementById("text").innerHTML = targetId;
});```
    
这里需要特别说明一下的是，很多人在使用mui.fire传参数的时候会提前预加载接收参数的页面，结果发现接收不到传的参数，这是一种非常常见的错误，这里需要说明的是当预加载了页面后，页面上的代码都已经执行，如果在loaded事件未完成就执行webview.evalJS或mui.fire，此时页面接收参数失效。此时应该将接受参数的逻辑写在webview loaded或者show监听事件中:
    
** 验证一个webview的loaded事件是否完成的方法：**
    
```js var ws = plus.webview.getWebviewById(id)
ws.addEventListener( "loaded", function(e){
console.log( "Loaded: "+e.target.getURL() );
}, false );```
    
** 验证一个webview的show事件是否完成的方法：**
    
```js var ws=plus.webview.currentWebview();
ws.addEventListener("show", function(e){
console.log( "Webview Showed" );
}, false );```
