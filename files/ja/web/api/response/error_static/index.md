---
title: "Response: error() 静的メソッド"
short-title: error()
slug: Web/API/Response/error_static
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

**`error()`** は {{domxref("Response")}} インターフェイスのメソッドで、ネットワークエラーに関連付けられた新しい `Response` オブジェクトを返します。

これは主にサービスワーカーを書くときに便利です。サービスワーカーが {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} イベントハンドラーからレスポンスを送信することで、メインアプリコードの {{domxref("Window/fetch", "fetch()")}} 呼び出しにおけるプロミスを拒否させることができます。

エラーレスポンスでは、{{domxref("Response.type","type")}} が `error` に設定されています。

## 構文

```js-nolint
Response.error()
```

### 引数

なし。

### 返値

{{domxref("Response")}} オブジェクト。

## 例

### サービスワーカーからネットワークエラーを返す

あるウェブアプリにサービスワーカーがあり、そのサービスワーカーには次のような `fetch` イベントハンドラーが格納されているとします。

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/salamander.jpg") {
    event.respondWith(Response.error());
  }
});
```

このサービスワーカーを使うと、アプリからのフェッチリクエストはすべてサービスワーカーを通過してネットワークに渡ります。これは、次のメインスレッドのコードでエラーが発生し、`catch` ハンドラーが実行されるということです。

```js
// main.js

const image = document.querySelector("#image");

try {
  const response = await fetch("salamander.jpg");
  const blob = await response.blob();
  const objectURL = URL.createObjectURL(blob);
  image.src = objectURL;
} catch (e) {
  console.error(e);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
