---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
---

## 消息提示

```plain
SyntaxError: "x" is a reserved identifier (Firefox)
SyntaxError: Unexpected reserved word (Chrome)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) 用作标记符将会出错。这些标记符在严格模式和非严格模式下保留：

- `enum`

以下标记符只会在严格模式下才作为保留字：

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## 示例

### 严格与非严格模式下的保留字

在两种模式下，`enum` 标识符都会作为保留字。

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

在严格模式下，会有更多的保留字。

```js example-bad
"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

你需要对上述变量重新命名。

```js example-good
var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];
```

### 升级旧版本浏览器

假如你还在使用尚未支持 let 或 class 等特性的旧版本浏览器，你应该将它们升级到支持这些新语言特性的版本。

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
//（只会在旧版本浏览器中抛出，例如 Firefox 44 或更老的版本）
```

## 相关内容

- [Good variable names](https://wiki.c2.com/?GoodVariableNames)
