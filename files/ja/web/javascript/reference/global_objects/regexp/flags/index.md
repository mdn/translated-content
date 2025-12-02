---
title: RegExp.prototype.flags
short-title: flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`flags`** は {{jsxref("RegExp")}} インスタンスのプロパティで、現在の正規表現オブジェクトの[フラグ](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索)から成る文字列を返します。

{{InteractiveExample("JavaScript デモ: RegExp.prototype.flags")}}

```js interactive-example
// 正規表現フラグをアルファベット順に出力

console.log(/foo/gi.flags);
// 予想される結果: "gi"

console.log(/^bar/muy.flags);
// 予想される結果: "muy"
```

## 解説

`RegExp.prototype.flags` には値として文字列があります。`flags` プロパティのフラグはアルファベット順で並べ替えられます（左から右に、例えば `"dgimsuvy"`）。 実際には、他のフラグアクセサー（[`hasIndices`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)、[`global`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)など）を 1 つずつ呼び出し、結果を連結します。

すべての組み込み関数は、個々のフラグアクセサーを読み込む代わりに `flags` プロパティを読み込みます。

`flags` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### flags の使用

```js-nolint
/foo/ig.flags; // "gi"
/^bar/myu.flags; // "muy"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.prototype.flags` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims による `RegExp.prototype.flags` のポリフィル](https://www.npmjs.com/package/regexp.prototype.flags)
- [フラグを用いた高度な検索](/ja/docs/Web/JavaScript/Guide/Regular_expressions#フラグを用いた高度な検索)（正規表現ガイド）
- {{jsxref("RegExp.prototype.source")}}
