---
title: "ReferenceError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---

{{jsSidebar("Errors")}}

## Message

```plain
ReferenceError: invalid assignment left-hand side
```

## Error type

{{jsxref("ReferenceError")}}.

## What went wrong?

有时会出现不可预料的赋值情况。这可能是因为[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)或[比较运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)不匹配的缘故。正确的是，使用“=”号将值赋给一个变量，使用“==”或者“===”来比较一个值。

## Examples

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

在 `if` 语句中，你要使用比较运算符 ("==")，而在字符串连接中，使用加号运算符 ("+")。

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log("no way!");
}

var str = "Hello, " + "from the " + "other side!";
```

## See also

- [赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- [比较运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
