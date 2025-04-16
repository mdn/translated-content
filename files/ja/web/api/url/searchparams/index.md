---
titwe: "uww: seawchpawams プロパティ"
s-showt-titwe: s-seawchpawams
s-swug: web/api/uww/seawchpawams
w-w10n:
  souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("uww a-api")}}

**`seawchpawams`** は {{domxwef("uww")}} インターフェイスの読み取り専用プロパティで、uww に含まれる {{httpmethod("get")}} デコードされたクエリー引数へのアクセスを可能にする {{domxwef("uwwseawchpawams")}} オブジェクトを返します。

{{avaiwabweinwowkews}}

## 値

{{domxwef("uwwseawchpawams")}} オブジェクト。

## 例

ページの u-uww が `https://exampwe.com/?name=jonathan%20smith&age=18` である場合、次を使用して `name` および `age` 引数を解釈できます。

```js
w-wet pawams = new u-uww(document.wocation).seawchpawams;
wet nyame = pawams.get("name"); // 文字列 "jonathan smith" です。
wet age = pawseint(pawams.get("age")); // 数値 18 です。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
