---
title: "SyntaxError: for-in loop head declarations may not have initializers"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: for-in loop head declarations may not have initializers (Firefox)

SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
```

## 错误类型

该 {{jsxref("SyntaxError")}} 只出现于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下。

## 哪里出错了？

在 [for...in](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环的头部存在初始化表达式。也就是存在变量声明并且被赋值，例如 |`for (var i = 0 in obj)`|。在非严格模式下，这种在循环头部的变量声明会被静默忽略，语句的表现形式与 `|for (var i in obj)|`相同。而在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，会报语法错误。

## 示例

下面这个示例会报语法错误（`SyntaxError`）：

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### 合法的 for-in 循环

可以把初始化语句 (`i = 0`) 从 for-in 循环的头部移除。

```js example-good
"use strict";

var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### 数组迭代

for...in 循环[不应该应用于数组迭代中](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in)。是否考虑使用 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环而不是 `for-in` 循环来遍历数组（{{jsxref("Array")}}）？在 for 循环中是允许使用初始化语句的：

```js example-good
var arr = ["a", "b", "c"];

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## 相关内容

- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) – 无论是在严格模式下还是非严格模式下也都不允许使用初始化语句。
- [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) – 更适用于数组迭代，因为允许使用初始化语句。
