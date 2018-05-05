## Array对象

Array对象用于在变量中存储多个值：

```\njs
const cars = ['Saab', 'Volvo', 'BMW'];
```

第一个数组元素索引值为0，,第二个值为1，,以此类推...

## 数组属性

|   属性      | 描述                           |
| :---------- | :----------------------------- |
| constructor | 返回创建数组对象的原型函数     |
| length      | 设置或返回数组元素的个数       |
| prototype   | 允许你向数组对象添加属性或方法 |

> **construtor**

```\njs
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars.construtor);
//=> function Array() { [native code] }
```

**定义和用法**

在javascript中，`constructor`属性返回对象的构造函数。
返回的值是函数的应用，不是函数名

* `JavaScript` 数组 `constructor` 属性返回 `function Array() { [native code] }`
* `JavaScript` 数字 constructor 属性返回 `function Number() { [native code] }`
* `JavaScript` 字符串 `constructor` 属性返回 `returns function String() { [native code] }`

如果一个变量是数组你可以使用 `constructor` 属性来定义。

>**length**

```\njs
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars.length);
// => 3

cars.length = 2;
console.log(cars);
// => ['Saab', 'Volvo'];
```

**定义和用法**

`length`属性可设置或者返回元素中的个数.

>**prototype**

```\njs
Array.prototype.myUcase = function(){
	for(i=0;i<this.length;i++) {
		this[i] = this[i].toUpperCase();
	}
}

const fruits=['Banana','Orange','Apple','Mango'];
fruits.myUcase();
console.log(fruits);
// => ['BANANA','ORANGE','APPLE','MANGO']
```

**定义和用法**

`prototype`属性使您有能力向原型对象添加属性和方法。
当构建一个属性，所有的数组将被设置属性，它是默认值。
在构建一个方法时，所有的数组都可以使用该方法。

<b>注意：</b> 
* `Array.prototype` 单独不能引用数组, `Array()` 对象可以。
* 在`JavaScript`对象中，`Prototype`是一个全局属性。

## Array对象方法

