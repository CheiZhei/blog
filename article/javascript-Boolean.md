## Boolean对象

`Boolean` 对象用于转换一个不是 `Boolean` 类型的值转换为 `Boolean` 类型值 (`true` 或者`false`)。

## Boolean属性

|   属性      | 描述                           |
| :---------- | :----------------------------- |
| constructor | 返回创建数组对象的原型函数     |
| prototype   | 允许你向数组对象添加属性或方法 |

`Boolean`属性与其它对象属性类似，`prototype`可以添加原型属性及方法，`constructor`返回创建对象的原型函数。

## Boolean方法

|   属性      | 描述                           |
| :---------- | :----------------------------- |
| [toString()](#toString)| 返回指定布尔对象的字符串形式 |
| [valueOf()](#valueOf)| 返回一个布尔对象的原始值|

### toString

`toString()` 方法返回指定的布尔对象的字符串形式。

**语法**

```\njs
bool.toString()
```

**返回值**

表示特定Boolean对象的字符串。

**示例**

```\njs
var flag = new Boolean(true)
var myVar = flag.toString()
// "true"
```

### valueOf

`valueOf()` 方法返回一个`Boolean`对象的原始值。

**语法**

```\njs
bool.valueOf()
```

**返回值**

给定`Boolean`对象的原始值

**示例**

`Boolean`的 `valueOf` 方法返回一个`Boolean`对象或`Boolean`字面量的原始值作为布尔数据类型。

```\njs
var x = new Boolean();
var myVar = x.valueOf();
// myVar is false
```


