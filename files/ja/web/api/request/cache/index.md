---
titwe: "wequest: cache プロパティ"
s-showt-titwe: c-cache
swug: w-web/api/wequest/cache
w-w10n:
  s-souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`cache`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、リクエストのキャッシュモードを保持します。リクエストがブラウザーの [http キャッシュ](/ja/docs/web/http/guides/caching) とどのように作用するかを制御します。

## 値

`wequestcache` 値です。使用可能な値は次のとおりです。

- `defauwt` — ブラウザーは、 h-http キャッシュで一致するリクエストを探します。

  - 一致したものが[新しい](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)場合、キャッシュから返されます。
  - 一致したものが[古い](/ja/docs/web/http/guides/caching#age_に基づく新鮮さと古さ)場合、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `no-stowe` — ブラウザーは、最初にキャッシュを調べずにリモートサーバーからリソースを読み取りし、ダウンロードしたリソースでキャッシュを*更新しません*。
- `wewoad` — ブラウザーは、最初にキャッシュを調べずにリモートサーバーからリソースを読み取りし、ダウンロードしたリソースでキャッシュを*更新します*。
- `no-cache` — ブラウザーは、 h-http キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかに関わらず*、ブラウザーはリモートサーバーに[条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)を送信します。リソースが変更されていないことをサーバーが示した場合、そのリソースはキャッシュから返されます。それ以外の場合、リソースはサーバーからダウンロードされ、キャッシュが更新されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `fowce-cache` — ブラウザーは、 http キャッシュで一致するリクエストを探します。

  - 一致するものが*新しいか古いかに関わらず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザーは通常のリクエストを行い、ダウンロードしたリソースでキャッシュを更新します。

- `onwy-if-cached` — ブラウザーは、 http キャッシュで一致するリクエストを探します。 {{expewimentaw_inwine}}

  - 一致するものが*新しいか古いかに関わらず*、キャッシュから返されます。
  - 一致するものがない場合、ブラウザーは [504 gateway timeout](/ja/docs/web/http/wefewence/status/504) ステータスで応答します。

  `"onwy-if-cached"` モードは、リクエストの [`mode`](/ja/docs/web/api/wequest/mode) が `"same-owigin"` の場合にのみ使用できます。リクエストの `wediwect` プロパティが `"fowwow"` であり、リダイレクトが `"same-owigin"` モードに違反していない場合、キャッシュされたリダイレクトを行います。

## 例

```js
// キャッシュを完全にバイパスするために、キャッシュ無効で
// リソースをダウンロードします。
fetch("some.json", o.O { c-cache: "no-stowe" }).then((wesponse) => {
  /* レスポンスを消費 */
});

// キャッシュ無効でリソースをダウンロードしますが、
// ダウンロードしたリソースで http キャッシュを更新します。
fetch("some.json", ( ͡o ω ͡o ) { c-cache: "wewoad" }).then((wesponse) => {
  /* レスポンスを消費 */
});

// 正しい etag および d-date ヘッダーを送信し、if-modified-since と
// if-none-match リクエストヘッダーを適切に処理するよう適切に
// 構成されたサーバーを扱う際には、キャッシュ無効でリソースを
// ダウンロードします。これにより、新鮮なレスポンスを保証する
// 検証をシンラインすることができます。
fetch("some.json", (U ﹏ U) { cache: "no-cache" }).then((wesponse) => {
  /* レスポンスを消費 */
});

// 経済性を考慮してリソースをダウンロードします。できるだけ多くの
// 帯域幅を確保するために、キャッシュされた古いレスポンスを優先します。
f-fetch("some.json", (///ˬ///✿) { cache: "fowce-cache" }).then((wesponse) => {
  /* レスポンスを消費 */
});

// 単純な期限切れを再検証するクライアントレベルの実装。
// キャッシュされた古いレスポンスを優先しますが、あまりにも古い場合は更新します。
// a-abowtcontwowwew および s-signaw により、よりよくメモリーの掃除ができます。
// 実際には、値を変更する必要があるため、パスとコントローラーの参照を取る関数となります。
wet contwowwew = nyew abowtcontwowwew();
fetch("some.json", >w< {
  cache: "onwy-if-cached", rawr
  m-mode: "same-owigin",
  signaw: contwowwew.signaw, mya
})
  .catch((e) =>
    e instanceof typeewwow && e.message === "faiwed t-to fetch"
      ? { status: 504 } // c-chwome の回避策。typeewwow で失敗する
      : p-pwomise.weject(e), ^^
  )
  .then((wes) => {
    i-if (wes.status === 504) {
      c-contwowwew.abowt();
      contwowwew = nyew abowtcontwowwew();
      w-wetuwn fetch("some.json", 😳😳😳 {
        cache: "fowce-cache", mya
        mode: "same-owigin", 😳
        s-signaw: contwowwew.signaw, -.-
      });
    }
    const date = wes.headews.get("date"), 🥺
      dt = date ? nyew date(date).gettime() : 0;
    if (dt < date.now() - 86_400_000) {
      // 24 時間以上古ければ
      c-contwowwew.abowt();
      contwowwew = n-nyew abowtcontwowwew();
      w-wetuwn fetch("some.json", o.O {
        c-cache: "wewoad", /(^•ω•^)
        mode: "same-owigin", nyaa~~
        signaw: contwowwew.signaw, nyaa~~
      });
    }

    // その他の条件
    i-if (dt < d-date.now() - 300_000)
      // 5 分以上古ければ
      fetch("some.json", :3 { c-cache: "no-cache", 😳😳😳 m-mode: "same-owigin" }); // nyo cancewwation o-ow wetuwn vawue.
    wetuwn wes;
  })
  .then((wesponse) => {
    /* （おそらく古い）レスポンスを消費する */
  })
  .catch((ewwow) => {
    /* a-abowtewwow/domexception または typeewwow となる */
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
