---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
---

{{JSRef}}

**`Symbol.replace`** 这个属性指定了当一个字符串替换所匹配字符串时所调用的方法。{{jsxref("String.prototype.replace()")}} 方法会调用此方法。

更多信息，详见 [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) 和 {{jsxref("String.prototype.replace()")}}。

{{InteractiveExample("JavaScript Demo: Symbol.replace")}}

```js interactive-example
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// Expected output: "s/foo/bar/g"
```

{{js_property_attributes(0,0,0)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
