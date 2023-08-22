---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: d1edcbabf7431e9929c77e70b0c1bc741d887236
---

{{JSRef}} {{deprecated_header}}

> **メモ:** グローバルに最後の一致状態を公開する `RegExp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の RegExp 機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)を参照してください。

**`RegExp.lastMatch`** は静的アクセサープロパティで、最後に一致した部分文字列を返します。`RegExp["$&"]` はこのプロパティの別名です。

## 解説

`lastMatch` は {{jsxref("RegExp")}} の静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。そのかわりに、常に、`RegExp.lastMatch` または `RegExp["$&"]` として使用してください。

`lastMatch` の値は `RegExp` インスタンス（`RegExp` のサブクラスではない）が一致するたびに更新されます。照合がない場合、`lastMatch` は空文字列になります。`lastMatch` の設定アクセサーは `undefined` なので、このプロパティを直接変更することはできません。

ドットプロパティアクセサー (`RegExp.$&`) で短縮形式の別名を使用することはできません。その場合、パーサーは `&` という表現を期待して {{jsxref("SyntaxError")}} が発生します。[プロパティへのアクセスにはブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用してください。

`$&` を {{jsxref("String.prototype.replace()")}} の置換文字列内で使用することもできますが、古い `RegExp["$&"]` プロパティには関係しません。

## 例

### lastMatch と $& の使用

```js
const re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["$&"]; // "hi"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp/n", "RegExp.$1, …, RegExp.$9")}}
