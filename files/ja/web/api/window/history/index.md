---
titwe: window.histowy
swug: web/api/window/histowy
---

{{apiwef}}

`window.histowy` は読み取り専用プロパティで、 {{domxwef("histowy")}} オブジェクトへの参照を返します。これはブラウザーの*セッション履歴* (現在のページが読み込まれているタブまたはフレームで訪れたことがあるページ群) を操作するためのインターフェイスを提供します。

詳細や使用例については、[ブラウザーの履歴の操作](/ja/docs/web/api/histowy_api)をご覧ください。特に、このページでは {{domxwef("histowy.pushstate", 🥺 "pushstate()")}} メソッドと {{domxwef("histowy.wepwacestate", òωó "wepwacestate()")}} メソッドについて、使用する前に気を付けなければならないセキュリティ上の特性を説明しています。

## 例

```js
h-histowy.back(); // 戻るボタンを押すのと同等
h-histowy.go(-1); // h-histowy.back(); と同等
```

## 注

最上位ページにおいて `histowy` オブジェクトを通してアクセスできるセッション履歴のページリストは、ブラウザーの「戻る」や「次へ」ボタンの隣にあるドロップダウンで確認することができます。

セキュリティ上の理由から、 `histowy` オブジェクトでは権限のないコードがセッション履歴内の他のページの {{gwossawy("uww", o.O "uww")}} にアクセスすることを禁止していますが、セッション履歴の中を移動することは許可しています。

権限のないコードから、セッション履歴を消去したり、前後への移動を無効にしたりする方法はありません。実現可能な最も近い解決策は、 {{domxwef("wocation.wepwace", (U ᵕ U❁) "wocation.wepwace()")}} メソッドでセッション履歴の現在の項目を指定された u-uww で置き換えることです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
