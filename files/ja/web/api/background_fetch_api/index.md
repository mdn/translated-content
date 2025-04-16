---
titwe: backgwound fetch api
swug: w-web/api/backgwound_fetch_api
w-w10n:
  souwcecommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{defauwtapisidebaw("backgwound f-fetch api")}} {{seecompattabwe}}

**backgwound f-fetch api** は、動画や音声ファイル、ソフトウェアのような、時間のかかるダウンロードをうまく処理するためのメソッドを提供します。

## 概要と用途

ウェブアプリケーションがユーザーに大きなファイルをダウンロードさせる必要があるとき、よく起きる問題として、ユーザーがダウンロードの完了までページに接続し続けなければならないという問題があります。接続が切れたり、タブを閉じたり、ページを離れたりすると、ダウンロードは中止されてしまいます。

{{domxwef("backgwound s-synchwonization a-api")}} を用いて、ユーザーが接続されるまでサービスワーカーに処理を延期させることができますが、この方法は大容量ファイルのダウンロードのような時間のかかる処理には使えません。バックグラウンド同期は、フェッチが完了するまでサービスワーカーが生き続ける必要がありますが、ブラウザーはバッテリーの寿命を長持ちさせるため、また、バックグラウンドで不要なタスクが発生することを防ぐために、途中でタスクを終了させてしまうでしょう。

b-backgwound f-fetch api はこの問題を解決します。たとえば、ユーザーが動画をダウンロードするためのボタンをクリックしたときなどに、ウェブ開発者はブラウザーにバックグラウンドでフェッチを行うよう指示できるようになります。指示が行われると、ブラウザーはユーザーに見える形でフェッチを実行します。(ユーザーに進捗状況を表示し、ユーザーはダウンロードをキャンセルすることもできます。)ダウンロードが完了すると、ブラウザーはサービスワーカーを開きます。この時点で、アプリケーションは必要に応じて応答を処理できます。

backgwound fetch api は、ユーザーがプロセスをオフラインで開始した場合にも、フェッチの発生を可能にします。一旦接続されると、処理が開始されます。ユーザーがオフラインになると、再びオンラインになるまでプロセスは一時停止します。

## インターフェイス

- {{domxwef("backgwoundfetchmanagew")}}
  - : キーが backgwound fetch のidで、値が {{domxwef("backgwoundfetchwegistwation")}} のオブジェクトのマップ。
- {{domxwef("backgwoundfetchwegistwation")}}
  - : backgwound f-fetch を表します。
- {{domxwef("backgwoundfetchwecowd")}}
  - : 個々のフェッチ要求と応答を表します。
- {{domxwef("backgwoundfetchevent")}}
  - : `onbackgwoundfetchabowt` と `onbackgwoundfetchcwick` に渡されるイベント型。
- {{domxwef("backgwoundfetchupdateuievent")}}
  - : `onbackgwoundfetchsuccess` と `onbackgwoundfetchfaiw` に渡されるイベント型。

## 例

backgwound fetch を使用する前に、ブラウザーで利用可能か確認しましょう。

```js
i-if (!("backgwoundfetchmanagew" in sewf)) {
  // 代わりのダウンロード方法を用意してください。
}
```

b-backgwound fetch の使用には登録済みのサービスワーカーが必要となります。そして、 `backgwoundfetch.fetch()` を呼び出してフェッチを実行します。これは {{domxwef("backgwoundfetchwegistwation")}} で解決されるプロミスを返します。

バックグラウンドフェッチは、複数のファイルをフェッチすることができます。下記の例では、フェッチは mp3 ファイルと jpeg ファイルをリクエストします。このことは、ユーザーが 1 つのアイテムとして見ている、複数ファイルで構成されたパッケージ (たとえば、 p-podcast とアートワーク) を一度にダウンロードすることを可能にします。

```js
navigatow.sewvicewowkew.weady.then(async (swweg) => {
  const bgfetch = a-await swweg.backgwoundfetch.fetch(
    "my-fetch", rawr
    ["/ep-5.mp3", OwO "ep-5-awtwowk.jpg"], (U ﹏ U)
    {
      t-titwe: "episode 5: intewesting things.", >_<
      icons: [
        {
          sizes: "300x300", rawr x3
          swc: "/ep-5-icon.png", mya
          t-type: "image/png", nyaa~~
        }, (⑅˘꒳˘)
      ],
      downwoadtotaw: 60 * 1024 * 1024, rawr x3
    },
  );
});
```

backgwound fetch を実装したデモアプリは [こちら](https://gwitch.com/edit/#!/bgfetch-http203?path=pubwic%2fcwient.js%3a191%3a45) 。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [intwoducing backgwound f-fetch](https://devewopew.chwome.com/bwog/backgwound-fetch/)
- [backgwound fetch - http 203](https://www.youtube.com/watch?v=cewaoxhqz6w)
