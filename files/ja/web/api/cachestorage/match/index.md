---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("Service Workers API")}}

**`match()`** は {{domxref("CacheStorage")}} インターフェイスのメソッドで、所与の {{domxref("Request")}} または URL 文字列が保存された {{domxref("Response")}} のキーであるかどうかをチェックします。 このメソッドは、{{domxref("Response")}} の {{jsxref("Promise")}}、または一致するものが見つからない場合に `undefined` に解決される {{jsxref("Promise")}} を返します。

`CacheStorage` には、グローバルな {{domxref("caches")}} プロパティを介してアクセスできます。

`Cache` オブジェクトは作成順に検索されます。

> **メモ:** {{domxref("CacheStorage.match()", "caches.match()")}} は便利なメソッドです。
> 各キャッシュに対して（{{domxref("CacheStorage.keys()", "caches.keys()")}} によって返される順序で）、{{domxref("Response")}} が返されるまで {{domxref("cache.match()")}} を呼び出すのと同等の機能です。

## 構文

```js-nolint
match(request)
match(request, options)
```

### 引数

- `request`
  - : 照合したい {{domxref("Request")}}。 これは、{{domxref("Request")}} オブジェクトまたは URL 文字列にすることができます。
- `options` {{optional_inline}}

  - : `match` 操作での照合方法を制御するプロパティを持つオブジェクト。 利用可能なオプションは次のとおりです。

    - `ignoreSearch`
      - : 論理値で、照合処理が URL のクエリー文字列を無視するかどうかを指定します。例えば、`true` に設定すると、 `http://foo.com/?value=bar` の `?value=bar` 部分は、照合するときに無視されます。
        既定値は `false` です。
    - `ignoreMethod`
      - : 論理値で、 `true` に設定すると、照合処理が {{domxref("Request")}} の HTTP メソッドを検証しないようにします（通常は `GET` と `HEAD` のみが許可されます）。 既定値は `false` です。
    - `ignoreVary`
      - : 論理値で、 `true` に設定すると、 `VARY` ヘッダーの照合をしないように照合処理に支持します。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 既定値は `false` です。
    - `cacheName`
      - : 文字列で、検索する特定のキャッシュを表します。

### 返値

{{jsxref("Promise")}} で、一致する {{domxref("Response")}} に解決されます。 指定されたリクエストに対する一致するレスポンスが見つからない場合、このプロミスは `undefined` に解決されます。

## 例

このコードスニペットは、MDN の[単純なサービスワーカーの例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)からのものです（[単純なサービスワーカーがライブで実行する](https://bncb2v.csb.app/)のを見る）。
ここで、 {{domxref("FetchEvent")}} が発行されるのを待ちます。そして次のように独自のレスポンスを構築します。

1. {{domxref("CacheStorage")}} で {{domxref("CacheStorage.match","CacheStorage.match()")}} を使用して、リクエストに一致するものがあるかどうかを確認します。もしあれば、それを提供します。
2. ない場合は、 `v1` キャッシュを `open()` で開き、 {{domxref("Cache.put","Cache.put()")}} を使用して既定のネットワークリクエストをキャッシュに入れ、 `return response.clone()` を使用して既定値のネットワークリクエストのクローンを返します。 `put()` がレスポンスの本体を消費するため、最後に必要です。
3. 失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() は常に解決します
      // ただし、成功の場合はレスポンスに値があります
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // レスポンスは 1 回のみ使用できます
            // クローンを保存して、 1 番目のコピーをキャッシュに入れ、
            // 2 番目のコピーを提供する必要があります
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
    }),
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
