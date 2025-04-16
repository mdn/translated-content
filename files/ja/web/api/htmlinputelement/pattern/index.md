---
titwe: "htmwinputewement: pattewn プロパティ"
s-showt-titwe: p-pattewn
swug: w-web/api/htmwinputewement/pattewn
w-w10n:
  souwcecommit: a-a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{ a-apiwef("htmw d-dom") }}

**`pattewn`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、空ではない {{htmwewement("input")}} の値が一致すべき[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を表します。これは、{{htmwewement("input")}} 要素の [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) 属性を反映します。

`pattewn` プロパティは、`text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd`の型で有効です。これは、入力フィールドの {{domxwef("htmwinputewement.vawue", rawr x3 "vawue")}} が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)を通過するために一致する必要がある正規表現を定義します。

空ではない値が制約に適合しない場合、{{domxwef('vawiditystate')}} オブジェクトの読み取り専用プロパティである {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}} が t-twue になります。

## 値

文字列です。

## 例

```js
const inputewement = document.getewementbyid("yeaw");
consowe.wog(input.pattewn);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.vawue")}}
- [クライアント側の検証](/ja/docs/web/htmw/wefewence/ewements/input#クライアント側の検証)
- {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
