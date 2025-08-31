---
title: "XMLHttpRequestEventTarget: load イベント"
short-title: load
slug: Web/API/XMLHttpRequestEventTarget/load_event
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`load` イベントは {{domxref("XMLHttpRequest")}} のトランザクションが完全に完了したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値のフラグで、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示します。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### XMLHttpRequest での使い方

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="クリックで XHR 開始（成功）" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="クリックで XHR 開始（エラー）" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="クリックで XHR 開始（中止）" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 4rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

input {
  width: 13rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButtonSuccess = document.querySelector(".xhr.success");
const xhrButtonError = document.querySelector(".xhr.error");
const xhrButtonAbort = document.querySelector(".xhr.abort");
const log = document.querySelector(".event-log");

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

function runXHR(url) {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}

xhrButtonSuccess.addEventListener("click", () => {
  runXHR("image.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://somewhere.org/i-dont-exist");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("image.jpg").abort();
});
```

#### 結果

{{ EmbedLiveSample('Usage with XMLHttpRequest', '100%', '150px') }}

### XMLHttpRequestUpload での使い方

`load` イベントを使用すると、アップロードが正常に終了したことを検出することができます。ファイルをアップロードしてプログレスバーを表示する完全なコード例については、メインの {{domxref("XMLHttpRequestUpload")}} ページを参照してください。

```js
// アップロードが完了したら、プログレスバーを非表示にする
xhr.upload.addEventListener("load", (event) => {
  progressBar.classList.remove("visible");
  log.textContent = "Upload finished.";
  abortButton.disabled = true;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}, {{domxref("XMLHttpRequestEventTarget/error_event", "error")}}, {{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}, {{domxref("XMLHttpRequestEventTarget/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}
