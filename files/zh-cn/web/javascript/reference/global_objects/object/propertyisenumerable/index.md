---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

**`propertyIsEnumerable()`** 方法返回一个布尔值，表示指定的属性是否可枚举。

{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html")}}

## 语法

```plain
obj.propertyIsEnumerable(prop)
```

### 参数

- `prop`
  - : 需要测试的属性名。

### 返回值

用来表示指定的属性名是否可枚举的{{jsxref("Boolean", "布尔值")}}。

## 描述

每个对象都有一个 `propertyIsEnumerable` 方法。此方法可以确定对象中指定的属性是否可以被 {{jsxref("Statements/for...in", "for...in")}} 循环枚举，但是通过原型链继承的属性除外。如果对象没有指定的属性，则此方法返回 `false`。

## 例子

### `propertyIsEnumerable` 方法的基本用法

下面的例子演示了 `propertyIsEnumerable` 方法在普通对象和数组上的基本用法：

```js
var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop'); // 返回 true
a.propertyIsEnumerable(0);      // 返回 true
```

### 用户自定义对象和内置对象

下面的例子演示了用户自定义对象和内置对象上属性可枚举性的区别。

```js
var a = ['is enumerable'];

a.propertyIsEnumerable(0);        // 返回 true
a.propertyIsEnumerable('length'); // 返回 false

Math.propertyIsEnumerable('random'); // 返回 false
this.propertyIsEnumerable('Math');   // 返回 false
```

### 自身属性和继承属性

```js
var a = [];
a.propertyIsEnumerable('constructor'); // 返回 false

function firstConstructor() {
  this.property = 'is not enumerable';
}

firstConstructor.prototype.firstMethod = function() {};

function secondConstructor() {
  this.method = function method() { return 'is enumerable'; };
}

secondConstructor.prototype = new firstConstructor;
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = 'is enumerable';

o.propertyIsEnumerable('arbitraryProperty'); // 返回 true
o.propertyIsEnumerable('method');            // 返回 true
o.propertyIsEnumerable('property');          // 返回 false

o.property = 'is enumerable';

o.propertyIsEnumerable('property');          // 返回 true

// 之所以这些会返回 false，是因为，在原型链上 propertyIsEnumerable 不被考虑
// (尽管最后两个在 for-in 循环中可以被循环出来)。
o.propertyIsEnumerable('prototype');   // 返回 false (根据 JS 1.8.1/FF3.6)
o.propertyIsEnumerable('constructor'); // 返回 false
o.propertyIsEnumerable('firstMethod'); // 返回 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [属性的可枚举性和所有权](/zh-CN/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
