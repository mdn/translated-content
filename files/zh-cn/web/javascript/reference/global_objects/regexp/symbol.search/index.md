---
title: RegExp.prototype[Symbol.search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search
---

{{jsxref("RegExp")}} 实例的 **`[Symbol.search]()`** 方法指定了 [`String.prototype.search()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 的行为。

## 语法

```js-nolint
regexp[Symbol.search](str)
```

### 参数

- `str`
  - : 搜索的目标 {{jsxref("String")}}。

### 返回值

- 整数
  - : 如果成功的话，`[Symbol.search]()` 返回该正则模式的第一个匹配项的在字符串中的位置索引。否则将返回 -1。

## 描述

这个方法用于在 `RegExp` 子类中自定义搜索行为。它在内部被 {{jsxref("String.prototype.search()")}} 调用。例如，下面的两个方法返回相同结果。

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

`[Symbol.search]()` 总是恰好调用一次正则表达式的 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法，并返回结果的 `index` 属性；如果结果为 `null`，则返回 `-1`。`g` 标志对此方法没有影响。

与 [`[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) 或 [`[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) 不同，此方法不会复制正则表达式。但是，与 [`[Symbol.match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match) 或 [`[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) 不同，它总会在执行开始时将 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 设置为 0，并在退出时恢复之前的值，因此通常不会产生副作用。这意味着即使 `lastIndex` 不为 0，它也总是返回字符串中的第一个匹配项，并且粘性正则表达式总是严格从字符串开头搜索。

```js
const re = /[abc]/g;
re.lastIndex = 2;
console.log("abc".search(re)); // 0

const re2 = /[bc]/y;
re2.lastIndex = 1;
console.log("abc".search(re2)); // -1
console.log("abc".match(re2)); // [ 'b' ]
```

## 示例

### 直接调用

这个方法的使用方式和 {{jsxref("String.prototype.search()")}} 相同，不同之处是 `this` 和参数顺序。

```js
var re = /-/g;
var str = "2016-01-02";
var result = re[Symbol.search](str);
console.log(result); // 4
```

### 在子类中使用 `[Symbol.search]()`

{jsxref("RegExp")}} 的子类可以覆写 `[Symbol.search]()`方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp("a+b");
var str = "ab a+b";
var result = str.search(re); // String.prototype.search 调用 re[Symbol.search]()。
console.log(result); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `RegExp.prototype[Symbol.search]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.search")}}
