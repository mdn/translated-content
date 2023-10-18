---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

**`Symbol.split`** ウェルノウンシンボルは、正規表現に一致する位置で文字列を分割するメソッドを指定します。この関数は {{jsxref("String.prototype.split()")}} メソッドによって呼び出されます。

詳しくは、 {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} と {{jsxref("String.prototype.split()")}} を参照してください。

{{EmbedInteractiveExample("pages/js/symbol-split.html")}}{{js_property_attributes(0,0,0)}}

## 例

### 独自の逆方向の分割

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// expected output: [ "dust", "the", "bites", "one", "Another" ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.split")}}

## 関連情報

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}
