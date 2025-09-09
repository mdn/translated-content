---
title: "Cache: add() メソッド"
short-title: add()
slug: Web/API/Cache/add
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Service Workers API")}}

**`add()`** は {{domxref("Cache")}} インターフェイスのメソッドで、URL を受け取り、リソースを取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。

`add()` メソッドは、機能的に次の例と同じです。

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

より複雑な操作では、 {{domxref("Cache.put","Cache.put()")}} を直接使用する必要があります。

> [!NOTE]
> `add()` は、前にキャッシュに保存された、リクエストに一致するキー/値の組を上書きます。

## 構文

```js-nolint
add(request)
```

### 引数

- `request`
  - : キャッシュに加えるリクエスト。 {{domxref("Request")}} オブジェクトか URL を指定できる。

    この引数は {{domxref("Request.Request()", "Request()")}} コンストラクターの引数として使用されるので、 URL はそのコンストラクターと同じルールに従います。すなわち、URL はベース URL からの相対パスです。ベース URL は、ウィンドウコンテキストでは文書内の {{domxref("Node.baseURI", "baseURI")}}、ワーカーコンテキストでは {{domxref("WorkerGlobalScope.location")}} が該当します。

### 返値

`undefined` で解決する {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : URL スキームが `http` でも `https` でもない場合。

    レスポンスステータスが 200 番台（つまり、成功レスポンス）ではありません。これはリクエストが成功を返さない場合や、リクエストがオリジン間の CORS ではないリクエスト (_cross-origin no-cors_ request) の場合も発生します（この場合、ステータスが常に 0 と報告されます）。

## 例

このコードブロックは、{{domxref("InstallEvent")}} が発行されるのを待ってから、アプリがインストールプロセスを処理するために、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行します。この処理は、新しいキャッシュを作成するための {{domxref("CacheStorage.open")}} の呼び出しと、資産を追加するための {{domxref("Cache.add")}} の使用で構成されています。

```js
this.addEventListener("install", (event) => {
  event.waitUntil(caches.open("v1").then((cache) => cache.add("/index.html")));
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
