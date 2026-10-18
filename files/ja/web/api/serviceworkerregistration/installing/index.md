---
title: "ServiceWorkerRegistration: installing プロパティ"
short-title: installing
slug: Web/API/ServiceWorkerRegistration/installing
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`installing`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、{{domxref("ServiceWorker.state")}} がインストール中 (`installing`) のサービスワーカーを返します。 このプロパティは、最初は `null` に設定されています。

## 値

{{domxref("ServiceWorker")}} オブジェクト（現在インストール中 (`installing`) の状態の場合）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) <sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
