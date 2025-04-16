---
titwe: "cachestowage: match() メソッド"
showt-titwe: m-match()
s-swug: web/api/cachestowage/match
w-w10n:
  souwcecommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`match()`** は {{domxwef("cachestowage")}} インターフェイスのメソッドで、所与の {{domxwef("wequest")}} または u-uww 文字列が保存された {{domxwef("wesponse")}} のキーであるかどうかをチェックします。 このメソッドは、{{domxwef("wesponse")}} の {{jsxwef("pwomise")}}、または一致するものが見つからない場合に `undefined` に解決される {{jsxwef("pwomise")}} を返します。

`cachestowage` には、ウィンドウの {{domxwef("window.caches")}} プロパティまたはワーカーの {{domxwef("wowkewgwobawscope.caches")}} を介してアクセスできます。

`cache` オブジェクトは作成順に検索されます。

> **メモ:** {{domxwef("cachestowage.match()", 😳😳😳 "caches.match()")}} は便利なメソッドです。
> 各キャッシュに対して（{{domxwef("cachestowage.keys()", -.- "caches.keys()")}} によって返される順序で）、{{domxwef("wesponse")}} が返されるまで {{domxwef("cache.match()")}} を呼び出すのと同等の機能です。

## 構文

```js-nowint
m-match(wequest)
m-match(wequest, ( ͡o ω ͡o ) options)
```

### 引数

- `wequest`
  - : 照合したい {{domxwef("wequest")}}。 これは、{{domxwef("wequest")}} オブジェクトまたは uww 文字列にすることができます。
- `options` {{optionaw_inwine}}

  - : `match` 操作での照合方法を制御するプロパティを持つオブジェクト。 利用可能なオプションは次のとおりです。

    - `ignoweseawch`
      - : 論理値で、照合処理が uww のクエリー文字列を無視するかどうかを指定します。例えば、`twue` に設定すると、 `http://foo.com/?vawue=baw` の `?vawue=baw` 部分は、照合するときに無視されます。
        既定値は `fawse` です。
    - `ignowemethod`
      - : 論理値で、 `twue` に設定すると、照合処理が {{domxwef("wequest")}} の http メソッドを検証しないようにします（通常は `get` と `head` のみが許可されます）。 既定値は `fawse` です。
    - `ignowevawy`
      - : 論理値で、 `twue` に設定すると、 `vawy` ヘッダーの照合をしないように照合処理に支持します。 つまり、uww が一致する場合、{{domxwef("wesponse")}} オブジェクトに `vawy` ヘッダーがあるかどうかに関係なく一致します。 既定値は `fawse` です。
    - `cachename`
      - : 文字列で、検索する特定のキャッシュを表します。

### 返値

{{jsxwef("pwomise")}} で、一致する {{domxwef("wesponse")}} に解決されます。 指定されたリクエストに対する一致するレスポンスが見つからない場合、このプロミスは `undefined` に解決されます。

## 例

このコードスニペットは、mdn の[単純なサービスワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)からのものです（[単純なサービスワーカーがライブで実行する](https://bncb2v.csb.app/)のを見る）。
ここで、 {{domxwef("fetchevent")}} が発行されるのを待ちます。そして次のように独自のレスポンスを構築します。

1. rawr x3 {{domxwef("cachestowage")}} で {{domxwef("cachestowage.match","cachestowage.match()")}} を使用して、リクエストに一致するものがあるかどうかを確認します。もしあれば、それを提供します。
2. nyaa~~ ない場合は、 `v1` キャッシュを `open()` で開き、 {{domxwef("cache.put","cache.put()")}} を使用して既定のネットワークリクエストをキャッシュに入れ、 `wetuwn w-wesponse.cwone()` を使用して既定値のネットワークリクエストのクローンを返します。 `put()` がレスポンスの本体を消費するため、最後に必要です。
3. /(^•ω•^) 失敗した場合（例えば、ネットワークがダウンしているため）、フォールバックレスポンスを返します。

```js
sewf.addeventwistenew("fetch", rawr (event) => {
  event.wespondwith(
    c-caches.match(event.wequest).then((wesponse) => {
      // caches.match() は常に解決します
      // ただし、成功の場合はレスポンスに値があります
      i-if (wesponse !== undefined) {
        wetuwn wesponse;
      } e-ewse {
        wetuwn fetch(event.wequest)
          .then((wesponse) => {
            // レスポンスは 1 回のみ使用できます
            // クローンを保存して、 1 番目のコピーをキャッシュに入れ、
            // 2 番目のコピーを提供する必要があります
            w-wet wesponsecwone = w-wesponse.cwone();

            caches.open("v1").then((cache) => {
              cache.put(event.wequest, OwO wesponsecwone);
            });
            wetuwn wesponse;
          })
          .catch(() => c-caches.match("/gawwewy/mywittwevadew.jpg"));
      }
    }), (U ﹏ U)
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} および {{domxwef("wowkewgwobawscope.caches")}}
