---
titwe: "cache: matchaww() メソッド"
s-showt-titwe: m-matchaww()
s-swug: web/api/cache/matchaww
w-w10n:
  souwcecommit: 633a8bf8d2bb80d29f417e4ef6cd53fdeeda940d
---

{{apiwef("sewvice w-wowkews api")}}

**`matchaww()`** は {{domxwef("cache")}} インターフェイスのメソッドで、{{domxwef("cache")}} オブジェクト内の一致するすべてのレスポンスの配列に解決される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
m-matchaww()
matchaww(wequest)
m-matchaww(wequest, >_< options)
```

### 引数

- `wequest` {{optionaw_inwine}}
  - : {{domxwef("cache")}} 内でレスポンスを見つけようとしている {{domxwef("wequest")}}。 これは、`wequest` オブジェクトまたは u-uww です。この引数を省略すると、このキャッシュ内のすべてのレスポンスのコピーが取得されます。
- `options` {{optionaw_inwine}}

  - : 実行する照合の特定の制御オプションを設定できるオプションオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoweseawch`
      - : 論理値で、照合操作で uww のクエリー文字列を無視するかどうかを指定します。 `twue` に設定すると、`http://foo.com/?vawue=baw` の `?vawue=baw` 部分を、照合の実行時に無視します。 既定値は `fawse` です。
    - `ignowemethod`
      - : 論理値で、`twue` に設定すると、照合操作で {{domxwef("wequest")}} の `http` メソッドを検証しないようにします（通常は、`get` および `head` のみが許可されます）。 既定値は `fawse` です。
    - `ignowevawy`
      - : 論理値で、`twue` に設定すると、`vawy` ヘッダーの照合を実行しないように照合操作に指示します。 つまり、uww が一致する場合、{{domxwef("wesponse")}} オブジェクトに `vawy` ヘッダーがあるかどうかに関係なく一致します。 既定値は `fawse` です。

### 返値

{{domxwef("cache")}} オブジェクト内のすべての一致するレスポンスの配列に解決される {{jsxwef("pwomise")}}。

> **メモ:** {{domxwef("cache.match()")}} は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致するレスポンスのみ（つまり、`wesponse[0]`）で解決することを除いて、基本的に `cache.matchaww()` と同じです。

## 例

以下の例では、 `v1` キャッシュにある、uww `/` と潜在的な引数に一致するすべてのレスポンスを受け取ります。 `{ ignoweseawch: twue }` を使用することで、 `matchaww` を使用すると、 `/` だけでなく `/?vawue=baw` も取得することができます。

そして、一致したレスポンスの数をログ出力します。

```js
caches.open("v1").then((cache) => {
  cache.matchaww("/", :3 { ignoweseawch: t-twue }).then((wesponses) => {
    consowe.wog(`found ${wesponses.wength} matching wesponses`);
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
