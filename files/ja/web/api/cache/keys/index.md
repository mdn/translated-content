---
title: "Cache: keys() メソッド"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Service Workers API")}}

**`keys()`** は {{domxref("Cache")}} インターフェイスのメソッドで、{{domxref("Cache")}} のキーを表す {{domxref("Request")}} の配列に解決される {{jsxref("Promise")}} を返します。

リクエストは、挿入されたのと同じ順序で返されます。

> [!NOTE]
> レスポンスに `VARY` ヘッダーが設定されている場合、URL が重複しているがヘッダーが異なるリクエストを返すことができます。

## 構文

```js-nolint
keys()
keys(request)
keys(request, options)
```

### 引数

- `request` {{optional_inline}}
  - : 特定のキーが必要な場合、返してほしい {{domxref("Request")}}。 これは、`Request` オブジェクトまたは URL です。
- `options` {{optional_inline}}
  - : プロパティが `keys` 操作でどのように照合するかを制御するオブジェクト。 使用可能なオプションは次のとおりです。
    - `ignoreSearch`
      - : 論理値で、照合操作で URL のクエリー文字列を無視するかどうかを指定します。 `true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分を、照合の実行時に無視します。既定値は `false` です。
    - `ignoreMethod`
      - : 論理値で、`true` に設定すると、照合操作が {{domxref("Request")}} の `HTTP` メソッドを検証しないようにするします（通常、`GET` および `HEAD` のみが許可されます）。既定値は `false` です。
    - `ignoreVary`
      - : 論理値で、`true` に設定すると、`VARY` ヘッダーを照合しないように照合操作に指示します。 つまり、URL が一致した場合は、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。既定値は `false` です。
    - `cacheName`
      - : 文字列で、検索対象の特定のキャッシュを表します。 このオプションは `Cache.keys()` によって無視されることに注意してください。

### 返値

{{domxref("Cache")}} キーの配列に解決される {{jsxref("Promise")}} です。

## 例

```js
caches.open("v1").then((cache) => {
  cache.keys().then((keys) => {
    keys.forEach((request, index, array) => {
      cache.delete(request);
    });
  });
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
