---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
---

{{JSRef}}

読み取り専用 **`description`** プロパティは、 {{JSxRef("Symbol")}} オブジェクトのオプションの説明を返す文字列です。

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## 解説

{{JSxRef("Symbol")}} オブジェクトは、オプションの説明を使用して作成できます。これはデバッグには使用できますが、シンボル自体にはアクセスできません。 `Symbol.prototype.description` プロパティを使用して、その説明を読み取ることができます。囲んでいる "`Symbol()`" 文字列が含まれていないため、 `Symbol.prototype.toString()` とは異なります。例を参照してください。

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

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.description")}}

## 関連項目

- {{JSxRef("Symbol.prototype.toString()")}}
- Polyfill: <https://npmjs.com/symbol.prototype.description>
