---
title: Cache.addAll()
slug: Web/API/Cache/addAll
l10n:
  sourceCommit: dcc90b47b1a262061dfc980db59e6254527ad48c
---

{{APIRef("Service Workers API")}}

**`addAll()`** は {{domxref("Cache")}} インターフェイスのメソッドで、URL の配列を受け取り、それらを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。取得の間に作成されたリクエストオブジェクトは、格納されるレスポンス操作のキーになります。

> **メモ:** `addAll()` は、リクエストと一致する、以前にキャッシュに格納されたキーと値のペアをすべて上書きしますが、結果として生じる `put()` 操作が、同じ `addAll()` メソッドによって直前にキャッシュに格納された項目を上書きしようとすると失敗します。

## 構文

```js-nolint
addAll(requests)
```

### 引数

- `requests`

  - : キャッシュに追加したいリソースのリクエストの配列です。 {{domxref("Request")}} オブジェクトまたは URL が指定できます。

    これらのリクエストは {{domxref("Request.Request()", "Request()")}} コンストラクターの引数として使用されるので、 URL はそのコンストラクターと同じルールに従います。すなわち、URL はベース URL からの相対パスです。ベース URL は、ウィンドウコンテキストでは文書内の {{domxref("Node.baseURI", "baseURI")}}、ワーカーコンテキストでは {{domxref("WorkerGlobalScope.location")}} が該当します。

### 返値

`undefined` で解決する {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}

  - : URL スキームが `http` でも `https` でもない場合。

    レスポンスステータスが 200 番台（つまり、成功レスポンス）ではありません。これはリクエストが成功を返さない場合や、リクエストがオリジン間の CORS ではないリクエスト (_cross-origin no-cors_ request) の場合も発生します（この場合、ステータスが常に 0 と報告されます）。

## 例

このコードブロックは、{{domxref("InstallEvent")}} が発行されるのを待ってから、アプリのインストールプロセスを処理するために、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行します。この処理は、新しいキャッシュを作成するための {{domxref("CacheStorage.open")}} の呼び出しと、一連の資産を追加するための `addAll()` の使用で構成されています。

```js
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
