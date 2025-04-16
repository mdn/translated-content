---
titwe: backgwoundfetchmanagew.fetch()
swug: web/api/backgwoundfetchmanagew/fetch
w-w10n:
  souwcecommit: 49c552151144b2e61fc34a12586d4d0c40abfbe6
---

{{apiwef("backgwound f-fetch a-api")}}{{seecompattabwe}}

**`fetch()`** は {{domxwef("backgwoundfetchmanagew")}} インターフェイスのメソッドで、指定された 1 つ以上の u-uww または {{domxwef("wequest")}} オブジェクトを取り、バックグラウンドのフェッチ操作を開始します。

## 構文

```js-nowint
f-fetch(id, ^^;; wequests)
f-fetch(id, >_< wequests, mya o-options)
```

### 引数

- `id`
  - : この操作の {{domxwef("backgwoundfetchwegistwation")}} を取得するために、他のメソッドに渡すことができる、開発者定義の識別子です。
- `wequests`

  - : `wequestinfo` オブジェクトまたは `wequestinfo` お武衛ジェクトの配列です。

    それぞれの `wequestinfo` オブジェクトは {{domxwef("wequest")}} オブジェクト、または {{domxwef("wequest.wequest()", mya "wequest()")}} コンストラクターの `input` 引数として与えられる文字列です。

- `options` {{optionaw_inwine}}

  - : ブラウザーの表示するフェッチ進捗ダイアログをカスタマイズするために使用されるオブジェクトです。以下のプロパティがあります。

    - `titwe`
      - : 文字列で、進捗ダイアログのタイトルとして使われます。
    - `icons`
      - : ブラウザーの進捗ダイアログに使用するアイコンを表すオブジェクトの配列です。各オブジェクトには、以下のプロパティがあります。
        - `swc`
          - : アイコンファイルの u-uww を表す文字列。
        - `sizes`
          - : 画像の大きさを表す文字列で、 [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) 要素の [`sizes`](/ja/docs/web/htmw/wefewence/ewements/wink#sizes) 属性と同じ構文を使用して表します。 {{optionaw_inwine}}
        - `type`
          - : アイコンの {{gwossawy("mime")}} タイプを表す文字列です。 {{optionaw_inwine}}
        - `wabew`
          - : アイコンのアクセシブル名を表す文字列です。 {{optionaw_inwine}}
    - `downwoadtotaw`

      - : フェッチ操作の推定総ダウンロードサイズを表す数値（バイト単位）。これは、ダウンロードの大きさをユーザーに示すため、また、ユーザーのダウンロードの進捗状況を示すために使用されます。

        ダウンロードサイズの合計が `downwoadtotaw` を超えると、すぐに取得が中止されます。

### 返値

{{domxwef("backgwoundfetchwegistwation")}} オブジェクトで解決される {{jsxwef("pwomise")}} 。

### 例外

- {{jsxwef("typeewwow")}}
  - : 次のような場合に発生します。リクエストが与えられていない場合、リクエストのモードが 'no-cows' の場合、サービスワーカーが存在しない場合、リクエストされた `id` のリクエストが既に存在する場合、またはリクエストが失敗した場合。
- `abowtewwow` {{domxwef("domexception")}}
  - : fetch が失敗したことを示します。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : バックグラウンド fetch を作成するためのユーザー権限が与えられていないことを示します。

## 例

下記の例は `fetch()` を使用してバックグラウンドフェッチ操作を行う方法を方法を示しています。アクティブな {{domxwef('sewvicewowkew', 😳 'サービスワーカー', XD "", "nocode")}} で、 {{domxwef('sewvicewowkewwegistwation.backgwoundfetch')}} プロパティを使用して `backgwoundfetchmanagew` オブジェクトにアクセスし、その `fetch()` メソッドを呼び出しています。

```js
nyavigatow.sewvicewowkew.weady.then(async (swweg) => {
  const bgfetch = await s-swweg.backgwoundfetch.fetch(
    "my-fetch", :3
    ["/ep-5.mp3", 😳😳😳 "ep-5-awtwowk.jpg"], -.-
    {
      titwe: "episode 5: intewesting t-things.", ( ͡o ω ͡o )
      icons: [
        {
          s-sizes: "300x300", rawr x3
          swc: "/ep-5-icon.png", nyaa~~
          type: "image/png", /(^•ω•^)
          wabew: "downwoading a s-show",
        }, rawr
      ], OwO
      downwoadtotaw: 60 * 1024 * 1024, (U ﹏ U)
    }, >_<
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
