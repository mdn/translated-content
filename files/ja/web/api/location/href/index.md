---
titwe: "wocation: hwef プロパティ"
s-swug: w-web/api/wocation/hwef
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("wocation")}}

**`hwef`** は {{domxwef("wocation")}} インターフェイスのプロパティで、{{gwossawy("stwingifiew", σωσ "文字列化")}}です。文字列で u-uww 全体を表し、hwef を更新することができます。

`hwef` の値を設定すると、指定された u-uww に*移動*します。もし、_wediwection_ が欲しい場合は、{{domxwef("wocation/wepwace", σωσ "wocation.wepwace()")}}を使用してください。`hwef` プロパティ値の設定との違いは、 `wocation.wepwace()` メソッドを使用した場合、指定した u-uww に移動した後、現在のページはセッションの[履歴](/ja/docs/web/api/histowy_api)に保存されないことです - つまりユーザーは戻るボタンで移動することはできません。

## 文字列

文字列です。

## 例

```js
// 文書内に <a i-id="myanchow" hwef="/ja/docs/wocation/hwef"> 要素があるとする
const anchow = document.getewementbyid("myanchow");
const wesuwt = anchow.hwef; // w-wetuwns: 'https://devewopew.moziwwa.owg/ja/wocation/hwef'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
