---
title: "Window: load イベント"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 367358d6847aa1766344951207dfd79d5c073a66
---

{{APIRef}}

**`load`** イベントは、ページ全体が、スタイルシートや画像などのすべての依存するリソースを含めて読み込まれたときに発生します。
これは {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} が、ページの DOM の読み込みが完了すれば、リソースの読み込みが完了するのを待たずに発生するのと対照的です。

このイベントはキャンセル不可で、バブリングしません。

> [!NOTE]
> たとえ `bubbles` が `true` に初期化されていても、 `load` という名前のイベントはすべて `window` に伝搬しません。 `window` 上で `load` イベントを捕捉するには、 `load` イベントを直接 `window` に配信する必要があります。

> [!NOTE]
> メイン文書が読み込まれたときに配信される `load` イベントは `window` に配信されますが、 2 つのプロパティが変更されています。 `target` は `document` であり、`path` は `undefined` です。これら 2 つのプロパティは過去との互換性のために変更されています。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

ページが完全に読み込まれたときに、メッセージを記録します。

```js
window.addEventListener("load", (event) => {
  console.log("ページが完全に読み込まれました");
});
```

同じですが、 `onload` イベントハンドラープロパティの場合です。

```js
window.onload = (event) => {
  console.log("page is fully loaded");
};
```

### ライブデモ

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
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

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});
```

#### 結果

{{ EmbedLiveSample('ライブデモ', '100%', '160px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 文書 [readyState](/ja/docs/Web/API/Document/readyState) API
- 関連イベント:
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/beforeunload_event", "beforeunload")}}
  - {{domxref("Window/unload_event", "unload")}}
