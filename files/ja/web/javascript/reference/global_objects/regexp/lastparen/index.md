---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
l10n:
  sourceCommit: d1edcbabf7431e9929c77e70b0c1bc741d887236
---

{{JSRef}} {{deprecated_header}}

> **メモ:** グローバルに最後の一致状態を公開する `RegExp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の RegExp 機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)を参照してください。

**`RegExp.lastParen`** は静的アクセサープロパティで、最後に一致した括弧で括られた部分文字列があれば返します。`RegExp["$+"]` はこのプロパティの別名です。

## 解説

`lastParen` は {{jsxref("RegExp")}} の静的プロパティですので、作成した `RegExp` オブジェクトのプロパティとしてではなく、常に `RegExp.lastParen` または `RegExp["$+"]` として使用してください。

`lastParen` の値は `RegExp` の（ただし `RegExp` のサブクラスではない）インスタンスが照合に成功するたびに更新されます。照合が行われていない場合、または直近の正規表現にキャプチャグループが格納されていない場合、`lastParen` は空文字列になります。`lastParen` の設定アクセサーは `undefined` なので、このプロパティを直接変更することはできません。

ドットプロパティアクセサー (`RegExp.$+`) で短縮エイリアスを使用することはできません。`+` は識別子の一部として有効ではないので、{{jsxref("SyntaxError")}} が発生します。代わりに[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用してください。

## 例

### lastParen と $+ の使用

```js
const re = /(hi)/g;
re.test("hi there!");
RegExp.lastParen; // "hi"
RegExp["$+"]; // "hi"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp/n", "RegExp.$1, …, RegExp.$9")}}
