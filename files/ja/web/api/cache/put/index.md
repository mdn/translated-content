---
title: Cache.put()
slug: Web/API/Cache/put
---

{{APIRef("Service Workers API")}}

{{domxref("Cache")}} インターフェイスの **`put()`** メソッドを使用すると、キーと値のペアを現在の {{domxref("Cache")}} オブジェクトに追加できます。

多くの場合、1 つ以上のリクエストを {{domxref("WindowOrWorkerGlobalScope.fetch","fetch()")}} して、その結果を直接キャッシュに追加したいだけです。 そのような場合、{{domxref("Cache.add","Cache.add()")}} や {{domxref("Cache.addAll","Cache.addAll()")}} を使用する方がよいでしょう。 これらは、1 つ以上のそれらの操作の一括指定関数であるためです。

```js
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('Bad response status');
  }
  return cache.put(url, response);
})
```

> **メモ:** `put()` は、リクエストに一致する、以前にキャッシュに保存されたキーと値のペアを上書きします。

> **メモ:** {{domxref("Cache.add")}} や {{domxref("Cache.addAll")}} は、200 の範囲にない `Response.status` 値を持つレスポンスをキャッシュしませんが、{{domxref("Cache.put")}} では、リクエストとレスポンスのペアを格納できます。 その結果、{{domxref("Cache.put")}} では可能ですが、{{domxref("Cache.add")}} や {{domxref("Cache.addAll")}} は不透明なレスポンスを格納するために使用できません。

## 構文

```
cache.put(request, response).then(function() {
  // リクエストとレスポンスのペアがキャッシュに追加されました
});
```

### パラメーター

- request
  - : キャッシュに追加する {{domxref("Request")}} オブジェクトまたは URL。
- response
  - : リクエストと合う {{domxref("Response")}}。

### 戻り値

`undefined` で解決する {{jsxref("Promise")}}。

> **メモ:** URL スキームが `http` または `https` でない場合、Promise は `TypeError` で拒否します。

## 例

この例は、MDN の [sw-test の例](https://github.com/mdn/sw-test/)からのものです（[sw-test をライブで](https://mdn.github.io/sw-test/)見る）。 ここでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。

1. {{domxref("CacheStorage.match","CacheStorage.match()")}} を使用して、リクエストの一致が {{domxref("CacheStorage")}} にあるかどうかを確認します。 もしそうなら、それを提供します。
2. そうでない場合は、`open()` を使用して `v1` キャッシュを開き、{{domxref("Cache.put","Cache.put()")}} を使用してデフォルトのネットワークリクエストをキャッシュに入れ、 `return response.clone()` を使用してデフォルトのネットワークリクエストのクローンを返します。 `put()` がレスポンスのボディを消費するため、クローンが必要です。
3. これが失敗した場合（ネットワークがダウンしているなど）、フォールバックレスポンスを返します。

```js
var response;
var cachedResponse = caches.match(event.request).catch(function() {
  return fetch(event.request);
}).then(function(r) {
  response = r;
  caches.open('v1').then(function(cache) {
    cache.put(event.request, response);
  });
  return response.clone();
}).catch(function() {
  return caches.match('/sw-test/gallery/myLittleVader.jpg');
});
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cache-put', 'Cache: put')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Cache.put")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
