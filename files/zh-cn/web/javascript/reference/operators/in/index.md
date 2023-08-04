---
title: in
slug: Web/JavaScript/Reference/Operators/in
---

{{jsSidebar("Operators")}}

如果指定的属性在指定的对象或其原型链中，则 **`in`** **运算符**返回 `true`。

{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}

## 语法

```plain
prop in object
```

### 参数

- `prop`
  - : 一个字符串类型或者 symbol 类型的属性名或者数组索引（非 symbol 类型将会强制转为字符串）。
- `objectName`
  - : 检查它（或其原型链）是否包含具有指定名称的属性的对象。

## 描述

下面的例子演示了一些 `in` 运算符的用法。

```js
// 数组
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees; // 返回 true
3 in trees; // 返回 true
6 in trees; // 返回 false
"bay" in trees; // 返回 false (必须使用索引号，而不是数组元素的值)

"length" in trees; // 返回 true (length 是一个数组属性)

Symbol.iterator in trees; // 返回 true (数组可迭代，只在 ES2015+ 上有效)

// 内置对象
"PI" in Math; // 返回 true

// 自定义对象
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // 返回 true
"model" in mycar; // 返回 true
```

`in`右操作数必须是一个对象值。例如，你可以指定使用`String`构造函数创建的字符串，但不能指定字符串文字。

```js
var color1 = new String("green");
"length" in color1; // 返回 true
var color2 = "coral";
"length" in color2; // 报错 (color2 不是对象)
```

### 对被删除或值为 undefined 的属性使用`in`

如果你使用 [`delete`](/zh-CN/docs/JavaScript/Reference/Operators/delete) 运算符删除了一个属性，则 `in` 运算符对所删除属性返回 `false`。

```js
var mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // 返回 false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回 false
```

如果你只是将一个属性的值赋值为{{jsxref("Global_Objects/undefined", "undefined")}}，而没有删除它，则 `in` 运算仍然会返回`true`。

```js
var mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // 返回 true
```

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回 true
```

### 继承属性

如果一个属性是从原型链上继承来的，`in` 运算符也会返回 `true`。

```js
"toString" in {}; // 返回 true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/zh-CN/docs/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Enumerability_and_ownership_of_properties)
