---
title: "HTMLDialogElement: cancel イベント"
short-title: cancel
slug: Web/API/HTMLDialogElement/cancel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

**`cancel`** は {{HTMLElement("dialog")}} 要素で発生するイベントで、ユーザーがブラウザーに対して現在のダイアログを閉じるよう指示した際に発行されます。ブラウザーは、ユーザーが <kbd>Esc</kbd> キーを押したときにこのイベントを発行します。

このイベントはキャンセル可能だが、バブリングしません。

`<dialog>` が <kbd>Esc</kbd> キーで閉じられた時、 `cancel` および {{domxref("HTMLDialogElement/close_event", "close")}} イベントの両方が発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ダイアログをキャンセル

#### HTML

```html-nolint
<dialog class="example-dialog">
  <button class="close">閉じる</button>
</dialog>

<button class="open-dialog">ダイアログを開く</button>

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
  result.textContent = "ダイアログがキャンセルされました";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    result.textContent = "";
  } else {
    result.textContent = "このブラウザーではダイアログ API に未対応です";
  }
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 結果

{{ EmbedLiveSample('ダイアログをキャンセル', '100%', '100px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("dialog")}} 要素
