---
title: "WorkerNavigator: serviceWorker プロパティ"
slug: Web/API/WorkerNavigator/serviceWorker
l10n:
  sourceCommit: 46699d51e4b74fcfbd2c4a8635ec8a23a9c7e9c1
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

{{domxref("WorkerNavigator")}} インターフェイスの読み取り専用プロパティ **`serviceWorker`** は、[関連付けられた文書](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)の {{domxref("ServiceWorkerContainer")}} オブジェクトを返します。このオブジェクトは、{{domxref("ServiceWorker")}} の登録、除去、更新、通信を可能にします。

この機能は、プライベートモードでは利用できない可能性があります。

## 値

{{domxref("ServiceWorkerContainer")}} です。

## 例

このコードは、ワーカー内でブラウザーがサービスワーカーの使用に対応しているかをチェックします。

```js
if ("serviceWorker" in navigator) {
  // 対応しています！
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Service Worker API", "サービスワーカー API", "", "nocode")}}
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
