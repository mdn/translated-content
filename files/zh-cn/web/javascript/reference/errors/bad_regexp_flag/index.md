---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
```

## 错误类型

{{jsxref("SyntaxError","语法错误")}}.

## 什么地方出错了？

在代码中出现了无效的正则表达式的标记。在一个正则表达式字面量中，由闭合的两条斜线组成一个模式，（正则表达式的）标记定义在第二个（斜线）标记之后。他们也可以通过{{jsxref("RegExp", "正则表达式")}} 对象的构造函数（第二个参数）来定义。正则表达式的标记可以单独或者任意次序的组合使用，但 ECMAScript 只规定了五个。

要使正则表达式包含标记，使用此语法：

```js
var re = /pattern/flags;
```

或

```js
var re = new RegExp("pattern", "flags");
```

| 标记 | 说明                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| `g`  | 整体检索。                                                                             |
| i    | 忽略大小写检索。                                                                       |
| m    | 多行检索。                                                                             |
| u    | Unicode; 将模式视为 Unicode 码点的序列                                                 |
| y    | sticky 检索将从目标字符串的当前位置开始匹配。参阅{{jsxref("RegExp.sticky", "sticky")}} |

## 示例

只有 5 个有效的正则表达式标记。

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

你打算创建一个正则表达式吗？一个包含两条斜线的表达式被解释为一个正则表达式的字面量。

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
```

还是你想创建一个字符串呢？添加单引号或双引号创建一个字符串字面量。

```js example-good
let obj = {
  url: "/docs/Web",
};
```

### 有效的正则表达式标记

在 JavaScript 中允许的五个有效的正则表达式标记，参阅上表。

```js example-good
/foo/g;
/foo/gim;
/foo/uy;
```

## 相关页面

- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
- [XRegEx flags](http://xregexp.com/flags/) – 正则表达式库提供新的四个标记 (`n`, `s`, `x`, `A`)
