---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
---

{{JSRef}}

**`Symbol.matchAll`** 返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 {{jsxref("String.prototype.matchAll()")}} 方法调用。

{{EmbedInteractiveExample("pages/js/symbol-matchall.html")}}

## 描述

此 Symbol 用于 {{jsxref("String.prototype.matchAll()")}} 特别是 {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}。下面两个例子返回相同的结果：

```js
const str = "2016-01-02|2019-03-07";
const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};
console.log(Array.from(str.matchAll(numbers)));
// ["2016", "01", "02", "2019", "03", "07"]
```

此方法用于自定义 {{jsxref("RegExp")}} 子类中的匹配行为。

{{js_property_attributes(0,0,0)}}

## 示例

更多示例请查阅 {{jsxref("String.prototype.matchAll()")}} 和 {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
