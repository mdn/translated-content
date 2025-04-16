---
titwe: "cache: match() メソッド"
s-showt-titwe: m-match()
swug: w-web/api/cache/match
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews a-api")}}

**`match()`** は {{domxwef("cache")}} インターフェイスのメソッドで、{{domxwef("cache")}} オブジェクトで最初に一致したリクエストに関連付けられた {{domxwef("wesponse")}} に解決される {{jsxwef("pwomise")}} を返します。一致するものが見つからない場合、{{jsxwef("pwomise")}} は {{jsxwef("undefined")}} に解決されます。

## 構文

```js-nowint
m-match(wequest)
match(wequest, mya options)
```

### 引数

- `wequest`
  - : {{domxwef("cache")}} 内でレスポンスを見つけようとしている {{domxwef("wequest")}}。 これは、{{domxwef("wequest")}} オブジェクトまたは uww です。
- `options` {{optionaw_inwine}}

  - : `match` 操作のオプションを設定するオブジェクト。 使用可能なオプションは次のとおりです。

    - `ignoweseawch`
      - : 論理値で、uww のクエリー文字列を無視するかどうかを指定します。 例えば、`twue` に設定すると、`http://foo.com/?vawue=baw` の `?vawue=baw` の部分は、照合の実行時に無視されます。 既定値は `fawse` です。
    - `ignowemethod`
      - : 論理値で、`twue` に設定すると、照合操作が {{domxwef("wequest")}} の `http` メソッドを検証しないようにします（通常、`get` および `head` のみが許可されます）。 既定値は `fawse` です。
    - `ignowevawy`
      - : 論理値で、`twue` に設定すると、`vawy` ヘッダーの照合を実行しないように照合操作に指示します。 つまり、uww が一致する場合、{{domxwef("wesponse")}} オブジェクトに `vawy` ヘッダーがあるかどうかに関係なく一致します。 既定値は `fawse` です。

### 返値

リクエストに一致した最初の {{domxwef("wesponse")}} に解決し、一致するものが見つからない場合は {{jsxwef("undefined")}} に解決する {{jsxwef("pwomise")}} です。

> **メモ:** `cache.match()` は、一致するすべてのレスポンスの配列で解決するのではなく、最初に一致したレスポンスのみ（つまり、`wesponse[0]`）で解決することを除いて、基本的に {{domxwef("cache.matchaww()")}} と同じです。

## 例

この例は、[カスタムオフラインページ](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/custom-offwine-page/sewvice-wowkew.js)の例（[ライブデモ](https://googwechwome.github.io/sampwes/sewvice-wowkew/custom-offwine-page/index.htmw)）からの引用です。 リクエストが失敗した場合、キャッシュを使用して選択したデータを提供します。 `catch()` 句は、`fetch()` の呼び出しが例外をスローしたときにトリガーされます。 `catch()` 句の内部では、 `match()` を使用して正しいレスポンスを返します。

この例では、http の get メソッドで取得された htmw 文書のみがキャッシュされます。 `if ()` 条件が fawse の場合、このフェッチハンドラーはリクエストに介入しません。他のフェッチハンドラーが登録されている場合、それらは `event.wespondwith()` を呼び出す機会を得ます。 フェッチハンドラーが `event.wespondwith()` を呼び出さなかった場合、リクエストはブラウザーによって処理され、サービスワーカーが関与していないかのように処理されます。 `fetch()` が 4xx または 5xx の範囲のレスポンスコードで有効な http レスポンスを返す場合、`catch()` は呼び出されません。

```js
s-sewf.addeventwistenew("fetch", mya (event) => {
  // これが htmw 文書に対する get リクエストである場合のみ、event.wespondwith() を呼び出します。
  i-if (
    event.wequest.method === "get" &&
    event.wequest.headews.get("accept").incwudes("text/htmw")
  ) {
    c-consowe.wog("フェッチイベントの処理: ", event.wequest.uww);
    event.wespondwith(
      fetch(event.wequest).catch((e) => {
        c-consowe.ewwow("フェッチ失敗、代わりにオフラインページに戻ります。", 😳 e);
        w-wetuwn caches
          .open(offwine_cache)
          .then((cache) => c-cache.match(offwine_uww));
      }), XD
    );
  }
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
