//javascript操作符

## typeof操作符

typeof操作符是用来检测变量的数据类型。对于值或者变量使用typeof操作符会返回如下字符串。

|字符串|返回值|
|:-----|:-----|
|undefined|未定义|
|boolean|布尔值|
|string|字符串|
|number|数值|
|object|对象或null|
|function|函数|

```js
var box;
console.log(typeof box)
// undefined
```

`box`是`Undefined`类型，值是`undefined`，类型返回的字符串是`undefined`。

**空的对象，表示创建了，里面没有内容；**

**空对象，表示没有创建，就是null**

`typeof`操作符可是操作变量，也可以操作字面量。虽然也可以这样使用`typeof(box)`,但`typeof`是操作符而非内置函数。ps:函数在ECMAScript中是对象，不是一种数据类型，所以，使用`typeof`来区分`function`和`object`是非常有必要的。


