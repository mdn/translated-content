---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
---

{{APIRef("Service Workers API")}}

{{domxref("CacheStorage")}} インターフェイスの **`match()`** メソッドは、所与の {{domxref("Request")}} または URL 文字列が保存された {{domxref("Response")}} のキーであるかどうかをチェックします。 このメソッドは、{{domxref("Response")}} の {{jsxref("Promise")}}、または一致が見つからない場合に `undefined` に解決される {{jsxref("Promise")}} を返します。

グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して `CacheStorage` にアクセスできます。

`Cache` オブジェクトは作成順に検索されます。

> **メモ:** {{domxref("CacheStorage.match()", "caches.match()")}} は便利なメソッドです。 同等の機能は、{{domxref("Response")}} が返されるまで、（{{domxref("CacheStorage.keys()", "caches.keys()")}} によって返される順序で）各キャッシュで {{domxref("cache.match()")}} を呼び出すことです。

## 構文

```
caches.match(request, options).then(function(response) {
  // response で何かをする
});
```

### パラメーター

- request
  - : 一致させたい {{domxref("Request")}}。 これは、{{domxref("Request")}} オブジェクトまたは URL 文字列にすることができます。
- options {{optional_inline}}

  - : `match` 操作での照合方法を制御するプロパティを持つオブジェクト。 利用可能なオプションは次のとおりです。

    - `ignoreSearch`: 照合方法が URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 例えば、`true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分は、照合するときに無視されます。 デフォルトは `false` です。
    - `ignoreMethod`: `true` に設定すると、照合方法が {{domxref("Request")}} `http` メソッドを検証できないようにする {{jsxref("Boolean")}}（通常は `GET` と `HEAD` のみが許可されます）。 デフォルトは `false` です。
    - `ignoreVary`: `true` に設定された場合、`VARY` ヘッダーの照合をしないように照合方法に指示する {{jsxref("Boolean")}}。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 デフォルトは `false` です。
    - `cacheName`: 検索する特定のキャッシュを表す {{domxref("DOMString")}}。

### 戻り値

一致する {{domxref("Response")}} に解決される {{jsxref("Promise")}}。 指定されたリクエストに対する一致するレスポンスが見つからない場合、`Promise` は `undefined` に解決されます。

## 例

この例は MDN の [sw-test の例](https://github.com/mdn/sw-test/)からのものです（[sw-test をライブで](https://mdn.github.io/sw-test/)見る）。 ここでは、{{domxref("FetchEvent")}} が発生するのを待ちます。 次のようなカスタムレスポンスを作成します。

1. {{domxref("CacheStorage.match","CacheStorage.match()")}} を使用して、{{domxref("CacheStorage")}} でリクエストの一致が見つかったかどうかを確認します。 もしそうなら、それを提供します。
2. そうでない場合は、`open()` を使用して `v1` キャッシュを開き、{{domxref("Cache.put","Cache.put()")}} を使用してデフォルトのネットワークリクエストをキャッシュに入れ、`return response.clone()` を使用してデフォルトのネットワークリクエストのクローンを返します。 `put()` がレスポンスのボディを消費するため、最後が必要です。
3. これが失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() は常に解決します
    // ただし、成功の場合はレスポンスに値があります
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // レスポンスは1回のみ使用できます
        // クローンを保存して、1番目のコピーをキャッシュに入れ、
        // 2番目のコピーを提供する必要があります
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
```

## 仕様

| 仕様                                                                                                         | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cachestorage-match', 'CacheStorage: match')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CacheStorage.match")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
