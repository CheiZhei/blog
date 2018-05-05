
### vm.$watch

* 参数：
	1. `{string | Function} expOrFn`
	2. `{Function | Object} callback`
	3. `{Object} [options]`
		* `{boolean} deep`
		* `{boolean} immediate`

* 返回值：`{Function} unwatch`

* 用法：

观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。

> 注意：在变异 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。

示例：

```js
// 键路径
vm.$watch('a.b.c', function (newVal, oldVal) {
  // 做点什么
})

// 函数
vm.$watch(
  function () {
    return this.a + this.b
  },
  function (newVal, oldVal) {
    // 做点什么
  }
)
```

`vm.$watch` 返回一个取消观察函数，用来停止触发回调：

```js
var unwatch = vm.$watch('a', cb)
// 之后取消观察
unwatch()
```

* 选项：`deep`

为了发现对象内部值的变化，可以在选项参数中指定 `deep: true` 。注意监听数组的变动不需要这么做。

```js
vm.$watch('someObject', callback, {
  deep: true
})
vm.someObject.nestedValue = 123
// callback is fired
```

* 选项：`immediate`

在选项参数中指定 `immediate: true` 将立即以表达式的当前值触发回调：

```js
vm.$watch('a', callback, {
  immediate: true
})
// 立即以 `a` 的当前值触发回调
```

### vm.$set

* 参数：
	1. `{Object | Array} target`
	2. `{string | number} key`
	3. `{any} value`

* 返回值：设置的值。

用法：

这是全局 `Vue.set` 的别名。

参考：`Vue.set`

### vm.$delete

* 参数：
	1. `{Object | Array} target`
	2. `{string | number} key`

* 用法：

这是全局 `Vue.delete` 的别名。

参考：Vue.delete
