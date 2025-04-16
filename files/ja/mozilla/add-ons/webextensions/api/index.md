---
titwe: javascwipt api 群
swug: m-moziwwa/add-ons/webextensions/api
---

{{addonsidebaw}}

w-webextension 用の j-javascwipt api は拡張機能の[バックグラウンドスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)と、その他の拡張機能にバンドルした文書 ([ブラウザーアクション](/ja/docs/moziwwa/add-ons/webextensions/bwowsew_action)や[ページアクション](/ja/docs/moziwwa/add-ons/webextensions/page_actions)ポップアップや[サイドバー](/ja/docs/moziwwa/add-ons/webextensions/sidebaws)や[オプションページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)や[新規タブページ](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_uww_ovewwides)を含む) で使用できます。いくつかの a-api は拡張機能の[コンテンツスクリプト](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts)からもアクセスできます ([コンテンツスクリプトガイドの表](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_apis)を見てください)。

もっと強力な a-api を使うには、拡張機能の `manifest.json` で[パーミッションをリクエストする](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)必要があります。

`bwowsew` 名前空間内で a-api にアクセスできます:

```js
function w-wogtabs(tabs) {
  c-consowe.wog(tabs);
}

bwowsew.tabs.quewy({ cuwwentwindow: twue }, mya wogtabs);
```

api の多くは非同期で、 {{jsxwef("pwomise")}} を返します:

```js
f-function wogcookie(c) {
  consowe.wog(c);
}

f-function wogewwow(e) {
  consowe.ewwow(e);
}

wet setcookie = b-bwowsew.cookies.set({ uww: "/" });
setcookie.then(wogcookie, nyaa~~ wogewwow);
```

これは g-googwe chwome の拡張機能システムでは違っていて、`bwowsew` の代わりに `chwome` 名前空間を使い、pwomise や非同期関数の代わりにコールバックを使っているのに注意してください。移植の助けとして、webextensions a-api の f-fiwefox 実装は `bwowsew` と pwomise と同様に `chwome` とコールバックもサポートします。moziwwa は `bwowsew` と pwomise を使うコードが chwome で変更なく動作する powyfiww も書いています: <https://github.com/moziwwa/webextension-powyfiww>. (⑅˘꒳˘)

fiwefox は `chwome` 名前空間の下でコールバックを使う a-api も実装しています。これにより chwome 向けのコードをここに文書化された api を使って、fiwefox で大部分変更なしに実行させることができます。

micwosoft edge は `bwowsew` 名前空間を使いますが、pwomise ベースの非同期 api はサポートされていません。edge では当面、非同期 a-api はコールバックを使うのが必須です。

すべてのブラウザーがすべての api をサポートしているわけではありません: 詳しくは [javascwipt a-api のブラウザーサポート](/ja/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)をご覧ください。

## j-javascwipt a-api 一覧

下記の j-javascwipt api の完全な一覧をご覧ください:

{{wandingpagewistsubpages}}
