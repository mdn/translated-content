---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
---

{{JSRef}}

**`matchAll()`** 方法返回一个迭代器，该迭代器包含了检索字符串与[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)进行匹配的所有结果（包括[捕获组](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)）。

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## 语法

```js-nolint
matchAll(regexp)
```

### 参数

- `regexp`

  - : 一个正则表达式对象，或者是任何具有 [`Symbol.matchAll`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) 方法的对象。

    如果 `regexp` 不是一个 `RegExp` 对象，并且没有 `Symbol.matchAll` 方法，它将通过 `new RegExp(regexp, 'g')` 被隐式转换为一个 {{jsxref("RegExp")}} 对象。

    如果 `regexp` 是一个[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)，那么它必须设置了全局（`g`）标志，否则会抛出 {{jsxref("TypeError")}} 异常。

### 返回值

一个匹配结果的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)（它不可重新开始）。每个匹配结果都是一个数组，其形状与 {{jsxref("RegExp.prototype.exec()")}} 的返回值相同。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `regexp` 是一个[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)，且没有设置全局（`g`）标志（其 [`flags`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) 属性不包含 `"g"`），则会抛出该异常。

## 描述

`String.prototype.matchAll` 方法本身的实现非常简单，它只是调用了参数的 `Symbol.matchAll` 方法，并将字符串作为第一个参数传递了进去（除了额外的输入验证，即正则表达式必须是全局的）。实际的实现来自 [`RegExp.prototype[@@matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)。

## 示例

### Regexp.prototype.exec() 和 matchAll()

如果没有 `matchAll()` 方法，仍然可以使用带有 `g` 标志的正则表达式调用 [`regexp.exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 来在循环中获取所有匹配结果：

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${regexp.lastIndex}。`,
  );
}
// 找到 football 起始位置=6 结束位置=14。
// 找到 foosball 起始位置=16 结束位置=24。
```

如果有 `matchAll()` 方法，则可以避免使用 {{jsxref("Statements/while", "while")}} 循环和带有 `g` 标志的 `exec`。相反，你可以获得一个迭代器，以便使用更方便的 {{jsxref("Statements/for...of", "for...of")}} 循环、[数组展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)或 `Array.from()` 构造函数：

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${
      match.index + match[0].length
    }.`,
  );
}
// 找到 football 起始位置=6 结束位置=14.
// 找到 foosball 起始位置=16 结束位置=24.

// 匹配迭代器在 for...of 迭代后用尽
// 再次调用 matchAll 以创建新的迭代器
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
```

如果没有 `g` 标志，`matchAll` 会抛出异常。

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

`matchAll` 内部做了一个 `regexp` 的复制，所以不像 {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}}，`lastIndex` 在字符串扫描后不会改变。

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

然而，这也意味着，与在循环中使用 [`regexp.exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 不同，你不能更改 `lastIndex` 来使正则表达式前进或倒退。

### 比 String.prototype.match() 更好的捕获组获取方式

`matchAll()` 方法的另一个重要优点是改进了对于捕获组的获取方式。

当使用全局 `g` 标志调用 {{jsxref("Global_Objects/String/match", "match()")}} 方法时，捕获组会被忽略：

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']
```

使用 `matchAll` 方法，可以轻松获取捕获组：

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### 使用实现了 @@matchAll 的非正则对象调用 matchAll()

如果一个对象有一个 `Symbol.matchAll` 方法，它可以被用作自定义匹配器。`Symbol.matchAll` 的返回值将成为 `matchAll()` 的返回值。

```js
const str = "Hmm, this is interesting.";

str.matchAll({
  [Symbol.matchAll](str) {
    return [["Yes, it's interesting."]];
  },
}); // returns [["Yes, it's interesting."]]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.matchAll` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [在 JavaScript 中使用正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
- [捕获组](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[@@matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
