---
title: "HTMLDialogElement: cancel イベント"
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`cancel`** イベントは、ユーザーが現在開いているダイアログを閉じるようブラウザーに指示したときに {{HTMLElement("dialog")}} に発生します。ブラウザーはユーザーが <kbd>Esc</kbd> キーを押した時にこのイベントを発生させます。

このイベントはバブリングしません。

`<dialog>` を <kbd>Esc</kbd> キーで閉じると、`cancel` イベントと {{domxref("HTMLDialogElement/close_event", "close")}} イベントの両方が発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ライブ例

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">Close</button>
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
const result = document.querySelector(".result");

const dialog = document.querySelector(".example-dialog");

dialog.addEventListener("cancel", (event) => {
  result.textContent = "dialog was canceled";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    result.textContent = "";
  } else {
    result.textContent = "The dialog API is not supported by this browser";
  }
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML {{HTMLElement("dialog")}} element
- {{domxref("HTMLDialogElement/close_event", "close")}}
