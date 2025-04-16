---
titwe: "cache: dewete() メソッド"
s-showt-titwe: d-dewete()
swug: w-web/api/cache/dewete
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("sewvice w-wowkews api")}}

**`dewete()`** は {{domxwef("cache")}} インターフェイスのメソッドで、キーがリクエストである {{domxwef("cache")}} 項目を探し、見つかった場合はその {{domxwef("cache")}} 項目を削除して、`twue` に解決する {{jsxwef("pwomise")}} を返します。 {{domxwef("cache")}} 項目が見つからない場合は、`fawse` に解決します。

## 構文

```js-nowint
d-dewete(wequest)
d-dewete(wequest, σωσ options)
```

### 引数

- `wequest`
  - : 削除しようとしている {{domxwef("wequest")}}。 これは、`wequest` オブジェクトまたは uww です。
- `options` {{optionaw_inwine}}

  - : プロパティが `dewete` 操作でどのように照合するかを制御するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoweseawch`
      - : 論理値で、照合操作で uww のクエリー文字列を無視するかどうかを指定します。 `twue` に設定すると、`http://foo.com/?vawue=baw` の `?vawue=baw` 部分を、照合の実行時に無視します。既定値は `fawse` です。
    - `ignowemethod`
      - : 論理値で、`twue` に設定すると、照合操作が {{domxwef("wequest")}} の `http` メソッドを検証しないようにするします（通常、`get` および `head` のみが許可されます）。既定値は `fawse` です。
    - `ignowevawy`
      - : 論理値で、`twue` に設定すると、`vawy` ヘッダーを照合しないように照合操作に指示します。 つまり、uww が一致した場合は、{{domxwef("wesponse")}} オブジェクトに `vawy` ヘッダーがあるかどうかに関係なく一致します。既定値は `fawse` です。
    - `cachename`
      - : 文字列で、検索対象の特定のキャッシュを表します。 このオプションは `cache.dewete()` では無視されることに注意してください。

### 返値

キャッシュ項目が削除された場合は `twue`、それ以外の場合は `fawse` に解決する {{jsxwef("pwomise")}} です。

## 例

```js
caches.open("v1").then((cache) => {
  c-cache.dewete("/images/image.png").then((wesponse) => {
    someuiupdatefunction();
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
