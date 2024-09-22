---
title: "Window: unload イベント"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef}}

> [!WARNING]
> 開発者はこのイベントを使用するのを避けてください。下記の「使用上のメモ」を参照してください。

**`unload`** イベントは、文書または子リソースがアンロードされるときに発生します。

以下のイベントの後に発生します。

- {{domxref("Window/beforeunload_event", "beforeunload")}} (キャンセル可能なイベント)
- {{domxref("Window/pagehide_event", "pagehide")}}

文書は以下のような状態にあります。

- すべてのリソースがまだ存在する（img、iframe など）
- エンドユーザーから見えるものは何もない
- UI 操作の効果がない（{{domxref("window.open")}}, {{domxref("window.alert", "alert")}}, {{domxref("window.confirm", "confirm")}}, など）
- エラーが発生しても、アンロードの処理の流れは停止しない

unload イベントは文書ツリーにも続くことに注意してください。親フレームのアンロードは、子フレームの `unload` の**前**に行われます（以下の例を参照）。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("unload", (event) => {});
onunload = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## イベントハンドラーの別名

`Window` インターフェイスに加えて、イベントハンドラープロパティ `onunload` は以下のターゲットでも利用できます。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 使用上のメモ

開発者はこのイベントを使用しないでください。

特にモバイルでは `unload` イベントが確実には発行されません。例えば、次の例では `unload` イベントはまったく発生しません。

1. モバイルユーザーがページにアクセスします。
2. その後、ユーザーが異なるアプリに切り替えます。
3. その後、ユーザーがアプリマネージャーからブラウザーを閉じます。

また、 `unload` イベントは[前方/後方キャッシュ](https://web.dev/articles/bfcache) (bfcache) と互換性がありません。このイベントを使用している多くのページは、イベントが発生した後はページが存在し続けないことを想定しているからです。これに対抗するため、いくつかのブラウザー（Firefox など）は unload リスナーがある場合、ページを bfcache に配置しませんが、これはパフォーマンスにとって悪いことです。他にも、 Chrome のように、ユーザーが操作しても `unload` を発行しないものもあります。

ユーザーのセッションの終わりを指示するために使用するのに最適なイベントは [`visibilitychange`](/ja/docs/Web/API/Document/visibilitychange_event) イベントです。 `visibilitychange` に対応していないブラウザーでは、 [`pagehide`](/ja/docs/Web/API/Window/pagehide_event) イベントが次善の選択肢となります。

ページのアンロードイベントを検出する場合は、 `pagehide` イベントを待ち受けするのがベストです。

`unload` イベントに関連する問題についての詳しい情報は、[ページライフサイクル API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) ガイドを参照してください。

## 例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", (event) => {
        console.log("I am the 3rd one.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

`child-frame.html` の内容を以下に示します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", (event) => {
        console.log("I am the 4th and last one…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

親フレームがアンロードされると、 `console.log()` のメッセージに記述された順序でイベントが発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- [`visibilitychange`](/ja/docs/Web/API/Document/visibilitychange_event) イベント
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) は、 `beforeunload`/`unload` ではなく、 `visibilitychange` を使用する理由について詳しく説明しています。
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) は、ウェブアプリケーションでページのライフサイクル動作を処理するための最善の手法を提供します。
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): ページのライフサイクル動作におけるブラウザー間の不整合に対処する JavaScript ライブラリーです。
- [Back/forward cache](https://web.dev/articles/bfcache) は前方/後方キャッシュとは何か、そして様々なページライフサイクルイベントに対するその意味について説明しています。
