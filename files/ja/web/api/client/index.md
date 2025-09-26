---
title: Client
slug: Web/API/Client
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("Service Workers API")}}

**`Client`** インターフェイスは、{{domxref("Worker")}} や {{domxref("SharedWorker")}} などの実行可能なコンテキストを表します。{{domxref("Window")}} クライアントは、より具体的な {{domxref("WindowClient")}} によって表されます。`Client`/`WindowClient` オブジェクトは {{domxref("Clients.matchAll","Clients.matchAll()")}} や {{domxref("Clients.get","Clients.get()")}} などのメソッドから取得できます。

## メソッド

- {{domxref("Client.postMessage()")}}
  - : メッセージをクライアントに送信します。

## プロパティ

- {{domxref("Client.id")}} {{ReadOnlyInline}}
  - : 文字列としてのクライアントの汎用一意識別子。
- {{domxref("Client.type")}} {{ReadOnlyInline}}
  - : 文字列としてのクライアントの種類。`"window"`、`"worker"`、`"sharedworker"` のいずれかです。
- {{domxref("Client.url")}} {{ReadOnlyInline}}
  - : 文字列としてのクライアントの URL。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
