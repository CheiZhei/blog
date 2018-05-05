## Date对象

`Date`对象用处理日期和时间。创建`Date`对象：`new Date()`。可以接收种创建方式

```\njs
var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
```

## Date属性

|   属性      | 描述                           |
| :---------- | :----------------------------- |
| constructor | 返回创建数组对象的原型函数     |
| prototype   | 允许你向数组对象添加属性或方法 |

`Boolean`属性与其它对象属性类似，`prototype`可以添加原型属性及方法，`constructor`返回创建对象的原型函数。

## Date方法

|   方法      | 描述                           |
| :---------- | :----------------------------- |
| [getDate()](#getDate)|根据本地时间返回指定日期对象的一个月的第几天|
| [getDay()](#getDay)|根据本地时间返回一个具体日期中的星期几|
| [getFullYear()](#getFullYear)|根据本地时间返回指定日期的年份|
| [getHours()](#getHours)|根据本地时间返回指定日期对象的小时|
| [getMilliseconds()](#getMilliseconds)|根据本地时间返回指定日期对象的毫秒数|
| [getMinutes()](#getMinutes)|根据本地时间返回指定日期对象的分钟数|
| [getMonth()](#getMonth)|根据本地时间返回指定日期对象月份|
| [getSeconds()](#getSeconds)|根据本地时间返回指定日期对象秒数|
| [getTime()](#getTime)|返回一个时间的格林威治时间数值|
| [getTimezoneOffset()](#getTimezoneOffset)|返回协调世界时相对于当前时区的时间差值，单位分钟|
| [parse()](#parse)|解析一个表示日期的字符串，返回一个时间戳|
| [now()](#now)|返回日期对象的时间戳|
| [UTC()](#UTC)|同`new Date`传入最多参数一样|
| [getUTCDate()](#UTC)|返回世界时日期对象的一个月的第几天|
| [getUTCDay()](#UTC)|返回世界时日期对象的星期几|
| [getUTCFullYear()](#UTC)|返回世界时日期对象的年份|
| [getUTCHours()](#UTC)|返回世界时日期对象的小时数|
| [getUTCMilliseconds()](#UTC)|返回世界时日期对象的毫秒数|
| [getUTCMinutes()](#UTC)|返回世界时日期对象的分钟数|
| [getUTCMonth()](#UTC)|返回世界时日期对象的月份|
| [getUTCSeconds()](#UTC)|返回世界时日期对象的秒数|
| [setDate()](#setDate)|根据本地时间指定日期对象的第几日|
| [setFullYear()](#setFullYear)|根据本地时间设置日期对象的年份|
| [setHours()](#setHours)|根据本地时间设置日期对象的小时数|
| [setMilliseconds()](#setMilliseconds)|根据本地时间设置日期对象的毫秒数|
| [setMinutes()](#setMinutes)|根据本地时间设置日期对象的分钟数|
| [setMonth()](#setMonth)|根据本地时间设置日期对象的月份数|
| [setSeconds()](#setSeconds)|根据本地时间设置日期对象的秒数|
| [setTime()](#setTime)|用时间戳设置时间|
| [setUTCDate()](#UTC)|根据世界时设置日期对象的第几日|
| [setUTCFullyear()](#UTC)|根据世界时设置日期对象的年份|
| [setUTCHours()](#UTC)|根据世界时设置日期对象的小时数|
| [setUTCMilliseconds()](#UTC)|根据世界时设置日期对象的毫秒数|
| [setUTCMinutes()](#UTC)|根据世界时设置日期对象的分钟数|
| [setUTCMonth()](#UTC)|根据世界时设置日期对象的月份数|
| [setUTCSeconds()](#UTC)|根据世界时设置日期对象的秒数|
| [toDateString()](#toDateString)|把时间对象日期部分转换为字符串|
| [toISOString()](#toISOString)|返回ISO格式的日期字符串|
| [toJSON()](#toJSON)|返回Date对象的字符串形式|
| [toLocaleDateString()](#toLocaleDateString)|根据本地时间格式把时间对象的日期部分转换为字符串|
| [toLocaleString()](#toLocaleString)|据本地时间格式，把时间对象转换为字符串|
| [toLocaleTimeString()](#toLocaleTimeString)|根据本地时间格式，把时间对象的时间部分转换为字符串|
| [toString()](#toString)|返回一个字符串，表示该Date对象|
| [toTimeString()](#toTimeString)|把时间对象的时间部分转换为字符串|
| [toUTCString()](#UTC)|把世界时的时间对象部分转换为字符串|
| [valueOf()](#valueOf)|返回一个时间对象的原始值|

### getDate

`getDate()`方法可返回月份的某一天。

**语法**

```\njs
Date.getDate()
```

**返回值**

返回时间对象所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00");
var n = d.getDate();
// n is 21
```

### getDay

`getDay()` 方法可返回一周（0~6）的某一天的数字。

**语法**

```\njs
Date.getDay()
```

**返回值**

返回值是 0（周日） 到 6（周六） 之间的一个整数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00");
var n = d.getDay();
// n is 4  周五
```

### getFullyear

`getFullYear()`方法可返回一个表示年份的4位数字。

**语法**

```\njs
Date.getFullyear()
```

**返回值**

表示年份的 4 位数字。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00");
var n = d.getFullyear();
// n is 1983
```

### getHours

`getHours()` 方法可返回时间的小时字段。

**语法**

```\njs
Date.getHours()
```

**返回值**

返回值是 0 （午夜） 到 23 （晚上 11 点）之间的一个整数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00");
var n = d.getHours();
// n is 1
```

### getMilliseconds

`getMilliseconds()`方法可返回时间的毫秒。

**语法**

```\njs
Date.getMilliseconds()
```

**返回值**

返回值是 0 ~ 999 之间的一个整数，该数字代表毫秒数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00:526");
var n = d.getMilliseconds();
// n is 526
```

### getMinutes

`getMinutes()` 方法可返回时间的分钟字段。

**语法**

```\njs
Date.getMinutes()
```

**返回值**

时间对象的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00");
var n = d.getMinutes();
// n is 15
```

### getMonth

`getMonth()` 方法可返回表示月份的数字。返回值是 0（一月） 到 11（十二月） 之间的一个整数。

**语法**

```\njs
Date.getMonth()
```

**返回值**

返回值是 0（一月） 到 11（十二月） 之间的一个整数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:00");
var n = d.getMonth();
// n is 6
```

### getSeconds

`getSeconds()` 方法可返回时间的秒。返回值是 0 ~ 59 之间的一个整数。

**语法**

```\njs
Date.getSeconds()
```

**返回值**

返回值是 0 ~ 59 之间的一个整数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
var n = d.getSeconds();
// n is 25
```

### getTime

`getTime()` 方法可返回距 1970 年 1 月 1 日之间的毫秒数。

**语法**

```\njs
Date.getTime()
```

**返回值**

指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
var n = d.getTime();
// n is 427569325000
```

### getTimezoneOffset

`getTimezoneOffset()` 方法可返回格林威治时间和本地时间之间的时差，以分钟为单位。

**语法**

```\njs
Date.getTimezoneOffset()
```

**返回值**

本地时间与 GMT 时间之间的时间差，以分钟为单位。

**示例**

```\njs
var d = new Date();
var n = d.getTimezoneOffset();
// n is -480
// 这就是东8区的时间差
```

### parse

> **介绍：**
> 此方法同上面`date.getTime()`方法的返回值相同。用法略有不同，此方法不需要`new Date`,可以直接`Date.parse(datestring)`,接收一个表示日期和时间的字符串，必须参数。

**示例**

```\njs
var n = Date.parse("July 21, 1983 01:15:25");
// n is 427569325000
```

### now

> **介绍：**
> 此方法同上面`date.getTime()`的方法类似。此方法是一个静态函数,必须`Date.now()`的形式执行。

**示例**

```\njs
Date.now()
// 返回的是实时数据
```

### setDate

`setDate()` 方法用于设置一个月的某一天。

**语法**

```\njs
Date.setDate(day)
```

> **参数**
> * day ： 一个整数，表示该月的第几天。

**示例**

```\njs
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24);  // 1962-07-24
theBigDay.setDate(32);  // 1962-08-01
```

### setFullYear

`setFullYear()` 方法根据本地时间为一个日期对象设置年份。

**语法**

```\njs
dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
```

> **参数**
> * yearValue ： 指定年份的整数值,4为数，例如1995。
> * monthValue *可选*: 一个0到11之间的整数值，表示从一月到十二月。
> * dayValue *可选*: 一个1到31之间的整数值，表示月份中的第几天。如果你指定了 `dayValue` 参数，就必须同时指定 `monthValue`。

**示例**

```\njs
var d=new Date();
d.setFullYear(2020,10,3);
// Tue Nov 03 2020 17:32:33 GMT+0800 (中国标准时间)
```

### setHours

`setHours()` 方法用于设置指定的时间的小时字段。
该方法可用于设置分钟，秒以及毫秒数。

**语法**

```\njs
dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

> **参数**
> * hoursValue ： 一个 0 到 23 的整数，表示小时。
> * mintesValue *可选*: 一个 0 到 59 的整数，表示分钟。
> * secondsValue *可选*: 一个 0 到 59 的整数，表示秒数。如果指定了 `secondsValue` 参数，则必须同时指定 `minutesValue` 参数。
> * msValue *可选*：一个 0 到 999 的数字，表示毫秒数，如果指定了 `msValue` 参数，则必须同时指定 `minutesValue` 和 `secondsValue` 参数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.setHours(15,35,1);
// Thu Jul 21 1983 15:35:01 GMT+0800 (中国标准时间)
```

### setMilliseconds

`setMilliseconds()` 方法会根据本地时间设置一个日期对象的豪秒数。

**语法**

```\njs
dateObj.setMilliseconds(millisecondsValue)
```

> **参数**
> * millisecondsValue ： 一个 0 到 999 的数字，表示豪秒数。

**示例**

```\njs
var d = new Date();
d.setMilliseconds(192);
var n = d.getMilliseconds();
// n is 192
```

### setMinutes

`setMinutes()` 方法根据本地时间为一个日期对象设置分钟数。

**语法**

```\njs
dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
```

> **参数**
> * mintesValue: 一个 0 到 59 的整数，表示分钟。
> * secondsValue *可选*: 一个 0 到 59 的整数，表示秒数。如果指定了 `secondsValue` 参数，则必须同时指定 `minutesValue` 参数。
> * msValue *可选*：一个 0 到 999 的数字，表示毫秒数，如果指定了 `msValue` 参数，则必须同时指定 `minutesValue` 和 `secondsValue` 参数。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
	d.setMinutes(30,15,100);
// Thu Jul 21 1983 01:30:15 GMT+0800 (中国标准时间)
```

### setMonth

`setMonth()` 方法根据本地时间为一个设置年份的日期对象设置月份。

**语法**

```\njs
dateObj.setMonth(monthValue[, dayValue])
```

> **参数**
> * monthValue : 介于 0 到 11 之间的整数（表示一月到十二月）。
> * dayValue *可选*: 从 1 到 31 之间的整数，表示月份中的第几天。

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.setMonth(4,20);
// Fri May 20 1983 01:15:25 GMT+0800 (中国标准时间)
```

### setSeconds

setSeconds() 方法根据本地时间设置一个日期对象的秒数。

**语法**

```\njs
dateObj.setSeconds(secondsValue[, msValue])
```

> **参数**
> * secondsValue : 一个 0 到 59 的整数。
> * msValue *可选*: 一个 0 到 999 的数字，表示毫秒数。

**示例**

```\njs
var d = new Date();
d.setSeconds(35,825);
var n=d.getSeconds() + ":" + d.getMilliseconds();
// n is 35:825
```

### setTime

`setTime()` 方法以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。

**语法**

```\njs
dateObj.setTime(timeValue)
```

> **参数**
> * timeValue : 一个整数，表示从1970-1-1 00:00:00 UTC开始计时的毫秒数。

**示例**

```\njs
var d = new Date();
d.setTime(1332403882588);
// Thu Mar 22 2012 16:11:22 GMT+0800 (中国标准时间)
```

### UTC

> **介绍：**
> 此方法同上面`Date.parse()`方法类似。此方法可以接收7个参数（`year,month,day,hours,minutes,seconds,ms`）,分别表示年、月、日、时、分、秒及毫秒。

**示例**

```\njs
var d=Date.UTC(2012,02,30);
// 1333065600000
```

> **说明：**
> 
> `getUTC`,`setUTC`等方法与其同名方法类似，时区不一样可能返回的值会不一样。

### toDateString

`toDateString()` 方法可把时间对象的日期部分转换为字符串，并返回结果。

**语法**

```\njs
Date.toDateString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
var n = d.toDateString();
// Fri May 20 1983
````

### toISOString

`toISOString()` 方法可以使用ISO标准将时间对象转换为字符串。

**语法**

```\njs
Date.toISOString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toISOString()
// 1983-07-20T17:15:25.000Z
```

### toJSON

`toJSON()` 方法可以将时间对象转换为字符串，并格式化为 JSON 数据格式。

**语法**

```\njs
Date.toJSON()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toJSON()
// 1983-07-20T17:15:25.000Z
```

### toLocaleDateString

`toLocaleDateString()` 方法可根据本地时间把时间对象的日期部分转换为字符串，并返回结果。

**语法**

```\njs
Date.toLocaleDateString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toLocaleDateString()
// 1983-7-21
```

### toLocaleTimeString

`toLocaleTimeString()` 方法可根据本地时间把时间对象的时间部分转换为字符串，并返回结果。

**语法**

```\njs
Date.toLocaleTimeString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toLocaleTimeString()
// 01:15:25
```

### toLocaleString

`toLocaleString()` 方法可根据本地时间把时间对象转换为字符串，并返回结果。

**语法**

```\njs
Date.toLocaleString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toLocaleString()
// 1983-7-21 01:15:25
```

### toString

`toString()` 方法可把时间对象转换为字符串，并返回结果。

**语法**

```\njs
Date.toString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toString()
// Thu Jul 21 1983 01:15:25 GMT+0800 (中国标准时间)
```

### toTimeString

`toTimeString()` 方法可把时间对象的时间部分转换为字符串，并返回结果。

**语法**

```\njs
Date.toTimeString()
```

**示例**

```\njs
var d = new Date("July 21, 1983 01:15:25");
d.toTimeString()
// 01:15:25 GMT+0800 (中国标准时间)
```

### valueOf

> **介绍：**
> 此方法同上面`date.getTime`方法一样。

