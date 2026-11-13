---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
---

## 错误提示

```plain
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token '='. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

缺失变量名。这有很大的可能性是由你的代码中的语法错误造成的。也许是什么地方的逗号出了问题，或者是你正在绞尽脑汁想一个合适的名字。完全可以理解！为变量起名确实让人头疼。

## 示例

### 变量名缺失

```js example-bad
const = "foo";
```

很容易忘记给变量命名！

```js example-good
const description = "foo";
```

### 保留字不能作为变量名

有一些名称是作为[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字)而存在的。不好意思，你不能使用！:(

```js example-bad
const debugger = "whoop";
// SyntaxError: missing variable name
```

### 一次性声明多个变量

在一次性声明多个变量的时候要特别留意逗号。看看是否有多余的逗号？以及是否不小心把逗号用作了分号？

```js example-bad
let x, y = "foo",
const z, = "foo"

const first = document.getElementById("one"),
const second = document.getElementById("two"),

// SyntaxError: missing variable name
```

修复后的代码：

```js example-good
let x,
  y = "foo";
const z = "foo";

const first = document.getElementById("one");
const second = document.getElementById("two");
```

### 数组

在 JavaScript 中 {{jsxref("Array")}} 字面量需要使用方括号将值包裹起来。下面这样是不对的：

```js example-bad
const arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

这样写才是正确的：

```js example-good
const arr = [1, 2, 3, 4, 5];
```

## 参见

- [词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
- {{jsxref("Statements/var", "var")}}
- [语法与类型](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)指南
