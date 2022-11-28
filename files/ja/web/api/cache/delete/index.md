---
title: Cache.delete()
slug: Web/API/Cache/delete
---

{{APIRef("Service Workers API")}}

{{domxref("Cache")}} インターフェイスの **`delete()`** メソッドは、キーがリクエストである {{domxref("Cache")}} エントリを探し、見つかった場合は {{domxref("Cache")}} エントリを削除して、`true` に解決される {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} エントリが見つからない場合は、`false` に解決されます。

## 構文

```
cache.delete(request, {options}).then(function(found) {
  // キャッシュエントリが見つかった場合は削除されました
});
```

### Parameters

- request
  - : 削除しようとしている {{domxref("Request")}}。 これは、`Request` オブジェクトまたは URL です。
- options {{optional_inline}}

  - : プロパティが `delete` 操作でどのように照合するかを制御するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoreSearch`: 照合操作で URL のクエリ文字列を無視するかどうかを指定する {{jsxref("Boolean")}}。 `true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分を、照合の実行時に無視します。 デフォルトは `false` です。
    - `ignoreMethod`: `true` に設定すると、照合操作が {{domxref("Request")}} `HTTP` メソッドを検証しないようにする {{jsxref("Boolean")}}（通常、`GET` および `HEAD` のみが許可されます）。 デフォルトは `false` です。
    - `ignoreVary`: `true` に設定すると、`VARY` ヘッダーを照合しないように照合操作に指示する {{jsxref("Boolean")}}。 つまり、URL が一致した場合は、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 デフォルトは `false` です。
    - `cacheName`: 検索対象の特定のキャッシュを表す {{domxref("DOMString")}}。 このオプションは `Cache.delete()` によって無視されることに注意してください。

### 戻り値

キャッシュエントリが削除された場合は `true`、それ以外の場合は `false` に解決される {{jsxref("Promise")}}。

## 例

```js
caches.open('v1').then(function(cache) {
  cache.delete('/images/image.png').then(function(response) {
    someUIUpdateFunction();
  });
})
```

## 仕様

| 仕様                                                                                         | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cache-delete', 'Cache: delete')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Cache.delete")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
