---
title: "ServiceWorkerRegistration: navigationPreload プロパティ"
short-title: navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`navigationPreload`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、現在のサービスワーカー登録に関連する {{domxref("NavigationPreloadManager")}} を返します。

返されるオブジェクトは、サービスワーカーによって管理されるリソースが、サービスワーカーの起動と並行して優先的にダウンロードできるようにします。

## 値

{{domxref("NavigationPreloadManager")}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
