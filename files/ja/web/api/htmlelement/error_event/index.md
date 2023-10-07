---
title: "HTMLElement: error イベント"
short-title: error
slug: Web/API/HTMLElement/error_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

`error` イベントは、リソースの読み取りに失敗したり、使用できなかったりした場合に要素に発生します。例えば、スクリプトの実行エラーがあったり、画像が見つからないか無効であった場合などです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

イベントオブジェクトは、ユーザーインターフェイス要素から生成された場合は {{domxref("UIEvent")}} のインスタンスとなり、それ以外の場合は {{domxref("Event")}} となります。

{{InheritanceDiagram("UIEvent")}}

## 例

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="img-error" type="button">Generate image error</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");

const badImg = document.querySelector(".bad-img");
badImg.addEventListener("error", (event) => {
  log.textContent += `${event.type}: Loading image\n`;
  console.log(event);
});

const imgError = document.querySelector("#img-error");
imgError.addEventListener("click", () => {
  badImg.setAttribute("src", "i-dont-exist");
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント:

  - Window: {{domxref("Window/error_event", "error")}} イベント
  - HTMLElement: {{domxref("HTMLElement/load_event", "load")}} イベント
