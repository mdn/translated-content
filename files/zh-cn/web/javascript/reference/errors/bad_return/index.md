---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

当 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句在[函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)外部被调用时，JavaScript 会抛出“return not in function”异常。

## 错误信息

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## 错误类型

{{jsxref("SyntaxError")}}。

## 什么地方出错了？

[`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句在[函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)外部被调用了。可能是某处缺失了花括号？`return` 语句必须位于函数内部，因为它会终止函数执行并指定一个值返回给函数调用者。

## 示例

### 缺少大括号

```js-nolint example-bad
function cheer(score) {
  if (score === 147)
    return "最大！";
  }
  if (score > 100) {
    return "世纪！";
  }
}

// SyntaxError: return not in function
```

花括号乍一看之下似乎是正确的，但这段代码在第一个 `if` 语句后缺少了一个 `{`。正确的写法应该是：

```js example-good
function cheer(score) {
  if (score === 147) {
    return "最大！";
  }
  if (score > 100) {
    return "世纪！";
  }
}
```

## 参见

- [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return)
