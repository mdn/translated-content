---
title: Symbol.matchAll
short-title: matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.matchAll`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.matchAll` を表します。{{jsxref("String.prototype.matchAll()")}} メソッドは最初の引数に対して、文字列に対する現在のオブジェクトの照合を行うイテレーターを返すメソッドを、このシンボルで探します。

詳しくは、[`RegExp.prototype[Symbol.matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) および {{jsxref("String.prototype.matchAll()")}} を参照してください。

{{InteractiveExample("JavaScript デモ: Symbol.matchAll")}}

```js interactive-example
const re = /\d+/g;
const str = "2016-01-02|2019-03-07";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// 予想される結果: Array ["2016", "01", "02", "2019", "03", "07"]
```

## 値

ウェルノウンシンボル `Symbol.matchAll` です。

{{js_property_attributes(0, 0, 0)}}

## 例

### Symbol.matchAll の使用

```js
const str = "2016-01-02|2019-03-07";

const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/\d+/g)) yield n[0];
  },
};

console.log(Array.from(str.matchAll(numbers)));
// ["2016", "01", "02", "2019", "03", "07"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.matchAll` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- [es-shims による `Symbol.matchAll` のポリフィル](https://www.npmjs.com/package/string.prototype.matchall)
- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
