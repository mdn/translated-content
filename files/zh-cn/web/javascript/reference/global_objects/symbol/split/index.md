---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

**`Symbol.split`** 指向 一个正则表达式的索引处分割字符串的方法。这个方法通过 {{jsxref("String.prototype.split()")}} 调用。

详情请参阅{{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} 和{{jsxref("String.prototype.split()")}}.

{{EmbedInteractiveExample("pages/js/symbol-split.html")}}{{js_property_attributes(0,0,0)}}

## 示例

\[Symbol.split] 指向‘aba’.split(/a/)

```js
/a/[Symbol.split]("aba", 3);
```

"dayinlove".split(exp) 调用 \[Symbol.split]\(str) 处理，并把实参"dayinlove"传给形参 str

```js
var exp = {
  pat: "in",
  [Symbol.split](str) {
    return str.split(this.pat);
  },
};

"dayinlove".split(exp);
//["day", "love"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}
