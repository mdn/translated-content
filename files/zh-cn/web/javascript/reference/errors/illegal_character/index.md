---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

在代码中有非法的或者不期望出现的标记符号出现在不该出现的位置。请使用支持语法高亮功能的编辑器仔细检查你的代码，看看是否存在张冠李戴的情况，比如减号 (`-`) 与连接符 (`–`) ，或者是英文双引号 (`"`) 与中文双引号 (`“`)。

## 示例

### 错配字符

一些字符看起来会很相像，但是会导致于语法解析器解析代码失败。

```js example-bad
“This looks like a string”;
// SyntaxError: illegal character

42 – 13;
// SyntaxError: illegal character
```

下面这样是可以正常运行的：

```js example-good
"This is actually a string";

42 - 13;
```

### 遗漏的字符

很容易就会在这里或那里遗漏一些字符。

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

把遗漏的引号给 '#333' 添加上。

```js example-good
var colors = ["#000", "#333", "#666"];
```

### 隐藏字符

当从外部复制粘贴代码的时候，有可能就有非法的隐藏字符的存在，需要引起注意！

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
```

当使用文本编辑器如 VIM 进行探测的时候，可以发现这里存在一个零宽空格 [(ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space)。

```js
var foo = 'bar';​<200b>
```

## 相关内容

- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
