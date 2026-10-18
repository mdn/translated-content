---
title: "ServiceWorkerRegistration: cookies プロパティ"
short-title: cookies
slug: Web/API/ServiceWorkerRegistration/cookies
l10n:
  sourceCommit: 828ae6eee278f30c3fa3677a74915d28d9e338b2
---

{{APIRef("Cookie Store API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_service")}}

**`cookies`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、{{domxref("CookieStoreManager")}} インターフェイスの参照を返します。これにｙろい、ウェhブアプリが[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)におけるクッキー変更イベントを監視したりやめたりすることができます。これは[クッキーストアー API](/ja/docs/Web/API/Cookie_Store_API) のエントリーポイントです。

## 値

{{domxref("CookieStoreManager")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
