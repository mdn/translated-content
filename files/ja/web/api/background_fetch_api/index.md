---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{DefaultAPISidebar("Background Fetch API")}} {{SeeCompatTable}}

**Background Fetch API** は、動画や音声ファイル、ソフトウェアのような、時間のかかるダウンロードをうまく処理するためのメソッドを提供します。

## 概要と用途

ウェブアプリケーションがユーザーに大きなファイルをダウンロードさせる必要があるとき、よく起きる問題として、ユーザーがダウンロードの完了までページに接続し続けなければならないという問題があります。接続が切れたり、タブを閉じたり、ページを離れたりすると、ダウンロードは中止されてしまいます。

{{domxref("Background Synchronization API")}} を用いて、ユーザーが接続されるまでサービスワーカーに処理を延期させることができますが、この方法は大容量ファイルのダウンロードのような時間のかかる処理には使えません。バックグラウンド同期は、フェッチが完了するまでサービスワーカーが生き続ける必要がありますが、ブラウザーはバッテリーの寿命を長持ちさせるため、また、バックグラウンドで不要なタスクが発生することを防ぐために、途中でタスクを終了させてしまうでしょう。

Background Fetch API はこの問題を解決します。たとえば、ユーザーが動画をダウンロードするためのボタンをクリックしたときなどに、ウェブ開発者はブラウザーにバックグラウンドでフェッチを行うよう指示できるようになります。指示が行われると、ブラウザーはユーザーに見える形でフェッチを実行します。(ユーザーに進捗状況を表示し、ユーザーはダウンロードをキャンセルすることもできます。)ダウンロードが完了すると、ブラウザーはサービスワーカーを開きます。この時点で、アプリケーションは必要に応じて応答を処理できます。

Background Fetch API は、ユーザーがプロセスをオフラインで開始した場合にも、フェッチの発生を可能にします。一旦接続されると、処理が開始されます。ユーザーがオフラインになると、再びオンラインになるまでプロセスは一時停止します。

## インターフェイス

- {{domxref("BackgroundFetchManager")}}
  - : キーが background fetch のIDで、値が {{domxref("BackgroundFetchRegistration")}} のオブジェクトのマップ。
- {{domxref("BackgroundFetchRegistration")}}
  - : Background Fetch を表します。
- {{domxref("BackgroundFetchRecord")}}
  - : 個々のフェッチ要求と応答を表します。
- {{domxref("BackgroundFetchEvent")}}
  - : `onbackgroundfetchabort` と `onbackgroundfetchclick` に渡されるイベント型。
- {{domxref("BackgroundFetchUpdateUIEvent")}}
  - : `onbackgroundfetchsuccess` と `onbackgroundfetchfail` に渡されるイベント型。

## 例

Background Fetch を使用する前に、ブラウザーで利用可能か確認しましょう。

```js
if (!("BackgroundFetchManager" in self)) {
  // 代わりのダウンロード方法を用意してください。
}
```

Background Fetch の使用には登録済みのサービスワーカーが必要となります。そして、 `backgroundFetch.fetch()` を呼び出してフェッチを実行します。これは {{domxref("BackgroundFetchRegistration")}} で解決されるプロミスを返します。

バックグラウンドフェッチは、複数のファイルをフェッチすることができます。下記の例では、フェッチは MP3 ファイルと JPEG ファイルをリクエストします。このことは、ユーザーが 1 つのアイテムとして見ている、複数ファイルで構成されたパッケージ (たとえば、 podcast とアートワーク) を一度にダウンロードすることを可能にします。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

Background Fetch を実装したデモアプリは [こちら](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45) 。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
