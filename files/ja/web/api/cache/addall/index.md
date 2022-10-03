---
title: Cache.addAll()
slug: Web/API/Cache/addAll
---

{{APIRef("Service Workers API")}}

{{domxref("Cache")}} インターフェイスの **`addAll()`** メソッドは、URL の配列を受け取り、取得して、指定されたキャッシュに結果のレスポンスオブジェクトを追加します。取得の間に作成されたリクエストオブジェクトは、格納されるレスポンス操作のキーになります。

> **メモ:** `addAll()` は、リクエストと一致する、以前にキャッシュに格納されたキーと値のペアをどれでも上書きしますが、（結果としての `put()` 操作が）同一の `addAll()` メソッドによって先に格納されたキャッシュエントリーを上書きしようとすると失敗します。

## 構文

```
cache.addAll(requests[]).then(function() {
  // リクエストはすでに cahce に追加されている。
});
```

### 引数

- requests
  - : キャッシュにフェッチして追加したい URL の文字列の配列です。 URL の代わりに {{domxref("Request")}} オブジェクトを指定できます。

### 返値

`undefined` で解決する {{jsxref("Promise")}}。

### 例外

| **例外**    | **発生条件**                                                                                                                                                                                                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError` | URL スキームが `http` や `https` ではありません。レスポンスステータスが 200 番台（つまり、成功レスポンス）ではありません。これはリクエストが成功を返さない場合や、リクエストがオリジン間の CORS ではないリクエスト (_cross-origin no-cors_ request) の場合も発生します (この場合、ステータスが常に 0 で報告されます)。 |

## 例

このコードブロックは、{{domxref("InstallEvent")}} が発火するのを待ってから、アプリのインストールプロセスを処理するために、{{domxref("ExtendableEvent.waitUntil","waitUntil")}} を実行します。この処理は、新しいキャッシュを作成するための {{domxref("CacheStorage.open")}} の呼び出しと、一連の資産を追加するための `addAll()` の使用で構成されています。

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```

## 仕様策定状況

| 仕様書                                                                                       | 策定状況                             | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cache-addall', 'Cache: addAll')}} | {{Spec2('Service Workers')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Cache.addAll")}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
