---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## 信息

```plain
InternalError: too much recursion
```

## 错误类型

{{jsxref("InternalError","内部错误")}}.

## 什么地方出错了？

一个调用自身的函数被称作*递归函数*。一些情况下，递归函数类似于一个循环，都重复地执行一个代码段许多次，都需要一个条件（用于避免无尽循环或此处的无尽递归）。当出现过于深层的递归或无尽递归时，JavaScript 将会抛出此错误。

## 示例

根据递归终止的条件，该函数将递归地执行 10 次。

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" 是递归终止条件
    return;
  }
  // 进行一些操作...
  loop(x + 1); // 递归调用
}
loop(0);
```

将递归条件设置为一个极大的数值，将不能运行：

```js example-bad
function loop(x) {
  if (x >= 1000000000000) {
    return;
  }
  // 进行一些操作...
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

## 相关页面

- {{Glossary("Recursion","递归")}}
- [Recursive functions](/zh-CN/docs/Web/JavaScript/Guide/Functions#Recursion)
