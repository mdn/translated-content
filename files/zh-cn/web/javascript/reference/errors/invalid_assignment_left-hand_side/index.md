---
title: "SyntaxError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
l10n:
  sourceCommit: ee1599cba00284fd6af713e61e96dae61bb10287
---

{{jsSidebar("Errors")}}

当在代码中出现意外的赋值情况时，JavaScript 就会抛出“invalid assignment left-hand side”的异常。当使用单个 `=` 符号而不是 `==` 或 `===` 时，可能会触发此异常。

## 错误信息

```plain
SyntaxError: Invalid left-hand side in assignment (V8-based)
SyntaxError: invalid assignment left-hand side (Firefox)
SyntaxError: Left side of assignment is not a reference. (Safari)
```

## 错误类型

{{jsxref("SyntaxError")}} 或 {{jsxref("ReferenceError")}}，根据语法情况来定。

## 什么地方出错了？

在某处出现了意外的赋值情况。比如说，这可能是因为[赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)与[相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#相等运算符)不匹配。单个 `=` 符号用于给变量赋值，而 `==` 或 `===` 运算符则是用于比较值。

## 示例

### 典型的无效赋值情况

```js-nolint example-bad
if (Math.PI + 1 = 3 || Math.PI + 1 = 4) {
  console.log("没门！");
}
// SyntaxError: invalid assignment left-hand side

const str = "你好，" += "你是在" += "找我吗？";
// SyntaxError: invalid assignment left-hand side
```

在 `if` 语句中，你需要使用严格相等运算符（`===`），而对于字符串拼接，则需要使用加号（`+`）运算符。

```js-nolint example-good
if (Math.PI + 1 === 3 || Math.PI + 1 === 4) {
  console.log("没门！");
}

const str = "你好，" + "来自" + "另一个世界！";
```

### 导致 ReferenceError 的赋值操作

无效的赋值操作不一定会产生语法错误。有时语法几乎是正确的，但在运行过程中，左侧表达式计算得出的是一个*值*而非*引用*，因此赋值仍然无效。这类错误会在程序执行到该语句时发生，即在实际执行阶段出现。

```js-nolint example-bad
function foo() {
  return { a: 1 };
}
foo() = 1; // ReferenceError: invalid assignment left-hand side
```

函数调用、[`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用、[`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 和 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 都是值而不是引用。如果你想在左侧使用它们，赋值目标需要是它们产生的属性值。

```js example-good
function foo() {
  return { a: 1 };
}
foo().a = 1;
```

> [!NOTE]
> 在 Firefox 和 Safari 中，第一个示例在非严格模式下会产生 `ReferenceError` 错误，而在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下则会产生 `SyntaxError` 错误。Chrome 在严格模式和非严格模式下都会抛出运行时的 `ReferenceError` 错误。

### 使用可选链运算符作为赋值目标

[可选链运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)不是有效的赋值目标。

```js-nolint example-bad
obj?.foo = 1; // SyntaxError: invalid assignment left-hand side
```

相反，你必须首先处理可能为空值的情况。

```js example-good
if (obj) {
  obj.foo = 1;
}
```

## 参见

- [赋值运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)
- [相等运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#相等运算符)
