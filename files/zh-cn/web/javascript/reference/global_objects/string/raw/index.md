---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
---

{{JSRef()}}

**String.raw()** 是一个[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/template_strings)的标签函数，它的作用类似于 Python 中的字符串前缀 `r` 和 C# 中的字符串前缀 `@`（还是有点区别的，详见隔壁 Chromium 那边的[这个 issue](https://bugs.chromium.org/p/v8/issues/detail?id=5016)），是用来获取一个模板字符串的原始字符串的，比如说，占位符（例如 `${foo}`）会被处理为它所代表的其他字符串，而转义字符（例如 `\n`）不会。

## 语法

```plain
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

### 参数

- `callSite`
  - : 一个模板字符串的“调用点对象”。类似 `{ raw: ['foo', 'bar', 'baz'] }`。
- `...substitutions`
  - : 任意个可选的参数，表示任意个内插表达式对应的值。
- `templateString`
  - : 模板字符串，可包含占位符（`${...}`）。

### 返回值

给定模板字符串的原始字符串。

### 异常

- `{{jsxref("TypeError")}}`
  - : 如果第一个参数没有传入一个格式正确的对象，则会抛出 `TypeError` 异常。

## 描述

在大多数情况下，`String.raw()` 是用来处理模版字符串的。不要被上面复杂的参数要求吓到，因为像所有的 [tag functions](/zh-CN/docs/Web/JavaScript/Reference/template_strings#Tagged_template_literals)一样，你通常不需要把它看成一个普通函数，你只需要把它放在模板字符串前面就可以了，而不是在它后面加个括号和一堆参数来调用它，引擎会替你去调用它。

`String.raw()` 是唯一一个内置的模板字符串标签函数，因为它太常用了。不过它并没有什么特殊能力，你自己也可以实现一个和它功能一模一样的标签函数。

## 示例

### 使用 `String.raw()`

```js
String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!'，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符

String.raw `Hi\u000A!`;
// "Hi\\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6 个字符，
// 任何类型的转义形式都会失效，保留原样输出，不信你试试.length

let name = "Bob";
String.raw `Hi\n${name}!`;
// "Hi\nBob!"，内插表达式还可以正常运行


// 正常情况下，你也许不需要将 String.raw() 当作函数调用。
// 但是为了模拟 `t${0}e${1}s${2}t` 你可以这样做：
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
// 注意这个测试，传入一个 string，和一个类似数组的对象
// 下面这个函数和 `foo${2 + 3}bar${'Java' + 'Script'}baz` 是相等的。
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [模板字符串](/zh-CN/docs/Web/JavaScript/Reference/template_strings)
- {{jsxref("String")}}
- [JavaScript 词法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
