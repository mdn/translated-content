---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
---

{{jsSidebar("Errors")}}

## 消息

```plain
语法错误：参数列表后面缺少 )
```

## 错误类型

{{jsxref("SyntaxError")}}.

## 什么地方出错了？

有一个函数在调用时出现错误。这可能是一个错误，丢失运算符或者转义字符等。

## 示例

因为没有使用“+”操作符来连接字符串，JavaScript 认为 `log` 函数的参数的值只是 `"PI: "`，在这种情况下，它应该用一个右括号作为结束。

```js example-bad
console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
```

你可以正确的调用 `log` 函数通过加上“+”操作符。

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

## 相关页面

- [Functions](/zh-CN/docs/Web/JavaScript/Guide/Functions)
