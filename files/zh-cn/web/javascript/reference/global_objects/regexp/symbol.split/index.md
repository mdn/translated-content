---
title: RegExp.prototype[Symbol.split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
---

{{JSRef}}

**`[Symbol.split]()`** 方法切割 {{jsxref("String")}} 对象为一个其子字符串的数组。

## 语法

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### 参数

- `str`
  - : 切割操作的目标字符串
- `limit` {{optional_inline}}
  - : 可选。一个为了限制切割数量的特定整数。`[Symbol.split]()` 防范仍会切割每个匹配正则模式的匹配项，直到切割数量达到该限制数，除非提前切割完字符串。

### 返回值

包含其子字符串的{{jsxref("Array")}} 。

## 描述

如果切割器是一个{{jsxref("RegExp")}}对象，这个方法就将在 {{jsxref("String.prototype.split()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

这个方法为自定义 `RegExp` 子类中的匹配行为而存在。

如果 str 参数不是一个{{jsxref("RegExp")}} 对象，{{jsxref("String.prototype.split()")}} 就不会调用该方法，也不会创建一个 {{jsxref("RegExp")}} 对象。示例

### 直接调用

这个方法的使用方式和 {{jsxref("String.prototype.split()")}} 相同，不同之处是 `this` 和参数顺序。

```js
var re = /-/g;
var str = "2016-01-02";
var result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### 在子类中使用 `[Symbol.split]()`

{{jsxref("RegExp")}} 的子类可以覆写 `[Symbol.split]()` 方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    var result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => "(" + x + ")");
  }
}

var re = new MyRegExp("-");
var str = "2016-01-02";
var result = str.split(re); // String.prototype.split 调用 re[Symbol.split]()。
console.log(result); // ["(2016)", "(01)", "(02)"]
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
