---
title: Symbol.search
short-title: search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.search`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.search` を表します。{{jsxref("String.prototype.search()")}} メソッドは第一引数から、文字列内で現在のオブジェクトに一致する場所を返すメソッドを、このシンボルで探します。

詳しくは、[`RegExp.prototype[Symbol.search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) と {{jsxref("String.prototype.search()")}} を参照してください。

{{InteractiveExample("JavaScript デモ: Symbol.search")}}

```js interactive-example
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log("foobar".search(new Search1("bar")));
// 予想される結果: 3
```

## 値

ウェルノウンシンボル `Symbol.search` です。

{{js_property_attributes(0, 0, 0)}}

## 例

### 独自の文字列検索

```js
class CaseInsensitiveSearch {
  constructor(value) {
    this.value = value.toLowerCase();
  }
  [Symbol.search](string) {
    return string.toLowerCase().indexOf(this.value);
  }
}

console.log("foobar".search(new CaseInsensitiveSearch("BaR"))); // 3
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
