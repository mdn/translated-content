---
title: "Document: visibilitychange イベント"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{APIRef}}

`visibilitychange` イベントは、タブのコンテンツが表示状態または非表示状態になったときに document に発生します。

このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 使用上の注意

このイベントには、更新された文書の表示・非表示状態が含まれていませんが、この情報は document の {{domxref("Document.visibilityState", "visibilityState")}} プロパティから取得することができます。

このイベントは、ユーザーが新しいページに移動したり、タブを切り替えたり、タブを閉じたり、ブラウザーを最小化したり閉じたりしたとき、あるいはモバイルではブラウザーから異なる形のアプリに切り替えたときに `visibilityState` が `hidden` になった状態で発行されます。 `hidden` への遷移はページが確実に監視できる最後のイベントなので、開発者はそれをユーザーのセッションの終わりとして扱うべきです（例えば[解析データの送信](/ja/docs/Web/API/Navigator/sendBeacon)の場合）。

また、 `hidden` への遷移は、ページが UI の更新を停止し、ユーザーがバックグラウンドで実行させたくないタスクを停止するための良いタイミングでもあります。

## 例

### 非表示に遷移した際に音楽を一時停止

この例は、ページが非表示になると音声再生を一時停止し、ページが再び表示されると再生を再開します。
完全な例については、[Page Visibility API: Pausing audio on page hide](/ja/docs/Web/API/Page_Visibility_API#pausing_audio_on_page_hide) ドキュメントを参照してください。

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else {
    // 音声が "playing on hide" であった場合は復旧する
    if (playingOnHide) {
      audio.play();
    }
  }
});
```

### 非表示に遷移した際に解析のセッション終了を送信

この例では、 `hidden` への遷移をユーザーセッションの終わりとして扱い、 {{domxref("Navigator.sendBeacon()")}} API を使って適切な解析を送信しています。

```js
document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ページ可視性 API](/ja/docs/Web/API/Page_Visibility_API)
- {{domxref("Document.visibilityState")}}
- {{domxref("Document.hidden")}}
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) は、なぜ `beforeunload`/`unload` ではなく、`visibilitychange` を使用しなければならないのか、その理由を詳しく説明しています。
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) は、ウェブアプリケーションでページのライフサイクルの動作を処理する際の最善の手法を解説しています。
