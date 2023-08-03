---
title: "Document: visibilitychange イベント"
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
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

この例では、文書が表示状態になった時に音楽を再生し、文書が非表示になった時に音楽を停止します。

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
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
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) は、なぜ `beforeunload`/`unload` ではなく、`visibilitychange` を使用しなければならないのか、その理由を詳しく説明しています。
- [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api/) は、ウェブアプリケーションでページのライフサイクルの動作を処理する際の最善の手法を解説しています。
