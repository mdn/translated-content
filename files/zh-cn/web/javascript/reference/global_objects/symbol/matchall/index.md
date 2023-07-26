---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
---

{{JSRef}}

**`Symbol.matchAll`** 内置通用（well-known）符号指定方法返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 {{jsxref("String.prototype.matchAll()")}} 方法调用。

详细信息请参阅 {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} 和 {{jsxref("String.prototype.matchAll()")}}。

{{EmbedInteractiveExample("pages/js/symbol-matchall.html")}}

## 值

内置通用符号 `@@matchAll`。

{{js_property_attributes(0, 0, 0)}}

## 示例

### 使用 Symbol.matchAll

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Symbol.matchAll` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
