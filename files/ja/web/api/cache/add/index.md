---
title: Cache.add()
slug: Web/API/Cache/add
---

{{APIRef("Service Workers API")}}

{{domxref("Cache")}} インターフェイスの **`add()`** メソッドは、URL を受け取り、取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。 `add()` メソッドは、機能的に次の例と同じです。

```js
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('bad response status');
  }
  return cache.put(url, response);
})
```

より複雑な操作では、 {{domxref("Cache.put","Cache.put()")}} を直接使用する必要があります。

> **メモ:** `add()` は、リクエストにマッチする、前にキャッシュに保存されたキー/値の組を上書きます。

## 構文

```js
cache.add(request).then(function() {
  // リクエストはすでに cahce に追加されている。
});
```

### 引数

- request
  - : キャッシュに加えるリクエスト。 {{domxref("Request")}} オブジェクトか URL を指定できる。

### 返値

`undefined` で解決する {{jsxref("Promise")}}。

### 例外

| **例外**    | **発生条件**                                                                                                                                                                                                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError` | URL スキームが `http` や `https` ではありません。レスポンスステータスが 200 番台（つまり、成功レスポンス）ではありません。これはリクエストが成功を返さない場合や、リクエストがオリジン間の CORS ではないリクエスト (_cross-origin no-cors_ request) の場合も発生します (この場合、ステータスが常に 0 で報告されます)。 |

## 例

このコードブロックは、{{domxref("InstallEvent")}} が発火するのを待ってから、アプリにインストールプロセスを処理するために、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行します。この処理は、新しい cache を作成するための {{domxref("CacheStorage.open")}} の呼び出しと、資産を追加するための {{domxref("Cache.add")}} の使用で構成されています。

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.add('/sw-test/index.html');
    })
  );
});
```

## 仕様策定状況

| 仕様書                                                                               | 策定状況                             | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cache-add', 'Cache: add')}} | {{Spec2('Service Workers')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Cache.add")}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
