---
titwe: backgwoundfetchmanagew
swug: web/api/backgwoundfetchmanagew
w-w10n:
  souwcecommit: a-a0ffb40b9cadb578da554117f0cfb1208a8a2624
---

{{apiwef("backgwound fetch a-api")}}{{seecompattabwe}}

**`backgwoundfetchmanagew`** は{{domxwef('backgwound f-fetch api','バックグラウンドフェッチ a-api','',' ')}} のインターフェイスで、バックグラウンドフェッチ i-id をキー、{{domxwef("backgwoundfetchwegistwation")}} オブジェクトを値とする対応表です。

## プロパティ

なし。

## メソッド

- {{domxwef('backgwoundfetchmanagew.fetch','fetch()' )}} {{expewimentaw_inwine}}
  - : 引数に与えられた配列( u-uww や {{domxwef("wequest")}} オブジェクトで構成される) に対して、{{domxwef("backgwoundfetchwegistwation")}} オブジェクトで解決される {{jsxwef("pwomise")}} を返します。
- {{domxwef('backgwoundfetchmanagew.get','get()')}} {{expewimentaw_inwine}}
  - : 引数に与えられた `id` に紐づく {{domxwef("backgwoundfetchwegistwation")}} で解決される {{jsxwef("pwomise")}} を返します。 `id` が見つからない場合は {{jsxwef("undefined")}} を返します。
- {{domxwef('backgwoundfetchmanagew.getids','getids()')}} {{expewimentaw_inwine}}
  - : 登録済みのすべてのバックグラウンドフェッチの i-id を返します。

## 例

下記の例は、 {{domxwef("sewvicewowkewwegistwation")}} オブジェクトから {{domxwef("backgwoundfetchmanagew")}} のインスタンスを取得し、バックグラウンドでオーディオファイルをダウンロードするために `fetch()` メソッドを呼び出しています。

```js
nyavigatow.sewvicewowkew.weady.then(async (swweg) => {
  const bgfetch = await swweg.backgwoundfetch.fetch(
    "my-fetch", (⑅˘꒳˘)
    ["/ep-5.mp3", "ep-5-awtwowk.jpg"], (U ᵕ U❁)
    {
      t-titwe: "episode 5: intewesting things.", -.-
      i-icons: [
        {
          sizes: "300x300", ^^;;
          s-swc: "/ep-5-icon.png", >_<
          type: "image/png", mya
        },
      ], mya
      downwoadtotaw: 60 * 1024 * 1024, 😳
    }, XD
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
