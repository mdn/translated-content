---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef}}

**`Object.getPrototypeOf()`** 方法返回指定对象的原型（内部`[[Prototype]]`属性的值）。

## 语法

```plain
Object.getPrototypeOf(object)
```

### 参数`obj`

要返回其原型的对象。

### 返回值

给定对象的原型。如果没有继承属性，则返回 {{jsxref("null")}} 。

{{EmbedInteractiveExample("pages/js/object-getprototypeof.html")}}

## 示例

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

var reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true
```

### 说明

JavaScript 中的 **[Object](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)** 是构造函数（创建对象的包装器）。

```js
// 一般用法是：
var obj = new Object();

所以：
Object.getPrototypeOf( Object );               // ƒ () { [native code] }
Object.getPrototypeOf( Function );             // ƒ () { [native code] }

Object.getPrototypeOf( Object ) === Function.prototype;        // true

Object.getPrototypeOf( Object ) 是把 Object 这一构造函数看作对象，
返回的当然是函数对象的原型，也就是 Function.prototype。

正确的方法是，Object.prototype 是构造出来的对象的原型。
var obj = new Object();
Object.prototype === Object.getPrototypeOf( obj );              // true

Object.prototype === Object.getPrototypeOf( {} );               // true
```

## Notes

在 ES5 中，如果参数不是一个对象类型，将抛出一个{{jsxref("TypeError")}}异常。在 ES2015 中，参数会被强制转换为一个 {{jsxref("Object")}}**。**

```js
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.isPrototypeOf")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- John Resig's post on [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)
- {{jsxref("Reflect.getPrototypeOf()")}}
- {{jsxref("AsyncFunction")}}
