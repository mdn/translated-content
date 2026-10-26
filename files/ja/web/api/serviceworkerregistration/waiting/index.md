---
title: "ServiceWorkerRegistration: waiting プロパティ"
short-title: waiting
slug: Web/API/ServiceWorkerRegistration/waiting
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`waiting`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、サービスワーカーのうち {{domxref("ServiceWorker.state")}} がインストール済み (`installed`) のものを返します。 このプロパティは、最初は `null` に設定されています。

## 値

{{domxref("ServiceWorker")}} オブジェクト（現在インストール済み (`installed`) の状態の場合）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) <sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
