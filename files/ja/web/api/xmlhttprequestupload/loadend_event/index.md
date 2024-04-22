---
title: "XMLHttpRequestUpload: loadend イベント"
short-title: loadend
slug: Web/API/XMLHttpRequestUpload/loadend_event
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`loadend`** イベントは、リクエストが完全に完了したとき（{{domxref("XMLHttpRequestUpload/load_event", "load")}} の後、または失敗したとき（{{domxref("XMLHttpRequestUpload/abort_event", "abort")}} の後）、または（{{domxref("XMLHttpRequestUpload/error_event", "error")}} の後）に発行されます。

`loadend` イベントは、リクエストが中断されたとき（{{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}、{{domxref("XMLHttpRequestUpload/abort_event", "abort")}}、{{domxref("XMLHttpRequestUpload/error_event", "error")}}）にも送られます。このような場合、イベントの `loaded` と `total` の値はどちらも 0 になります。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("loadend", (event) => {});

onloadend = (event) => {};
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

## `loadend` イベントの使用

`loadend` イベントを使用して、アップロードの終了（成功または失敗）を検出することができます。ファイルをアップロードして進捗バーを表示する完全なコード例については、メインの {{domxref("XMLHttpRequestUpload")}} ページを参照してください。

```js
// アップロードが完了したら、進捗バーを非表示にする
xhr.upload.addEventListener("loadend", (event) => {
  progressBar.classList.remove("visible");
  if (event.loaded !== 0) {
    // 成功裏に完了
    log.textContent = "アップロードが完了しました。";
  }
  abortButton.disabled = true;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
