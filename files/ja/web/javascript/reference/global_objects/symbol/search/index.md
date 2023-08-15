---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
---

{{JSRef}}

**`Symbol.search`** はウェルノウンシンボルで、正規表現に一致する文字列内の位置を返すメソッドを指定します。この関数は {{jsxref("String.prototype.search()")}} メソッドによって呼び出されます。

詳しくは、 {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}} と {{jsxref("String.prototype.search()")}} を参照してください。

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}{{js_property_attributes(0,0,0)}}

## 例

### 独自の文字列検索

```js
class caseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log("foobar".search(new caseInsensitiveSearch("BaR")));
// expected output: 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.search")}}

## 関連情報

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}
