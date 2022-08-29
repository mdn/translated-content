---
title: ServiceWorkerRegistration.installing
slug: Web/API/ServiceWorkerRegistration/installing
tags:
  - API
  - Installing
  - プロパティ
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
browser-compat: api.ServiceWorkerRegistration.installing
translation_of: Web/API/ServiceWorkerRegistration/installing
---
{{APIRef("Service Workers API")}}

**`installing`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、{{domxref("ServiceWorker.state")}} がインストール中 (`installing`) のサービスワーカーを返します。 このプロパティは、最初は `null` に設定されています。

> **Note:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

## 値

{{domxref("ServiceWorker")}} オブジェクト（現在インストール中 (`installing`) の状態の場合）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
