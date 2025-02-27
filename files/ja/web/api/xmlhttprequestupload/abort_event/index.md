---
title: "XMLHttpRequestUpload: abort イベント"
short-title: abort
slug: Web/API/XMLHttpRequestUpload/abort_event
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

`abort` は {{domxref("XMLHttpRequestUpload")}} で発生するイベントで、例えばプログラムが {{domxref("XMLHttpRequest.abort()")}} を呼び出したためにリクエストが中断されたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### `abort` イベントの使用

`abort` イベントを使用すると、アップロードが完了する前に停止させることができます。ファイルをアップロードして進捗バーを表示する完全なコード例については、メインの {{domxref("XMLHttpRequestUpload")}} ページを参照してください。

```js
// 中止の場合、プログレスバーを非表示にする
// これらのイベントは xhr オブジェクトでも待ち受けすることができることに注意
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("abort", errorAction);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
