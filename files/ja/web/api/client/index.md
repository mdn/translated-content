---
title: Client
slug: Web/API/Client
---

{{APIRef("Service Workers API")}}

**`Client`** インターフェイスは、{{domxref("Worker")}} や {{domxref("SharedWorker")}} などの実行可能なコンテキストを表します。 {{domxref("Window")}} クライアントは、より具体的な {{domxref("WindowClient")}} によって表されます。 {{domxref("Clients.matchAll","Clients.matchAll()")}} や {{domxref("Clients.get","Clients.get()")}} などのメソッドから `Client`/`WindowClient` オブジェクトを取得できます。

## メソッド

- {{domxref("Client.postMessage()")}}
  - : メッセージをクライアントに送信します。

## プロパティ

- {{domxref("Client.id")}} {{readonlyInline}}
  - : 文字列としてのクライアントの汎用一意識別子。
- {{domxref("Client.type")}} {{readonlyInline}}
  - : 文字列としてのクライアントの種類。 `"window"`、`"worker"`、`"sharedworker"` のいずれかです。
- {{domxref("Client.url")}} {{readonlyInline}}
  - : 文字列としてのクライアントの URL。

## 仕様

| 仕様                                                                 | 状態                                 | コメント |
| -------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#client', 'Client')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Client")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Promises](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
