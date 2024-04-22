---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JSRef}}

**`flags`** は {{jsxref("RegExp")}} インスタンスのプロパティで、現在の正規表現オブジェクトの[フラグ](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索)から成る文字列を返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}

## 解説

`RegExp.prototype.flags` には値として文字列があります。`flags` プロパティのフラグはアルファベット順で並べ替えられます（左から右に、例えば `"dgimsuvy"`）。 実際には、他のフラグアクセサー（[`hasIndices`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)、[`global`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)など）を 1 つずつ呼び出し、結果を連結します。

すべての組み込み関数は、個々のフラグアクセサーを読み込む代わりに `flags` プロパティを読み込みます。

`flags` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### flags の使用

```js-nolint
/foo/ig.flags; // "gi"
/bar/myu.flags; // "muy"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.prototype.flags` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("RegExp.prototype.source")}}
