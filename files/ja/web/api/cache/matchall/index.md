---
title: "Cache: matchAll() メソッド"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 633a8bf8d2bb80d29f417e4ef6cd53fdeeda940d
---

{{APIRef("Service Workers API")}}

**`matchAll()`** は {{domxref("Cache")}} インターフェイスのメソッドで、{{domxref("Cache")}} オブジェクト内の一致するすべてのレスポンスの配列に解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
matchAll()
matchAll(request)
matchAll(request, options)
```

### 引数

- `request` {{optional_inline}}
  - : {{domxref("Cache")}} 内でレスポンスを見つけようとしている {{domxref("Request")}}。 これは、`Request` オブジェクトまたは URL です。この引数を省略すると、このキャッシュ内のすべてのレスポンスのコピーが取得されます。
- `options` {{optional_inline}}
  - : 実行する照合の特定の制御オプションを設定できるオプションオブジェクト。 使用可能なオプションは次のとおりです。
    - `ignoreSearch`
      - : 論理値で、照合操作で URL のクエリー文字列を無視するかどうかを指定します。 `true` に設定すると、`http://foo.com/?value=bar` の `?value=bar` 部分を、照合の実行時に無視します。 既定値は `false` です。
    - `ignoreMethod`
      - : 論理値で、`true` に設定すると、照合操作で {{domxref("Request")}} の `http` メソッドを検証しないようにします（通常は、`GET` および `HEAD` のみが許可されます）。 既定値は `false` です。
    - `ignoreVary`
      - : 論理値で、`true` に設定すると、`VARY` ヘッダーの照合を実行しないように照合操作に指示します。 つまり、URL が一致する場合、{{domxref("Response")}} オブジェクトに `VARY` ヘッダーがあるかどうかに関係なく一致します。 既定値は `false` です。

### 返値

{{domxref("Cache")}} オブジェクト内のすべての一致するレスポンスの配列に解決される {{jsxref("Promise")}}。

> [!NOTE]
> {{domxref("Cache.match()")}} は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致するレスポンスのみ（つまり、`response[0]`）で解決することを除いて、基本的に `Cache.matchAll()` と同じです。

## 例

以下の例では、 `v1` キャッシュにある、URL `/` と潜在的な引数に一致するすべてのレスポンスを受け取ります。 `{ ignoreSearch: true }` を使用することで、 `matchAll` を使用すると、 `/` だけでなく `/?value=bar` も取得することができます。

そして、一致したレスポンスの数をログ出力します。

```js
caches.open("v1").then((cache) => {
  cache.matchAll("/", { ignoreSearch: true }).then((responses) => {
    console.log(`Found ${responses.length} matching responses`);
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
