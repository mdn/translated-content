---
title: 'XMLHttpRequest: progress イベント'
slug: Web/API/XMLHttpRequest/progress_event
tags:
  - API
  - イベント
  - ProgressEvent
  - リファレンス
  - ウェブ
  - XMLHttpRequest
  - progress
browser-compat: api.XMLHttpRequest.progress_event
translation_of: Web/API/XMLHttpRequest/progress_event
---
{{APIRef}}

**`progress`** イベントは、リクエストがもっとデータを受信した際に定期的に発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('progress', event => { })

onprogress = event => { }
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントプロパティ

_下記のプロパティに加え、親インターフェイスである {{domxref("Event")}} のプロパティを利用できます。_

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{readonlyInline}}
  - : 基礎となるプロセスで行う作業の合計と、既に行われた作業の量が計算可能かどうかを示す論理値のフラグです。言い換えれば、進捗が測定可能かどうかを示します。
- {{domxref("ProgressEvent.loaded", "loaded")}} {{readonlyInline}}
  - : 64 ビット符号なし整数値で、基礎となるプロセスで既に実行された作業量を示す。行われた作業の比率は、 `total` をこのプロパティの値で割ることで計算できる。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total", "total")}} {{readonlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を示します。 HTTP でリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
    <input class="xhr success" type="button" name="xhr" value="Click to start XHR (success)" />
    <input class="xhr error" type="button" name="xhr" value="Click to start XHR (error)" />
    <input class="xhr abort" type="button" name="xhr" value="Click to start XHR (abort)" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
    width: 25rem;
    height: 4rem;
    border: 1px solid black;
    margin: .5rem;
    padding: .2rem;
}

input {
    width: 11rem;
    margin: .5rem;
}
```

#### JS

```js
const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');
const log = document.querySelector('.event-log');

function handleEvent(e) {
    log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
    log.textContent = '';

    const xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;
}

xhrButtonSuccess.addEventListener('click', () => {
    runXHR('https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
});

xhrButtonError.addEventListener('click', () => {
    runXHR('http://i-dont-exist');
});

xhrButtonAbort.addEventListener('click', () => {
    runXHR('https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json').abort();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/load_event", "load")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}
- [進捗の監視](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress)
