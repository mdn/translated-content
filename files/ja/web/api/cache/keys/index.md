---
title: Cache.keys()
slug: Web/API/Cache/keys
---

{{APIRef("Service Workers API")}}

{{domxref("Cache")}} インターフェイスの **`keys()`** メソッドは、{{domxref("Cache")}} キーの配列に解決される {{jsxref("Promise")}} を返します。

リクエストは、挿入されたのと同じ順序で返されます。

> **メモ:** レスポンスに `VARY` ヘッダーが設定されている場合、URL が重複しているがヘッダーが異なるリクエストを返すことができます。

## 構文

```
cache.keys(request, {options}).then(function(keys) {
  // リクエストの配列で何かをする
});
```

### パラメーター

- request {{optional_inline}}
  - : 特定のキーが必要な場合、返してほしい {{domxref("Request")}}。 これは、`Request` オブジェクトまたは URL です。
- options {{optional_inline}}

  - : プロパティが `keys` 操作でどのように照合するかを制御するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoreSearch`: 照合操作で URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 `true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分を、照合の実行時に無視します。 デフォルトは `false` です。
    - `ignoreMethod`: `true` に設定すると、照合操作が {{domxref("Request")}} `HTTP` メソッドを検証しないようにする {{jsxref("Boolean")}}（通常、`GET` および `HEAD` のみが許可されます）。 デフォルトは `false` です。
    - `ignoreVary`: `true` に設定すると、`VARY` ヘッダーを照合しないように照合操作に指示する {{jsxref("Boolean")}}。 つまり、URL が一致した場合は、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 デフォルトは `false` です。
    - `cacheName`: 検索対象の特定のキャッシュを表す {{domxref("DOMString")}}。 このオプションは `Cache.keys()` によって無視されることに注意してください。

### 戻り値

{{domxref("Cache")}} キーの配列に解決される {{jsxref("Promise")}}。

## 例

```js
caches.open('v1').then(function(cache) {
  cache.keys().then(function(keys) {
    keys.forEach(function(request, index, array) {
      cache.delete(request);
    });
  });
})
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cache-keys', 'Cache: keys')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Cache.keys")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
