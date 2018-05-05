
### key

* 预期：`number | string`

`key` 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

最常见的用例是结合 `v-for`：

```html
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>```

它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用：

完整地触发组件的生命周期钩子
触发过渡
例如：

```html
<transition>
  <span :key="text">{{ text }}</span>
</transition>```

当 `text` 发生改变时，`<span>` 会随时被更新，因此会触发过渡。

### ref

* 预期：`string`

`ref` 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：

```html
<!-- `vm.$refs.p` will be the DOM node -->
<p ref="p">hello</p>

<!-- `vm.$refs.child` will be the child component instance -->
<child-component ref="child"></child-component>```

当 `v-for` 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。

### slot

* 预期：`string`

用于标记往哪个具名插槽中插入子组件内容。

详细用法，请参考下面指南部分的链接。

### slot-scope

> 2.5.0 新增

* 预期：`function argument expression`

* 用法：

用于将元素或组件表示为作用域插槽。特性的值应该是可以出现在函数签名的参数位置的合法的 JavaScript 表达式。这意味着在支持的环境中，你还可以在表达式中使用 ES2015 解构。它在 2.5.0+ 中替代了 `scope`。

此属性不支持动态绑定。


### scope 

*replaced*

用于表示一个作为带作用域的插槽的 `<template>` 元素，它在 2.5.0+ 中被 `slot-scope` 替代。
用法：

除了 `scope` 只可以用于 `<template>` 元素，其它和 `slot-scope` 都相同。

### is

* 预期：`string`

用于动态组件且基于 DOM 内模板的限制来工作。

* 示例：

```html
<!-- component changes when currentView changes -->
<component v-bind:is="currentView"></component>

<!-- necessary because `<my-row>` would be invalid inside -->
<!-- a `<table>` element and so would be hoisted out      -->
<table>
  <tr is="my-row"></tr>
</table>```
