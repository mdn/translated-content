---
title: ServiceWorkerRegistration.waiting
slug: Web/API/ServiceWorkerRegistration/waiting
tags:
  - API
  - プロパティ
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
  - waiting
browser-compat: api.ServiceWorkerRegistration.waiting
translation_of: Web/API/ServiceWorkerRegistration/waiting
---
{{APIRef("Service Workers API")}}

**`waiting`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、サービスワーカーのうち {{domxref("ServiceWorker.state")}} がインストール済み (`installed`) のものを返します。 このプロパティは、最初は `null` に設定されています。

> **Note:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

## 値

{{domxref("ServiceWorker")}} オブジェクト（現在インストール済み (`installed`) の状態の場合）。

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
