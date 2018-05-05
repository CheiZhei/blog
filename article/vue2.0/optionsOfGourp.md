
### parent

* 类型：`Vue instance`

* 详细：

指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 `this.$parent` 访问父实例，子实例被推入父实例的 `$children` 数组中。

节制地使用 `$parent` 和 `$children` - 它们的主要目的是作为访问组件的应急方法。更推荐用 `props` 和 `events` 实现父子组件通信

### mixins

* 类型：`Array<Object>`

* 详细：

`mixins` 选项接受一个混入对象的数组。这些混入实例对象可以像正常的实例对象一样包含选项，他们将在 `Vue.extend()` 里最终选择使用相同的选项合并逻辑合并。举例：如果你的混入包含一个钩子而创建组件本身也有一个，两个函数将被调用。
`Mixin` 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。

示例：

```js
var mixin = {
  created: function () { console.log(1) }
}
var vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})
// => 1
// => 2```

### extends

* 类型：`Object | Function`

* 详细：

允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 `Vue.extend`。这主要是为了便于扩展单文件组件。

这和 mixins 类似。

示例：

```js
var CompA = { ... }

// 在没有调用 `Vue.extend` 时候继承 CompA
var CompB = {
  extends: CompA,
  ...
}```

### provide/inject

> 2.2.0 新增

* 类型：
  1. `provide：Object | () => Object`
  2. `inject：Array<string> | { [key: string]: string | Symbol | Object }`

* 详细：

`provide` 和 `inject` 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

`provide`选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 `ES2015 Symbols` 作为 `key`，但是只在原生支持 `Symbol` 和 `Reflect.ownKeys` 的环境下可工作。

`inject` 选项应该是：

1. 一个字符串数组，或
1. 一个对象，对象的 key 是本地的绑定名，value 是：
** 在可用的注入内容中搜索用的 key (字符串或 Symbol)，或
** 一个对象，该对象的：
  * `name` 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)
  * `default` 属性是降级情况下使用的 value

> 提示：`provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。

* 示例：

```js
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```

利用 ES2015 Symbols、函数 `provide` 和对象 `inject`：

```js
const s = Symbol()

const Provider = {
  provide () {
    return {
      [s]: 'foo'
    }
  }
}

const Child = {
  inject: { s },
  // ...
}
```

> 接下来 2 个例子只工作在 Vue 2.2.1 或更高版本。低于这个版本时，注入的值会在 `props` 和 `data` 初始化之后得到。

使用一个注入的值作为一个属性的默认值：

```js
const Child = {
  inject: ['foo'],
  props: {
    bar: {
      default () {
        return this.foo
      }
    }
  }
}
```

使用一个注入的值作为数据入口：

```js
const Child = {
  inject: ['foo'],
  data () {
    return {
      bar: this.foo
    }
  }
}
```

> 在 2.5.0+ 的注入可以通过设置默认值使其变成可选项：

```js
const Child = {
  inject: {
    foo: { default: 'foo' }
  }
}```

如果它需要从一个不同名字的属性注入，则使用 `from` 来表示其源属性：

```js
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: 'foo'
    }
  }
}
```

对于 prop 的默认值来说是类似的，你需要对非原始值使用一个工厂方法：

```js
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}```
