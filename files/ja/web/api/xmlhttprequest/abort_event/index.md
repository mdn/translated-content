---
title: "XMLHttpRequest: abort イベント"
short-title: abort
slug: Web/API/XMLHttpRequest/abort_event
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

`abort` イベントは、例えばプログラムが {{domxref("XMLHttpRequest.abort()")}} を呼び出した時など、リクエストが中断されたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントプロパティ

_下記のプロパティに加え、親インターフェイスである {{domxref("Event")}} のプロパティを利用できます。_

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="Click to start XHR (success)" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="Click to start XHR (error)" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="Click to start XHR (abort)" />
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
  width: 11rem;
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
  runXHR("my-picture.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://example.com/some-path");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("my-picture.jpg").abort();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/load_event", "load")}}, {{domxref("XMLHttpRequest/progress_event", "progress")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
- [進捗の監視](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#進捗の監視)
