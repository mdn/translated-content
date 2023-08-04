---
title: getter
slug: Web/JavaScript/Reference/Functions/get
---

{{jsSidebar("Functions")}}

**`get`** 语法将对象属性绑定到查询该属性时将被调用的函数。

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## 语法

```plain
{get prop() { ... } }

{get [expression]() { ... } }
```

### 参数

- `prop`
  - : 要绑定到给定函数的属性名。
- expression
  - : 从 ECMAScript 2015 开始，还可以使用一个计算属性名的表达式绑定到给定的函数。

## 描述

有时需要允许访问返回动态计算值的属性，或者你可能需要反映内部变量的状态，而不需要使用显式方法调用。在 JavaScript 中，可以使用 _getter_ 来实现。

尽管可以结合使用 getter 和 setter 来创建一个伪属性，但是不可能同时将一个 getter 绑定到一个属性并且该属性实际上具有一个值。

使用`get`语法时应注意以下问题：

- 可以使用数值或字符串作为标识；
- 必须不带参数（请参考[Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/)）；
- 它不能与另一个 `get` 或具有相同属性的数据条目同时出现在一个对象字面量中（不允许使用 `{ get x() { }, get x() { } }` 和 `{ x: ..., get x() { } }`）。

## 示例

### 在新对象初始化时定义一个 getter

这会为`obj`创建一个伪属性`latest`，它会返回`log`数组的最后一个元素。

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest); // "test".
```

注意，尝试为`latest`分配一个值不会改变它。

### 使用`delete`操作符删除 getter

只需使用 [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)，就可删除 getter：

```js
delete obj.latest;
```

### 使用`defineProperty`在现有对象上定义 getter

要随时将 getter 添加到现有对象，使用 {{jsxref("Object.defineProperty()")}}.

```js
var o = { a: 0 };

Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});

console.log(o.b); // Runs the getter, which yields a + 1 (which is 1)
```

### 使用计算出的属性名

```js
var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### 智能 / 自我复写/ 懒加载 getters

Getters 给你一种方法来定义一个对象的属性，但是在访问它们之前不会计算属性的值。getter 延迟计算值的成本，直到需要此值，如果不需要，您就不用支付成本。

一种额外的优化技术是用**智能 (或称[记忆化](https://en.wikipedia.org/wiki/Memoization))getters** 延迟属性值的计算并将其缓存以备以后访问。该值是在第一次调用 getter 时计算的，然后被缓存，因此后续访问返回缓存值而不重新计算它。这在以下情况下很有用：

- 如果属性值的计算是昂贵的（占用大量 RAM 或 CPU 时间，产生工作线程，检索远程文件等）。
- 如果现在不需要该值。它将在稍后使用，或在某些情况下它根本不使用。
- 如果被使用，它将被访问几次，并且不需要重新计算，该值将永远不会被改变，或者不应该被重新计算。

> **备注：** 这意味着你不应该为你希望更改其值的属性使用懒 getter，因为 getter 不会重新计算该值。

在以下示例中，对象具有一个 getter 属性。在获取属性时，该属性将从对象中删除并重新添加，但此时将隐式显示为数据属性。最后返回得到值。

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},
```

对于 Firefox 代码，另请参阅定义[`defineLazyGetter()`](<https://developer.mozilla.org/zh-CN/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()>) 函数的`XPCOMUtils.jsm`代码模块。

### `get` vs. `defineProperty`

当使用 `get` 关键字时，它和{{jsxref("Object.defineProperty()")}} 有类似的效果，在{{jsxref("classes")}}中使用时，二者有细微的差别。

当使用 `get` 关键字时，属性将被定义在实例的原型上，当使用{{jsxref("Object.defineProperty()")}}时，属性将被定义在实例自身上。

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- 在 Javascript 指南中 [定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#定义_getter_与_setter)
