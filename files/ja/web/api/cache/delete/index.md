---
title: "Cache: delete() メソッド"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Service Workers API")}}

**`delete()`** は {{domxref("Cache")}} インターフェイスのメソッドで、キーがリクエストである {{domxref("Cache")}} 項目を探し、見つかった場合はその {{domxref("Cache")}} 項目を削除して、`true` に解決する {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} 項目が見つからない場合は、`false` に解決します。

## 構文

```js-nolint
delete(request)
delete(request, options)
```

### 引数

- `request`
  - : 削除しようとしている {{domxref("Request")}}。 これは、`Request` オブジェクトまたは URL です。
- `options` {{optional_inline}}

  - : プロパティが `delete` 操作でどのように照合するかを制御するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoreSearch`
      - : 論理値で、照合操作で URL のクエリー文字列を無視するかどうかを指定します。 `true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分を、照合の実行時に無視します。既定値は `false` です。
    - `ignoreMethod`
      - : 論理値で、`true` に設定すると、照合操作が {{domxref("Request")}} の `HTTP` メソッドを検証しないようにするします（通常、`GET` および `HEAD` のみが許可されます）。既定値は `false` です。
    - `ignoreVary`
      - : 論理値で、`true` に設定すると、`VARY` ヘッダーを照合しないように照合操作に指示します。 つまり、URL が一致した場合は、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。既定値は `false` です。
    - `cacheName`
      - : 文字列で、検索対象の特定のキャッシュを表します。 このオプションは `Cache.delete()` では無視されることに注意してください。

### 返値

キャッシュ項目が削除された場合は `true`、それ以外の場合は `false` に解決する {{jsxref("Promise")}} です。

## 例

```js
caches.open("v1").then((cache) => {
  cache.delete("/images/image.png").then((response) => {
    someUIUpdateFunction();
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
