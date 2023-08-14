---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
---

{{jsSidebar("Errors")}}

## 错误信息

```plain
SyntaxError: return not in function
SyntaxError: yield not in function
```

## 错误类型

{{jsxref("SyntaxError")}}.

## 什么地方出错了？

[`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 返回的或者 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 语句在函数 [function](/zh-CN/docs/Web/JavaScript/Guide/Functions) 外被调用。或许是少了一个花括号， `return` 返回的和 `yield` 语句必须是在一个函数里，因为它们会停止（暂停或恢复）函数的继续执行，然后返回。

## 范例

```js example-bad
var cheer = function(score) {
  if (score === 147)
    return "Maximum!";
  };
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
// 语法错误：不是在函数里返回
```

初次看好像没什么错误，但是上面这段代码在第一个 if 后面少了一个“ { ”。正确的应该如下：

```js example-good
var cheer = function (score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
};
```

## 相关信息

- [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield)
