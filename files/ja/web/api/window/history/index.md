---
title: Window.history
slug: Web/API/Window/history
---

{{APIRef}}

`Window.history` は読み取り専用プロパティで、 {{domxref("History")}} オブジェクトへの参照を返します。これはブラウザーの*セッション履歴* (現在のページが読み込まれているタブまたはフレームで訪れたことがあるページ群) を操作するためのインターフェイスを提供します。

詳細や使用例については、[ブラウザーの履歴の操作](/ja/docs/Web/API/History_API)をご覧ください。特に、このページでは {{domxref("History.pushState", "pushState()")}} メソッドと {{domxref("History.replaceState", "replaceState()")}} メソッドについて、使用する前に気を付けなければならないセキュリティ上の特性を説明しています。

## 例

```js
history.back(); // 戻るボタンを押すのと同等
history.go(-1); // history.back(); と同等
```

## 注

最上位ページにおいて `History` オブジェクトを通してアクセスできるセッション履歴のページリストは、ブラウザーの「戻る」や「次へ」ボタンの隣にあるドロップダウンで確認することができます。

セキュリティ上の理由から、 `History` オブジェクトでは権限のないコードがセッション履歴内の他のページの {{glossary("URL", "URL")}} にアクセスすることを禁止していますが、セッション履歴の中を移動することは許可しています。

権限のないコードから、セッション履歴を消去したり、前後への移動を無効にしたりする方法はありません。実現可能な最も近い解決策は、 {{domxref("Location.replace", "location.replace()")}} メソッドでセッション履歴の現在の項目を指定された URL で置き換えることです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
