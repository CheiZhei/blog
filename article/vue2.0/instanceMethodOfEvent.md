
### vm.$on

* 参数：
	1. `{string | Array<string>} event` (数组只在 2.2.0+ 中支持)
	2. `{Function} callback`

* 用法：

监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。

示例：

```js
vm.$on('test', function (msg) {
  console.log(msg)
})
vm.$emit('test', 'hi')
// => "hi"
```

### vm.$once

* 参数：
	1. `{string} event`
	2. `{Function} callback`

* 用法：

监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。

### vm.$off

* 参数：
	1. `{string | Array<string>} event` (只在 2.2.2+ 支持数组)
	2. `{Function} [callback]`

* 用法：

移除自定义事件监听器。

1. 如果没有提供参数，则移除所有的事件监听器；

2. 如果只提供了事件，则移除该事件所有的监听器；

3. 如果同时提供了事件与回调，则只移除这个回调的监听器。

### vm.$emit

* 参数：
	1. `{string} event`
	2. `[...args]`

触发当前实例上的事件。附加参数都会传给监听器回调。
