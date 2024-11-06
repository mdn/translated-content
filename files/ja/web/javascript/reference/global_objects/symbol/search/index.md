---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`Symbol.search`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)である `Symbol.search` を表します。{{jsxref("String.prototype.search()")}} メソッドは第一引数から、文字列内で現在のオブジェクトに一致する場所を返すメソッドを、このシンボルで探します。

詳しくは、[`RegExp.prototype[Symbol.search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) と {{jsxref("String.prototype.search()")}} を参照してください。

{{EmbedInteractiveExample("pages/js/symbol-search.html")}}

## 値

ウェルノウンシンボル `Symbol.search` です。

{{js_property_attributes(0, 0, 0)}}

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

console.log("foobar".search(new caseInsensitiveSearch("BaR"))); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.search` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.search()")}}
- [`RegExp.prototype[Symbol.search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
