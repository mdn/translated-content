---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: Expected ';' (Edge)
```

```plain
 SyntaxError: missing ; before statement (Firefox)
```

## 错误类型

{{jsxref("SyntaxError")}}.

## 哪里出错了？

某个地方丢失了一个 (`;`)。 [JavaScript 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements)必须以分号结束。有一些是由 [自动分号插入 (ASI)](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) 的使用所影响到的，但在这种情况下，你需要提供一个分号，以便于 JavaScript 可以将源代码解析正确。然而，通常情况下，这个错误只是另一个错误一个导致的，如不正确转义字符串，使用 var 的错误。你也可能有太多的括号的地方。当出现此错误时，仔细检查语法。

## 示例

转义字符串

这个错误可能发生不正确时容易转义字符串 JavaScript 引擎是希望你的字符串的末尾已经。例如：

```js example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

你可以用双引号，或者用\转义：

```js-nolint example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### 用 var 声明属性

你不能将带有变量声明的对象或数组的属性用`var`来声明。

```js example-bad
var obj = {};
var obj.foo = "hi"; // SyntaxError missing ; before statement

var array = [];
var array[0] = "there"; // SyntaxError missing ; before statement
```

而是省略掉`var`关键词：

```js example-good
var obj = {};
obj.foo = "hi";

var array = [];
array[0] = "there";
```

### 不推荐使用的关键字

如果你用的是另一种编程语言，那么在 javaScript 中使用不具有相同或完全没有意义的关键字也是很常见的：

```js example-bad
def print(info){
  console.log(info);
}; // SyntaxError missing ; before statement
```

因此，建议使用`function`而不是`def`：

```js example-good
function print(info) {
  console.log(info);
}
```

## 参考

- [自动分号插入 (ASI)](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)
- [JavaScript 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements)
