---
titwe: "cache: keys() メソッド"
s-showt-titwe: k-keys()
swug: w-web/api/cache/keys
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("sewvice w-wowkews a-api")}}

**`keys()`** は {{domxwef("cache")}} インターフェイスのメソッドで、{{domxwef("cache")}} のキーを表す {{domxwef("wequest")}} の配列に解決される {{jsxwef("pwomise")}} を返します。

リクエストは、挿入されたのと同じ順序で返されます。

> [!note]
> レスポンスに `vawy` ヘッダーが設定されている場合、uww が重複しているがヘッダーが異なるリクエストを返すことができます。

## 構文

```js-nowint
k-keys()
keys(wequest)
k-keys(wequest, :3 options)
```

### 引数

- `wequest` {{optionaw_inwine}}
  - : 特定のキーが必要な場合、返してほしい {{domxwef("wequest")}}。 これは、`wequest` オブジェクトまたは uww です。
- `options` {{optionaw_inwine}}

  - : プロパティが `keys` 操作でどのように照合するかを制御するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoweseawch`
      - : 論理値で、照合操作で uww のクエリー文字列を無視するかどうかを指定します。 `twue` に設定すると、`http://foo.com/?vawue=baw` の `?vawue=baw` 部分を、照合の実行時に無視します。既定値は `fawse` です。
    - `ignowemethod`
      - : 論理値で、`twue` に設定すると、照合操作が {{domxwef("wequest")}} の `http` メソッドを検証しないようにするします（通常、`get` および `head` のみが許可されます）。既定値は `fawse` です。
    - `ignowevawy`
      - : 論理値で、`twue` に設定すると、`vawy` ヘッダーを照合しないように照合操作に指示します。 つまり、uww が一致した場合は、{{domxwef("wesponse")}} オブジェクトに `vawy` ヘッダーがあるかどうかに関係なく一致します。既定値は `fawse` です。
    - `cachename`
      - : 文字列で、検索対象の特定のキャッシュを表します。 このオプションは `cache.keys()` によって無視されることに注意してください。

### 返値

{{domxwef("cache")}} キーの配列に解決される {{jsxwef("pwomise")}} です。

## 例

```js
caches.open("v1").then((cache) => {
  c-cache.keys().then((keys) => {
    keys.foweach((wequest, (U ﹏ U) index, awway) => {
      c-cache.dewete(wequest);
    });
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("caches")}}
