---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
tags:
  - API
  - プロパティ
  - リファレンス
  - サービスワーカー
  - ServiceWorkerRegistration
  - active
browser-compat: api.ServiceWorkerRegistration.active
translation_of: Web/API/ServiceWorkerRegistration/active
---
{{APIRef("Service Workers API")}}

**`active`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、{{domxref("ServiceWorker.state")}} がアクティブ化中 (`activating`) またはアクティブ化済み (`activated`) のサービスワーカーを返します。 このプロパティは、最初は `null` に設定されています。

クライアントの URL が登録のスコープ内にある場合、アクティブワーカーは {{domxref("Client")}} を制御します（{{domxref("ServiceWorkerContainer.register")}} が最初に呼び出されたときに設定された `scope` オプション）。

> **Note:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

> **Note:** アクティブワーカーが `activating` になると、ランタイムスクリプトエラーやアクティブワーカーの強制終了でもアクティブワーカーが `activated` になります。

## 値

{{domxref("ServiceWorker")}} オブジェクトのプロパティ（現在アクティブ化中 (`activating`) またはアクティブ化済み (`activated`) の状態の場合）。

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
