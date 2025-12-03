---
title: Symbol.prototype.description
short-title: description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`description`** は {{JSxRef("Symbol")}} 値のアクセサープロパティで、このシンボルの説明を格納した文字列を返し、シンボルに説明がない場合は `undefined` を返します。

{{InteractiveExample("JavaScript デモ: Symbol.prototype.description")}}

```js interactive-example
console.log(Symbol("desc").description);
// 予想される結果: "desc"

console.log(Symbol.iterator.description);
// 予想される結果: "Symbol.iterator"

console.log(Symbol.for("foo").description);
// 予想される結果: "foo"

console.log(`${Symbol("foo").description}bar`);
// 予想される結果: "foobar"
```

## 解説

{{jsxref("Symbol")}} オブジェクトは、オプションの説明を使用して作成できます。これはデバッグには使用できますが、シンボル自体にはアクセスできません。`Symbol.prototype.description` プロパティを使用して、その説明を読み取ることができます。囲んでいる `"Symbol()"` 文字列が含まれていないため、 `Symbol.prototype.toString()` とは異なります。例を参照してください。

## 例

### description を使用する

```js
Symbol("desc").toString(); // "Symbol(desc)"
Symbol("desc").description; // "desc"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
Symbol.for("foo").description; // "foo"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.prototype.description` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- [es-shims による `Symbol.prototype.description` のポリフィル](https://www.npmjs.com/package/symbol.prototype.description)
- {{jsxref("Symbol.prototype.toString()")}}
