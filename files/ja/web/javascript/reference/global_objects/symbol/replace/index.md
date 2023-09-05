---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
---

{{JSRef}}

**`Symbol.replace`** ウェルノウンシンボルは、文字列の一致した部分を置き換えるメソッドを指定します。この関数は {{jsxref("String.prototype.replace()")}} メソッドから呼び出されます。

詳しくは、 {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}} と {{jsxref("String.prototype.replace()")}} を参照してください。

{{EmbedInteractiveExample("pages/js/symbol-replace.html")}}{{js_property_attributes(0,0,0)}}

## 例

### Symbol.replace の使用

```js
class CustomReplacer {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return string.replace(this.value, "#!@?");
  }
}

console.log("football".replace(new CustomReplacer("foo")));
// expected output: "#!@?tball"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.replace")}}

## 関連情報

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}}
