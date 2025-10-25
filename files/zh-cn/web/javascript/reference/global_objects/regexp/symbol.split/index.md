---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

**`[Symbol.split]()`** 是 {{jsxref("RegExp")}} 实例的方法，它指定了当正则表达式作为分隔符传入 [`String.prototype.split`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 时，字符串应如何被分割。

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.split]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

console.log("2016-01-02".split(new RegExp1("-")));
// 预期输出：Array ["(2016)", "(01)", "(02)"]

console.log("2016-01-02".split(/-/));
// 预期输出：Array ["2016", "01", "02"]
```

## 语法

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### 参数

- `str`
  - : 分割操作的目标。
- `limit` {{optional_inline}}
  - : 一个指定要查找的分割次数的上限的整数。`[Symbol.split]()` 方法仍然会对 `this` 正则表达式模式（或上述语法中的 `regexp`）的每个匹配项进行分割，直到分割的元素数量达到 `limit` 限制，或者字符串中不再匹配该模式。

### 返回值

一个包含子字符串作为元素的 {{jsxref("Array")}}。捕获组也会被包含在内。

## 描述

当 `RegExp` 作为分隔符传入时，{{jsxref("String.prototype.split()")}} 会在内部调用此方法。例如，下面的两个示例返回相同的结果。

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

此方法用于在自定义 `RegExp` 子类中 `split()` 方法的行为。

`RegExp.prototype[Symbol.split]()` 基础方法具有以下行为：

- 它首先使用 [`[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) 构造一个新的正则表达式，从而避免对原始正则表达式进行任何修改。
- 该正则表达式的 `g`（“全局”）标志会被忽略，而 `y`（“粘性”）标志则始终会被应用，即使它最初并未设置。
- 如果目标字符串是空字符串，且正则表达式可以匹配空字符串（例如 `/a?/`），则返回空数组。否则，如果正则表达式无法匹配空字符串，则返回 `[""]`。
- 匹配过程通过不断调用 `this.exec()`。由于正则表达式始终带有粘性标志，每次调用都会沿字符串向前推进，返回匹配的字符串、匹配位置索引以及任何捕获组。
- 对于每一次匹配，首先将上一个匹配结束位置与当前匹配开始位置之间的子字符串添加到结果数组中。然后，将当前匹配中的捕获组值逐个添加进去。
- 如果当前匹配是空字符串，或者正则表达式（由于启用了粘性）在当前位置无法匹配，那么 `lastIndex` 仍会被推进——如果正则是 [Unicode 感知](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)的，则推进一个 Unicode 码位；否则，推进一个 UTF-16 码元。
- 如果正则表达式无法匹配目标字符串，则返回原始字符串本身，并将其包裹在一个数组中。
- 返回的数组长度不会超过提供的 `limit` 参数（如果有的话），同时会尽可能接近该限制。因此，如果数组已满，最后一个匹配项及其捕获组可能不会全部出现在返回的数组中。

## 示例

### 直接调用

该方法的用法几乎与 {{jsxref("String.prototype.split()")}} 相同，不同之处在于 `this` 对象不同且参数顺序也有所区别。

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### 在子类中使用 `[Symbol.split]()`

{{jsxref("RegExp")}} 的子类可以重写 `[Symbol.split]()` 方法，以修改默认行为。

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `（${x}）`);
  }
}

const re = new MyRegExp("-");
const str = "2016-01-02";
const result = str.split(re); // String.prototype.split 会调用 re[Symbol.split]()。
console.log(result); // ["（2016）", "（01）", "（02）"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `RegExp.prototype[Symbol.split]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[Symbol.match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.split")}}