|   方法      | 描述                           |
| :---------- | :----------------------------- |
| [from()](#from)| 从一个类似数组或可迭代对象中创建一个新的数组实例|
| [isArray()](#isArryay)| 判断一个值是否是一个Array|
| [of()](#of)|创建一个具有可变数量参数的新数组实例，而不考虑参数数量或类型|
| [concat()](#concat) | 连接两个或多个数组，并放回结果   |
| [copyWithin()](#conpyWithin) | 从数组的指定位置拷贝元素到数组的另一个指定位置中|
| [entiries()](#entiries)   | 返回数组的可迭代对象 |
| [every()](#every)|测试数组的所有元素是否都通过指定函数的测试|
| [fill()](#fill)| 用一个固定值填充一个数组中从起始索引到终止索引的全部元素|
| [filter()](#filter)|创建一个新数组，其包含通过所提供的函数的测试的所有元素|
| [find()](#find)|返回数组中满足提供测试函数的第一个元素的值，没有返回undefined|
| [findIndex()](#findIndex)|返回数组中满足提供测试函数的第一个元素的索引，没有返回-1|
| [flatMap()](#flatMap)|数组每个元素运行给定函数，返回新的数组它与map和深度值1的flatten几乎相同，但flatMap通常在合并成一种方法的效率高一些|
| [flatten()](#flatten)|递归到指定深度的所有子数组连接，并返回一个新数组|
| [forEach()](#forEach)|对数组的每个元素执行一次给定的函数|
| [includes()](#includes)|判断一个数组是否包含指定值，有返回true，否则false|
| [indexOf()](#indexOf)|返回数组中可以找到一个给定元素的第一索引，不存在返回-1|
| [join()](#join)|返回将一个数组（或一个类数组对象）的所有元素连接成的一个字符串并|
| [keys()](#keys)|返回一个新的迭代器，它包含数组中每个索引的键|
| [lastIndexOf()](#lastIndexOf)|返回数组中可以找到的最后一个给定元素的索引，不存在返回-1|
| [map()](#map)|创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后并返回的结果|
| [pop()](#pop)|从数组中删除最后一个元素，并返回该元素的值，此方法更改数组的长度|
| [push()](#push)|将一个或多个元素添加到数组的末尾，并放回新数组的长度|
| [reduce()](#reduce)|对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值|
| [reduceRight()](#reduceRight)|对累加器和数组中的每个元素（从右到左）应用一个函数，将其减少为单个值|
| [reverse()](#reverse)|将数组中的元素位置颠倒|
| [shift()](#shift)|从数组中删除第一个元素，并返回该元素的值，此方法更改数组的长度|
| [slice()](#slcie)|返回一个从开始到结束（不包括结束）选择的数组的一个新数组对象，且原始数组不会被修改|
| [some()](#some)|测试数组中的某些元素是否通过由提供的函数实现的测试|
| [sort()](#sort)|用就地算法对数组的元素进行排序，并返回数组|
| [splice()](#splice)|通过删除现有元素和/或添加新元素来更改一个数组的内容|
| toLocaleString()|使用各自的LocaleString方法转成字符串表示数组中的元素|
| [toString()](#toString)|返回一个字符串，表示指定的数组及其元素|
| [unshift()](#unshift)|将一个或多个元素添加到数组的开头，并返回数组的新长度|
| [values()](#values)|返回一个新的数组对象，该对象包含数组每个索引的值|


### from
`Array.from()`方法从一个类数组或可迭代对象中创建一个新的数组实例。

**语法**

```\njs
Array.from(arratLike[, mapFn[, thisArg]])
```
> **参数**
> * arrayLinke：想要转换成数组的为数组对象或可迭代对象。
> * mapFn *可选*: 如果指定了该参数，新数组中的每个元素会执行该回调函数。
> * thisArg *可选*：执行回调函数`mapFn`时的`this`对象。

**返回值**

一个新的数组实例

**示例**

```\njs
// 将字符串转成数组
Array.from('foo');
// ['f', 'o', 'o']

// 将Set对象转成数组
let s = new Set(['foo', window]);
Array.from(s);
// ['foo', window]

// 将Map对象转成数组
let m = new Map([1, 2], [2, 4], [4, 8]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// 将arguments类数组转成数组
function f() {
	return Array.from(arguments);
}
f(1, 2, 3);
// [1, 2, 3]

// 执行遍历数组执行函数
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

Array.from({length: 5}, (v, i)=> i);
// [0, 1, 2, 3, 4]


// 实现一个数组去重合并方法

function combine(){
	let arr = [].concat.apply([], arguments); // 没有去重合并的新数组
	return Array.from(new Set(arr));
}
var m = [1, 2, 2], n = [2,3,3];
combine(m,n);
// [1,2,3]
```

### isArray
`Array.isArray()`用于确定传递的值是否是一个`Array`。

**语法**
```\njs
Array.isArray(obj)
```
> **参数**
> * obj：需呀检查的对象。

**返回值**

如果是`Array`对象，则返回`true`，否则返回`false`。

**示例**
```\njs
// 下面的函数调用都返回true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 其实Array.prototype也是一个数组
Array.isArray(Array.prototype);

// 下面函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

**注意**

当检测Array实例时, `Array.isArray` 优于 `instanceof`,因为`Array.isArray`能检测`iframes`。

```\njs
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3);
// [1,2,3]

Array.isArray(arr); // true

arr instanceof Array; // false
```

### of

`Array.of()` 和 `Array` 构造函数之间的区别在于处理整数参数：`Array.of(7)` 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 `undefined` 元素的数组。

**语法**
```\njs
Array.of(element0[, element1[, ...[, elementN]]])
```
> **参数**
> * elementN：任意个参数，将按顺序成为返回数组中的元素。

**返回值**

一个新的数组实例

**示例**
```
Array.of(1); // [1]
Array.of(1,2,3);  //[1,2,3]
Array.of(undefined);  / [undefined]
```

### concat

`concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

**语法**

```\njs
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

> **参数**
> * valueN：任意个参数，将数组和/或值连接成新数组。

**返回值**

一个新的数组实例

**示例**

```
// 连接两个数组
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// plha ['a', 'b', 'c', 1, 2, 3]

// 连接三个数组
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); 
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 将值连接到数组
var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); 
// results in ['a', 'b', 'c', 1, 2, 3]

```

### copyWithin

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。

**语法**

```\njs
arr.copyWithin(target[, start[, end]])
```

> **参数**
> * target：复制序列到该位置，如果是负数将从末尾开始计算。
> * start: 开始复制的位置如果为负数将从末尾开始计算。
> * end *可选（默认为`arr.length`）*： 复制元素的结束位置，不包括`end`位置，如果为负数将从末尾开始计算。

**返回值**

改变数组

**示例**
```\njs
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

var i32a = new Int32Array([1,2,3,4,5]);

i32a.copyWithin(0,2);
// Int32Array [3,4,5,4,5]

[].copyWithin.call(new Int32Array(1,2,3,4,5),0,3,4);
// Int32Array [4,2,3,4,5]
```

### entries

`entries()`方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

**语法**

```\njs
arr.entries()
```

**返回值**

一个新的 `Array` 迭代器对象。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。

**示例**
```\njs
//1、Array Iterator
var arr = ['a','b','c'];
var iterator = arr.entries();
console.log(iterator);
// 返回值：
/*Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/
```

### every

`every()` 方法测试数组的所有元素是否都通过了指定函数的测试。

**语法**

```\njs
arr.every(callback[, thisArg])
```

> **参数**
> * callback: 用来测试每个元素的函数。
> * thisArg *可选*: 执行`callback`时使用的`this`值。

**返回值**

所有元素通过测试返回`true`，否则返回`false`。
`every` 不会改变原数组。

**示例**
```\njs
function isBigEnough(element,index,arr) {
	return element >= 10;
}
var passed = [12,5,8,130,44].every(isBigEnough);
// passend is false
passend = [12,54,130,44].every(isBigEnough);
// passend is true
```

### fill

`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。

**语法**

```\njs
arr.fill(value[, start[, end]])
```

> **参数**
> * value: 用来填充数组元素的值。
> * start *可选*: 起始索引，默认值为0。
> * end *可选*： 终止索引，默认值为`this.length`

**返回值**

修改后的数组。


**示例**
```\njs
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// 注意：引用对象是全部引用同一个对象.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### filter

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

**语法**

```\njs
var new_arr = arr.every(callback[, thisArg])
```

> **参数**
> * callback: 用来测试每个元素的函数。调用时使用参数 `(element, index, array)`。
返回`true`表示保留该元素（通过测试），`false`则不保留。
> * thisArg *可选*: 执行`callback`时使用的`this`值。

**返回值**

一个新的通过测试的元素的集合的数组。
`filter` 不会改变原数组，它返回过滤后的新数组。

**示例**

下例使用 filter 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。

```\njs
function isBigEnough(e) {
	return e >= 10;
}
var filtered = [12,5,8,130,44].filter(isBigEnough);
// filtered is [12,130,44]
```

### find

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

**语法**

```\njs
arr.find(callback[, thisArg])
```

> **参数**
> * callback: 用来测试每个元素的函数。调用时使用参数 `(element, index, array)`。
> * thisArg *可选* : 执行`callback`时使用的`this`值。

**返回值**

当某个元素通过 callback 的测试时，返回数组中通过测试的第一个值，否则返回 undefined。

**示例**

```\njs
function isBigEnough(element) {
    return element >= 15;
}

var ret1 = [12, 5, 8, 130, 44].find(isBigEnough);
console.log(ret1);
// 130
var objArr = [{id:1, name:'jiankian'}, {id:23, name:'anan'}, {id:188, name:'superme'}, {id:233, name:'jobs'}, {id:288, name:'bill', age:89}, {id:333}] ;
var ret2 = objArr.find((v) => {
    return v.id == 233;
});
console.log(ret2);
// return {id:233, name:'jobs'}
```

### findIndex

> **介绍：**
> 此方法同上面`find`方法相同，不同的是此方法返回值是元素的索引值或者-1.

**示例**

```\njs
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

### flatMap

`flatMap()`方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 和 深度值1的 `flatten` 几乎相同，但`flatMap`通常在合并成一种方法的效率稍微高一些。

**语法**

```\njs
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // 返回新数组的元素
}[, thisArg])
```

> **参数**
> * callback: 能生成一个新数组中的元素的函数。调用时使用的参数 `(element, index, array)`。
> * thisArg *可选* : 执行`callback`时使用的`this`值。

**返回值**

一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1。

**示例**

`map` VS `flatMap`

```\njs
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 只合并一个层数组
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

### flatten

`flatten()` 方法会递归到指定深度将所有子数组连接，并返回一个新数组。

**语法**

```\njs
var newArray = arr.flatten(depth)
```

> **参数**
> * depth *可选*： 指定嵌套数组中的结构深度，默认值为1。

**返回值**

一个将子数组连接的新数组

**示例**

<b>扁平化嵌套数组:</b>

```\njs
var arr1 = [1, 2, [3, 4]];
arr1.flatten(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flatten();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flatten(2);
// [1, 2, 3, 4, 5, 6]
```

<b>扁平化与空项:</b>

flatten()方法会移除数组中的空项:

```\njs
var arr4 = [1, 2, , 4, 5];
arr4.flatten();
// [1, 2, 4, 5]
```

### forEach

`forEach()` 方法对数组的每个元素执行一次提供的函数。

**语法**

```\njs
array.forEach(callback[, thisArg])
```

> **参数**
> * callback: 为数组中每个元素执行的函数。调用时使用的参数 `(element, index, array)`。
> * thisArg *可选* : 执行`callback`时使用的`this`值。

**返回值**

`undefined`

**示例**

```\njs
const arr = ['a', 'b', 'c'];
arr.forEach(function(element) {
    console.log(element);
});

// a
// b
// c
```

### includes

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回`false`。

**语法**

```\njs
arr.includes(searchElement, fromIndex)
```

> **参数**
> * searchElement： 需要查找元素的值。
> * fromIndex *可选*：从该索引处开始查找 `searchElement`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜索。默认为 0。

**返回值**

`Boolen`

**示例**

```\njs
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### indexOf

indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

**语法**

```\njs
arr.indexOf(searchElement[, fromIndex = 0])
```

> **参数**
> * searchElement： 需要查找元素的值。
> * fromIndex *可选*：从该索引处开始查找 `searchElement`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜索。默认为 0。

**返回值**

首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

**示例**

```\njs
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### lastIndexOf
> **介绍：**
> 此方法同上面`idnexOf`方法相同，不同的是此方法是从后面开始查找，返回倒数第一个与参数相同的值或者-1.

**示例**

```\njs
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);   // index is 3
index = array.lastIndexOf(7);       // index is -1
index = array.lastIndexOf(2, 3);		// index is 3
index = array.lastIndexOf(2, 2);		// index is 0
index = array.lastIndexOf(2, -2);		// index is 0
index = array.lastIndexOf(2, -1);		// index is 3
```

### join

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。

**语法**

```\njs
str = arr.join(separator)
```

> **参数**
> * separator *默认为`,`*： 指定一个字符串来分隔数组的每个元素。


**返回值**

一个所有数组元素连接的字符串。如果 `arr.length` 为0，则返回空字符串

**示例**

```\njs
let a = ['Wind', 'Rain', 'Fire'];

console.log(a.join()); 
// 默认为 ","
// 'Wind,Rain,Fire'

console.log(a.join("")); 
// 分隔符 === 空字符串 ""
// "WindRainFire"

console.log(a.join("-")); 
// 分隔符 "-"
// 'Wind-Rain-Fire'
```

### keys

`keys()` 方法返回一个新的`Array`迭代器，它包含数组中每个索引的键。

**语法**

```\njs
arr.keys()
```

**返回值**

一个新的 `Array` 迭代器对象。

**示例**

```\njs
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### map

`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

**语法**

```\njs
let new_array = arr.map(function callback(currentValue, index, array) { 
    // Return element for new_array 
}[, thisArg])
```

> **参数**
> * callback: 为数组中每个元素执行的函数。调用时使用的参数 `(element, index, array)`。
> * thisArg *可选* : 执行`callback`时使用的`this`值。

**返回值**

一个新数组，每个元素都是回调函数的结果。

**示例**

```\njs
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```

### pop

`pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

**语法**

```
arr.pop()
```

**返回值**

从数组中删除的元素(当数组为空时返回`undefined`)。
此方法会改变原数组。

**示例**

```\njs
let myFish = ["angel", "clown", "mandarin", "surgeon"];
let popped = myFish.pop();
console.log(myFish); 		
// ["angel", "clown", "mandarin"]
console.log(popped); 		
// surgeon
```

### shift

> **介绍：**
> 此方法同上面`pop`方法相同，不同的是此方法是从前面删除元素.

**示例**

```\njs
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift(); 

console.log('调用 shift 之后: ' + myFish); 
// "调用 shift 之后: clown,mandarin,surgeon" 

console.log('被删除的元素: ' + shifted); 
// "被删除的元素: angel"
```

### push

`push()` 方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。

**语法**

```
arr.push(element1, ..., elementN)
```

> **参数**
> * elementN: 被添加到数组末尾的元素。

**返回值**

当调用该方法时，新的 `length` 属性值将被返回。
此方法会改变原数组。

**示例**

```\njs
var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); 
// [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); 
// [1, 2, 3, 4, 5, 6, 7]
```

### unshift

> **介绍：**
> 此方法同上面`push`方法相同，不同的是此方法是从前面添加元素.

**示例**

```\njs
let a = [1, 2, 3];
a.unshift(4, 5);

console.log(a);
// [4, 5, 1, 2, 3]
```

### reduce
reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。

**语法**

```
arr.reduce(callback[, initialValue])
```

> **参数**
> * callback: 执行数组中每个值的函数，包含四个参数(`accumulator,currentValue,currentIndex,array`).
> * initialValue *可选*：用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

**返回值**

函数累计处理的结果

**示例**

```\njs
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

### reduceRight

> **介绍：**
> 此方法同上面`reduce`方法相同，不同的是此方法是从后面开始计算.

**示例**

```\njs
let flattened = [
    [0, 1], 
    [2, 3], 
    [4, 5]
].reduceRight((a, b) => {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### reverse

`reverse()` 方法将数组中元素的位置颠倒。
第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。

**语法**

```
arr.reverse()
```

**返回值**

颠倒后的原数组。此方法会改变原数组。

**示例**

```\njs
var myArray = ['one', 'two', 'three'];
myArray.reverse(); 

console.log(myArray) // ['three', 'two', 'one']
```

### slice

`slice()` 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。

**语法**

```
arr.slice(begin[, end])
```

> **参数**
> * begin *可选（默认值为0）*: 从该索引处开始提取原数组中的元素。
> * end *可选（默认值为`arr.length`）*：在该索引处结束提取原数组元素。`slice`会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含`begin`，但不包含`end`）。

**返回值**

一个含有提取元素的新数组。

**示例**

```\njs
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### some

`some()` 方法测试数组中的某些元素是否通过由提供的函数实现的测试。

**语法**

```
arr.some(callback[, thisArg])
```

> **参数**
> * callback: 用来测试每个元素的函数，包含三个参数(`currentValue,currentIndex,array`).
> * thisArg *可选*：执行 `callback` 时使用的 `this` 值。

**返回值**

`Boolen`

**示例**

```\njs
const isBiggerThan10 = (element, index, array) => {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  
// false

[12, 5, 8, 1, 4].some(isBiggerThan10); 
// true
```

### sort

`sort()` 方法用就地（ `in-place` ）的算法对数组的元素进行排序，并返回数组。 `sort` 排序不一定是稳定的。默认排序顺序是根据字符串`Unicode`码点。

**语法**

```
arr.sort(compareFunction)
```

> **参数**
> * compareFunction *可选*: 用来指定按某种顺序进行排列的函数，包含两个参数（`两个相比较的值`）。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
1. 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；
2. 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 3. 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
4. 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前。
5. `compareFunction(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

**返回值**

返回排序后的数组。原数组已经被排序后的数组代替。

**示例**

```\njs
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]
```

### splice

`splice()` 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。

**语法**

```
arr.splice(start, deleteCount, item1, item2, ...)
```

> **参数**
> * start : 指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数）
> * deleteCount *可选（默认值为`arr.length - start`）*：整数，表示要移除的数组元素的个数。如果 `deleteCount` 是 0，则不移除元素。这种情况下，至少应添加一个新元素。如果 `deleteCount` 大于`start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。
> * itemN *可选*：要添加进数组的元素,从start 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

**返回值**

由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
此方法会改变原始数组。

**示例**

```\njs
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
// myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
// myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]
```

### toString

> **介绍：**
> 此方法同`join()`默认方法，此方法不接受传参.

**示例**

```\njs
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.
```

### values

> **介绍：**
> 此方法类似`keys()`方法，不同的是此方法返回的是value值。

<b>此方法多数浏览器不支持。</b>

**示例**

```\njs
let arr = ["a", "b", "c"];

let iterator = arr.values();
// undefined

console.log(iterator);
// Array Iterator {}

console.log(iterator.next()); 
// Object {value: 'a', done: false}

console.log(iterator.next()); 
// Object {value: 'b', done: false}

console.log(iterator.next()); 
// Object {value: 'c', done: false}

console.log(iterator.next()); 
// Object {value: undefined, done: true}
```
