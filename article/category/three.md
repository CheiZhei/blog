//javascript数据类型七大数据类型

## 一：Undefined类型

`Undefine`d类型只有一个值，即特殊的`undefined`。在使用var声明变量，但却没有对其初始化时，这个变量的值就是`undefined`。（以后必须声明一个变量就必须初始化，以避免这种问题）

## 二：Null类型

```js
var box=null
```

你还没有来得及创建对象，先声明一个对象的变量放在那边，默认初始化为null。

```js
alert(undefined == null); 
// true```

他们都是空的，所以相等

```js
alert(undefined === null) 
// false 
// 也等同于alert(typeof undefined == typeof null)
```

数据类型不相等，第一个是`Undefined`，返回的值是`undefined`，第二个是`Null`，返回的值是`object`

## 三：Array类型

除了`Object`类型之外，`Array`类型是ECMAScript最常用的类型。而且ECMAScript中的Array类型和其他语言中的数组有着很大的区别。虽然数组都是有序排列，但ECMAScript中的数组每个元素可以保存任何类型。大小也是可以调整的。

创建同样有两种方式：

1. 使用new

```js
var box = new Array();
var box = new Array(10);
var box = new Array('caibaojian',24,'前端开发','中山');
alert(typeof box); //属于Object类型```

2. 以上可以省略new

3. 使用字面量的方式创建

```js
var arr1 = [];

var  arr2 = ['caibaojian',24];

var arr3 =[];

arr[0]='caibaojian';

arr[1] = 24;

alert(arr);

arr.length = 10; //强制了元素量

arr[arr.length]='caibaojian';

var arr3 = [
	{
	name:'caibaojian',
	age:24
	},
	[1,2,3,new Object()],
	'计算机编程',
	25+25,
	new Array(1,2,3)
];
alert(arr3);
alert(arr[0].name);```


## 四：Boolean类型

Boolean类型有两个值（字面量）：`true`和`false`

## 五：Number类型

Number类型包括两种数值：整型和浮点型。

由于保存浮点数数值需要的内存空间比整型数值大两倍，因此ECMAScript会自动将可以转换为整型的浮点数值转为整型。

`NaN`，即非数值(not a number)是一个特殊的值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况

ECMAScript提供了`isNaN()`函数，用来判断这个值到底是不是`NaN`。`isNaN()`函数在接收到一个值后，会尝试将这个值转换为数值。

```js
alert(isNaN(NaN)) //true

alert(isNaN(25)) //false

alert(isNaN(true)) //false```

有三个函数可以把非零数值转换为数值：`Number()`、`parseInt()`和`parseFloat()`。

`Number()`是转型函数，可以用于任何数据类型，而另外两个则专门用于把字符串转换为数值。

```js
alert(Number(null)) // 0

alert(Number(undefined)) // NaN

alert(Number("256")) // 256

alert(Number("08.9")) // 8.9

alert(Number("lee123"))  // NaN```

由于`Number()`函数在转换字符串时比较复杂且不够合理，因此在处理整数时更常用的是`parseInt()`

```js
alert(parseInt('456Lee')) // 456

alert(parseInt('lee456Lee')) // NaN

alert(parseInt('12Lee56Lee')) // 12

alert(parseInt('56.12')) // 56

alert(parseInt('')) // NaN```

`parseInt`除了识别十进制之外还能识别八进制和十六进制。同时它还有第二个参数，用于解决各种进制

```js
alert(parseInt('AF',16)); // 175
// 可以去掉前导0x```

`parseFloat`用于浮点数值转换，和`parseInt()`一样，从第一位解析到非浮点数值位置。

```js
alert(parseFloat('123Lee')) // 123

alert(parseFloat('0xA')) // 0 不识别十六进制

parseFloat('23.4.5') // 23.4```

## 六：String类型

数值转换为String

```js
var box =1; var box = true;

alert(typeof box.toString())```

`toString()`方法一般不需要传参的，但在数值转换为字符串的时候，可以传递进制参数

如果在转型之前不知道变量是否是`null`或者`undefined`的情况下，我们可以使用转型函数`String()`，这个函数能够将任何类型的值转换成字符串。

```js
var box=null;
alert(String(box));```

## 七：Object类型

对象其实就是一组数据和功能的集合。
使用`new Object()`;

使用字面量创建

```js
var box = {
	name: 'caibaojian.com',
	age: 24
}```

输出

```js
alert(box.name)
alert(box['name']);
var box = {
	run: function(){
		return '123';
	}
}
alert(box.run); //打印出整个函数代码

alert(box.run()); 打印返回值```

**可以使用delete输出属性**

```js
delete box.name```

在实际开发中，我们一般更加喜欢字面量的声明方式。因为它清晰，语法代码少，而且还给人一种封装的感觉

字面量也是面向函数传递大量可选参数的首选方式。

```js
function box(obj){
	alert(obj.name);
	if(obj.name !=undefined) alert();
}
var obj = {
	name:'caibaojian.com',
	age:24,
	height:178
};
box(obj);
```
