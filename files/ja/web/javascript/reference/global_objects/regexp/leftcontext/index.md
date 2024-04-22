---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: 05218bd05ab482d49ca659473851a285bcb104b0
---

{{JSRef}} {{deprecated_header}}

> **メモ:** グローバルに最後の一致状態を公開する `RegExp` の静的プロパティは、すべて非推奨です。詳しくは[非推奨の RegExp 機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)を参照してください。

**`RegExp.leftContext`** は静的アクセサープロパティで、最近一致した文字列の前の部分文字列を返します。``RegExp["$`"]`` はこのプロパティの別名です。

## 解説

`leftContext` は {{jsxref("RegExp")}} の静的プロパティですので、作成した `RegExp` オブジェクトのプロパティとしてではなく、常に `RegExp.leftContext` または ``RegExp["$`"]`` として使用してください。

`leftContext` の値は `RegExp` の（ただし `RegExp` のサブクラスではない）インスタンスが照合に成功するたびに更新されます。照合が行われていない場合、または直近の正規表現にキャプチャグループが格納されていない場合、`leftContext` は空文字列になります。`leftContext` の設定アクセサーは `undefined` なので、このプロパティを直接変更することはできません。

ドットプロパティアクセサー (``RegExp.$` ``) で短縮エイリアスを使用することはできません。`` ` `` は識別子の一部として有効ではないので、{{jsxref("SyntaxError")}} が発生します。代わりに[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用してください。

``$` `` は {{jsxref("String.prototype.replace()")}} の置換文字列でも使用できますが、``RegExp["$`"]`` の古いプロパティとは無関係です。

## 例

### leftContext と $\` の使用

```js
const re = /world/g;
re.test("hello world!");
RegExp.leftContext; // "hello "
RegExp["$`"]; // "hello "
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp/n", "RegExp.$1, …, RegExp.$9")}}
