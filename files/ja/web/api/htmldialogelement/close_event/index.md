---
title: 'HTMLDialogElement: close イベント'
slug: Web/API/HTMLDialogElement/close_event
original_slug: Web/API/GlobalEventHandlers/onclose
l10n:
  sourceCommit: 467a3bda135d24e4dafd3dc26fd812a4d48f7b3a
---

{{ APIRef() }}

`close` イベントは `HTMLDialogElement` オブジェクト上で、これが表すダイアログ ({{htmlelement("dialog")}}) が閉じられたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('close', (event) => {});

onclose = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ライブ例

#### HTML

```html
<dialog class="example-dialog">
  <form method="dialog">
     <button>Close via method="dialog"</button>
  </form>
  <button class="close">Close via .close() method</button>
  <p>Or hit the <kbd>Esc</kbd> key</p>
</dialog>

<button class="open-dialog">Open dialog</button>

<div class="result"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const result = document.querySelector('.result');

const dialog = document.querySelector('.example-dialog');
dialog.addEventListener('close', (event) => {
    result.textContent = 'dialog was closed';
});

const openDialog = document.querySelector('.open-dialog');
openDialog.addEventListener('click', () => {
  dialog.showModal();
  result.textContent = "";
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    dialog.close();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`<dialog>`](/ja/docs/Web/HTML/Element/dialog) 要素
