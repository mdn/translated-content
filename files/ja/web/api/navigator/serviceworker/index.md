---
title: "Navigator: serviceWorker プロパティ"
short-title: serviceWorker
slug: Web/API/Navigator/serviceWorker
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Service Workers API")}}

**`Navigator.serviceWorker`** は読み取り専用のプロパティで、 {{domxref("ServiceWorkerContainer")}} オブジェクトを返します。これは[関連付けられた文書](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)で {{domxref("ServiceWorker")}} の登録、削除、更新、通信へのアクセスを提供します。

この機能はプライベートモードでは利用できない可能性があります。

## 値

{{domxref("ServiceWorkerContainer")}} です。

## 例

このコードは、ブラウザーがサービスワーカーに対応しているかをチェックします。

```js
if ("serviceWorker" in navigator) {
  // Supported!
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
