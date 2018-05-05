### Vue.extend( options )

* 参数：
  1. `{Object} options`

* 用法：

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

`data` 选项是特例，需要注意 - 在 `Vue.extend()` 中它必须是函数

```html
<div id="mount-point"></div>```

```js
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')```

结果如下：

```html
<p>Walter White aka Heisenberg</p>```

### Vue.nextTick( [callback, context] )

* 参数：
  1. `{Function} [callback]`
  2. `{Object} [context]`

* 用法：

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

```js
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })```

> 2.1.0 起新增：如果没有提供回调且在支持 `Promise` 的环境中，则返回一个 `Promise`。请注意 `Vue` 不自带 `Promise` 的 `polyfill`，所以如果你的目标浏览器不原生支持 `Promise` (IE：你们都看我干嘛)，你得自己提供 `polyfill`。

### Vue.set( target, key, value )

* 参数：
  1. `{Object | Array} target`
  2. `{string | number} key`
  3. `{any} value`

* 返回值：设置的值。

* 用法：

设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 `Vue` 不能检测属性被添加的限制。

注意对象不能是 `Vue` 实例，或者 `Vue` 实例的根数据对象。

### Vue.delete( target, key )

* 参数：
  1. `{Object | Array} target`
  2. `{string | number} key/index`

> 仅在 2.2.0+ 版本中支持 Array + index 用法。

* 用法：

删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开 Vue 不能检测到属性被删除的限制，但是你应该很少会使用它。

> 在 2.2.0+ 中同样支持在数组上工作。

**目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。**

### Vue.directive( id, [definition] )

* 参数：
  1. `{string} id`
  2. `{Function | Object} [definition]`

* 用法：

注册或获取全局指令。

```js
// 注册
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// 注册 (指令函数)
Vue.directive('my-directive', function () {
  // 这里将会被 `bind` 和 `update` 调用
})

// getter，返回已注册的指令
var myDirective = Vue.directive('my-directive')```


### Vue.filter( id, [definition] )

* 参数：
  1. `{string} id`
  2. `{Function} [definition]`

* 用法：

注册或获取全局过滤器。

```js
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})

// getter，返回已注册的过滤器
var myFilter = Vue.filter('my-filter')```

### Vue.component( id, [definition] )

* 参数：
  1. `{string} id`
  2. `{Function | Object} [definition]`

* 用法：

注册或获取全局组件。注册还会自动使用给定的id设置组件的名称

```js
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })

// 获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')```

### Vue.use( plugin )

* 参数：
  1. `{Object | Function} plugin`

* 用法：

安装 `Vue.js` 插件。如果插件是一个对象，必须提供 `install` 方法。如果插件是一个函数，它会被作为 `install` 方法。`install` 方法调用时，会将 `Vue` 作为参数传入。

当 `install` 方法被同一个插件多次调用，插件将只会被安装一次。

### Vue.mixin( mixin )

* 参数：
  1. `{Object} mixin`

* 用法：

全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。

### Vue.compile( template )

* 参数：
  1. `{string} template`

* 用法：

在 `render` 函数中编译模板字符串。只在独立构建时有效

```html
var res = Vue.compile('<div><span>{{ msg }}</span></div>')```

```js
new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})```

### Vue.version

* 细节：提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略。

* 用法：

```js
var version = Number(Vue.version.split('.')[0])

if (version === 2) {
  // Vue v2.x.x
} else if (version === 1) {
  // Vue v1.x.x
} else {
  // Unsupported versions of Vue
}```
