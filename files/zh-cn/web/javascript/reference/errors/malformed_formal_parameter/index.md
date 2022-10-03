---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: malformed formal parameter (Firefox)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里错了？

在至少带有两个参数的 [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 构造器中它的最后一个参数是创建的新函数的源代码。剩下的都是新函数的参数。

构造器的参数有些情况下是无效的。也许是你不小心用了一个关键字 `if` 或 `var` 作为参数名称，或者在参数列表中有一些杂乱的标点符号。或者也许你不小心传递了一个无效的值，比如数字或对象。

## 好吧，这解决了我的问题。但是为什么不开始就说明白呢？

诚然，错误信息中的措辞稍微有些奇怪。"Formal parameter" 是 "function argument" 的另一种优美的同义。我们使用“malformed”（即畸形）这个词，因为所有的 Firefox 工程师都是 19 世纪哥特式恐怖小说的巨星。

## 示例

### 无效的

```js example-bad
var f = Function("x y", "return x + y;");
// SyntaxError (missing a comma)

var f = Function("x,", "return x;");
// SyntaxError (extraneous comma)

var f = Function(37, "alert('OK')");
// SyntaxError (numbers can't be argument names)
```

### 有效的

```js example-good
var f = Function("x, y", "return x + y;");  // correctly punctuated

var f = Function("x", "return x;");

// if you can, avoid using Function - this is much faster
var f = function (x) { return x; };
```

## 相关链接

- [`Function()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [About functions](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [_Frankenstein_ by Mary Wollstonecraft Shelley, full e-text](https://www.gutenberg.org/ebooks/84) ("Cursed (although I curse myself) be the hands that formed you! You have made me wretched beyond expression. You have left me no power to consider whether I am just to you or not. Begone! Relieve me from the sight of your detested form.")
