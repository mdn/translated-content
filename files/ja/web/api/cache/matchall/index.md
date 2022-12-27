---
title: Cache.matchAll()
slug: Web/API/Cache/matchAll
---

{{APIRef("Service Workers API")}}

{{domxref("Cache")}} インターフェイスの **`matchAll()`** メソッドは、{{domxref("Cache")}} オブジェクト内の一致するすべてのレスポンスの配列に解決される {{jsxref("Promise")}} を返します。

## 構文

```
cache.matchAll(request, {options}).then(function(response) {
  // レスポンスの配列で何かをする
});
```

### パラメーター

- request {{optional_inline}}
  - : {{domxref("Cache")}} 内でレスポンスを見つけようとしている {{domxref("Request")}}。 これは、`Request` オブジェクトまたは URL です。 この引数を省略すると、このキャッシュ内のすべてのレスポンスのコピーが取得されます。
- options {{optional_inline}}

  - : 実行する照合の特定の制御オプションを設定できるオプションオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoreSearch`: 照合操作で URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 `true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分を、照合の実行時に無視します。 デフォルトは `false` です。
    - `ignoreMethod`: `true` に設定すると、照合操作が {{domxref("Request")}} `HTTP` メソッドを検証しないようにする {{jsxref("Boolean")}}（通常、`GET` および `HEAD` のみが許可されます）。 デフォルトは `false` です。
    - `ignoreVary`: `true` に設定すると、`VARY` ヘッダーの照合を実行しないように照合操作に指示する {{jsxref("Boolean")}}。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 デフォルトは `false` です。

### 戻り値

{{domxref("Cache")}} オブジェクト内のすべての一致するレスポンスの配列に解決される {{jsxref("Promise")}}。

> **メモ:** {{domxref("Cache.match()")}} は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致するレスポンスのみ（つまり、`response[0]`）で解決することを除いて、基本的に `Cache.matchAll()` と同じです。

## 例

```js
caches.open('v1').then(function(cache) {
  cache.matchAll('/images/').then(function(response) {
    response.forEach(function(element, index, array) {
      cache.delete(element);
    });
  });
})
```

## 仕様

| 仕様                                                                                             | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cache-matchall', 'Cache: matchAll')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Cache.matchAll")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
