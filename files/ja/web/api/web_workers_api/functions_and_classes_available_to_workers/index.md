---
title: ウェブワーカーが使用できる関数やクラス
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
l10n:
  sourceCommit: 407e167070e81eec6ca2231326242e3e354b9cd5
---

{{DefaultAPISidebar("Web Workers API")}}

標準的な [JavaScript](/ja/docs/Web/JavaScript) の関数群（{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("Object")}}、{{jsxref("JSON")}} など）に加えて、ワーカーで利用できる様々な関数（や API）があります。この記事ではそれらの機能の一覧を提供します。

## ワーカーのコンテキストと関数

ワーカーでは、次の機能が利用できます。

- {{domxref("WorkerGlobalScope.atob()")}}
- {{domxref("WorkerGlobalScope.btoa()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.createImageBitmap()")}}
- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
- {{domxref("WorkerGlobalScope.fetch()")}}
- {{domxref("WorkerGlobalScope.queueMicrotask()")}}
- {{domxref("WorkerGlobalScope.reportError()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("WorkerGlobalScope.structuredClone()")}}
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}} （専用ワーカーのみ）
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}} （専用ワーカーのみ）
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}} （専用ワーカーのみ）

以下の関数は、ワーカーで**のみ**使用することができます。

- {{domxref("WorkerGlobalScope.importScripts()")}}

## ワーカーで使用できる Web API

> [!NOTE]
> 掲載されている API が特定のバージョンのプラットフォームで対応している場合、通常、ウェブワーカーでも利用可能であると想定することができます。また、サイト <https://worker-playground.glitch.me/> を使用して、特定のオブジェクト/関数の対応を検査することもできます。

以下の Web API はワーカーで利用することができます。

- {{domxref("Background Fetch API", "バックグラウンドフェッチ API", "", "nocode")}}
- {{domxref("Background Synchronization API", "バックグラウンド同期 API", "", "nocode")}}
- {{domxref("Barcode Detection API", "バーコード検出 API", "", "nocode")}}
- {{domxref("Broadcast Channel API", "ブロードキャストチャンネル API", "", "nocode")}}
- {{domxref("Canvas API", "キャンバス API", "", "nocode")}}
- {{domxref("Channel Messaging API", "チャンネルメッセージング API", "", "nocode")}}
- {{domxref("Compression Streams API", "圧縮ストリーム API", "", "nocode")}}
- {{domxref("Compute Pressure API", "", "", "nocode")}}
- {{domxref("Console API", "コンソール API", "", "nocode")}}
- {{domxref("Content Index API", "", "", "nocode")}}
- {{domxref("Cookie Store API", "", "", "nocode")}} （サービスワーカーのみ）
- {{domxref("CSS Font Loading API", "", "", "nocode")}}
- {{domxref("Encoding API", "エンコーディング API", "", "nocode")}}
- {{domxref("Fetch API", "フェッチ API", "", "nocode")}}
- {{domxref("File API", "ファイル API", "", "nocode")}}
- {{domxref("File System API", "ファイルシステム API", "", "nocode")}}
- {{domxref("Idle Detection API", "", "", "nocode")}}
- {{domxref("IndexedDB API", "", "", "nocode")}}
- {{domxref("Media Capabilities API", "", "", "nocode")}}
- {{domxref("Media Source Extensions API", "", "", "nocode")}} （専用ワーカーのみ）
- {{domxref("Network Information API", "", "", "nocode")}}
- {{domxref("Notifications API", "", "", "nocode")}}
- {{domxref("Payment Handler API", "", "", "nocode")}}
- {{domxref("Performance API", "", "", "nocode")}}
- {{domxref("Permissions API", "", "", "nocode")}}
- {{domxref("Prioritized Task Scheduling API", "", "", "nocode")}}
- {{domxref("Push API", "", "", "nocode")}}
- {{domxref("Reporting API", "", "", "nocode")}}
- {{domxref("Server-Sent Events", "", "", "nocode")}}
- {{domxref("Service Worker API", "", "", "nocode")}}
- {{domxref("Streams API", "", "", "nocode")}}
- {{domxref("Trusted Types API", "", "", "nocode")}}
- {{domxref("URL API", "", "", "nocode")}}
- {{domxref("URL Pattern API", "", "", "nocode")}}
- {{domxref("User-Agent Client Hints API", "", "", "nocode")}}
- {{domxref("Web Crypto API", "", "", "nocode")}}
- {{domxref("Web Locks API", "", "", "nocode")}}
- {{domxref("Web Serial API", "", "", "nocode")}}
- {{domxref("Web Periodic Background Synchronization API", "", "", "nocode")}}
- {{domxref("WebCodecs API", "", "", "nocode")}}
- {{domxref("WebGL API", "", "", "nocode")}}
- {{domxref("WebGPU API", "", "", "nocode")}}
- {{domxref("WebHID API", "", "", "nocode")}} （専用ワーカーとサービスワーカーのみ）
- {{domxref("WebUSB API", "", "", "nocode")}}
- {{domxref("WebSockets API", "", "", "nocode")}}
- {{domxref("XMLHttpRequest API", "", "", "nocode")}}

ワーカーは他のワーカーを起動することもできるため、次の各 API も利用することができます。

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("WorkerLocation")}}
- {{domxref("WorkerNavigator")}}

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
