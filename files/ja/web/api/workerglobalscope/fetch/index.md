---
title: "WorkerGlobalScope: fetch() メソッド"
slug: Web/API/WorkerGlobalScope/fetch
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} インターフェイスの **`fetch()`** メソッドは、ネットワークからリソースをフェッチする処理を開始し、レスポンスが利用可能になると解決するプロミスを返します。

このプロミスは、リクエストに対するレスポンスを表す {{domxref("Response")}} オブジェクトで解決します。

`fetch()` のプロミスは、リクエストを送る URL の書式が不正だったり、ネットワークエラーが発生したりなど、リクエストに失敗したときのみ拒否されます。`fetch()` のプロミスは、サーバーがエラーを表す HTTP ステータスコード (`404` や `504` など) で応答した場合は拒否 _されません_。かわりに、`then()` のハンドラーは {{domxref("Response.ok")}} や {{domxref("Response.status")}} プロパティをチェックしなければなりません。

`fetch()` メソッドは、取得しようとしているリソースのディレクティブではなく、[Content Security Policy](/ja/docs/Web/HTTP/Headers/Content-Security-Policy) の `connect-src` ディレクティブにより制御されます。

> **メモ:** `fetch()` メソッドの引数は、{{domxref("Request.Request","Request()")}} コンストラクターの引数と同一です。

## 構文

```js-nolint
fetch(resource)
fetch(resource, options)
```

### 引数

- `resource`

  - : フェッチしたいリソースを定義します。以下を指定できます。

    - フェッチしたいリソースの URL を表す文字列または{{Glossary("stringifier", "文字列化子")}}を持つその他のオブジェクト ({{domxref("URL")}} オブジェクトなど)。この URL には、ベース URL (ウィンドウコンテキストでは文書の {{domxref("Node.baseURI", "baseURI")}}、ワーカーコンテキストでは {{domxref("WorkerGlobalScope.location")}}) からの相対 URL も使用できます。
    - {{domxref("Request")}} オブジェクト

- `options` {{optional_inline}}

  - : リクエストに適用したいカスタム設定をすべて格納した {{domxref("RequestInit")}} オブジェクトです。

### 返値

{{domxref("Response")}} オブジェクトで解決する {{jsxref("Promise")}} です。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : リクエストは {{domxref("AbortController")}} の {{domxref("AbortController.abort", "abort()")}} メソッドの呼び出しにより中止されました。
- `NotAllowedError` {{domxref("DOMException")}}
  - : [Topics API](/ja/docs/Web/API/Topics_API) の使用が {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [機能ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)により明示的に禁止されているとき、`fetch()` によるリクエストが `browsingTopics: true` を指定して行われると投げられます。
- {{jsxref("TypeError")}}
  - : フェッチ操作を行えなかったときのエラーです。このエラーが起こりうる理由の一覧は、{{domxref("Window.fetch()")}} の例外を参照してください。

## 例

例は {{domxref("Window.fetch", "fetch()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.fetch()")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
