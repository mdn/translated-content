---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef}} {{deprecated_header}}

`function.arguments` 属性代表传入函数的实参，它是一个类数组对象。

## 描述

`function.arguments` 已经被废弃了，现在推荐的做法是使用函数内部可用的 {{jsxref("Functions/arguments", "arguments")}} 对象来访问函数的实参。

在函数递归调用的时候（在某一刻同一个函数运行了多次，也就是有多套实参），那么 `arguments` 属性的值是最近一次该函数调用时传入的实参，下面的示例有演示。

如果函数不在执行期间，那么该函数的 `arguments` 属性的值是 `null`。

## 示例

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("函数退出后的 arguments 属性值：" + g.arguments);

// 输出：

// before: 1
// before: 0
// after: 0
// after: 1
// 函数退出后的 arguments 属性值：null
```

## 规范

不属于任何规范。已弃用，推荐使用 ECMAScript 3 的 {{jsxref("Functions/arguments", "arguments")}}。

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions", "函数和函数的作用域", "", 1)}}
