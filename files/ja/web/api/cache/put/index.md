---
title: "Cache: put() メソッド"
short-title: put()
slug: Web/API/Cache/put
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Service Workers API")}}

**`put()`** は {{domxref("Cache")}} インターフェイスのメソッドで、キーと値のペアを現在の {{domxref("Cache")}} オブジェクトに追加することができます。

多くの場合、やりたいことは、ただ 1 つ以上のリクエストを {{domxref("Window/fetch", "fetch()")}} して、その結果を直接キャッシュに追加するだけです。そのような場合は、{{domxref("Cache.add","Cache.add()")}} や {{domxref("Cache.addAll","Cache.addAll()")}} を使用した方がよいでしょう。 これらはこうした操作を 1 つ以上行うための一括操作関数であるためです。

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("Bad response status");
  }
  return cache.put(url, response);
});
```

> **メモ:** `put()` は、リクエストが以前にキャッシュに保存されたものと一致すると、キーと値のペアを上書きします。

> **メモ:** {{domxref("Cache.add")}} や {{domxref("Cache.addAll")}} は、200 台にない `Response.status` 値を持つレスポンスをキャッシュしませんが、 {{domxref("Cache.put")}} では、リクエストとレスポンスのペアを格納できます。結果的に、{{domxref("Cache.add")}} や {{domxref("Cache.addAll")}} は不透明なレスポンスを格納するために使用できませんが、 {{domxref("Cache.put")}} では可能です。

## 構文

```js-nolint
put(request, response)
```

### 引数

- `request`
  - : キャッシュに追加する {{domxref("Request")}} オブジェクトまたは URL。
- `response`
  - : リクエストと合う {{domxref("Response")}}。

### 返値

`undefined` で解決する {{jsxref("Promise")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : URL スキームが `http` または `https` のどちらでもない場合に返されます。

## 例

この例は、MDN の [simple-service-worker の例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)からのものです（[simple-service-worker をライブで](https://bncb2v.csb.app/)見る）。 ここでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。

1. {{domxref("CacheStorage.match","CacheStorage.match()")}} を使用して、リクエストの一致が {{domxref("CacheStorage")}} にあるかどうかを確認します。 もしそうなら、それを提供します。
2. そうでない場合は、`v1` キャッシュを `open()` で開き、{{domxref("Cache.put","Cache.put()")}} を使用して既定のネットワークリクエストをキャッシュに入れ、 `return response.clone()` を使用して既定のネットワークリクエストのクローンを返します。 `put()` がレスポンスの本体を消費するため、クローンが必要です。
3. これが失敗した場合（ネットワークがダウンしているなど）、代替レスポンスを返します。

```js
let response;
const cachedResponse = caches
  .match(event.request)
  .catch(() => fetch(event.request))
  .then((r) => {
    response = r;
    caches.open("v1").then((cache) => {
      cache.put(event.request, response);
    });
    return response.clone();
  })
  .catch(() => caches.match("/gallery/myLittleVader.jpg"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
