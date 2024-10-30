---
title: "HTMLElement: cancel イベント"
slug: orphaned/Web/API/HTMLElement/cancel_event
original_slug: Web/API/HTMLElement/cancel_event
l10n:
  sourceCommit: 682c529a1be5f26ae378cb6affd56cdc15dddd4d
---

{{APIRef}}

**`cancel`** イベントは {{HTMLElement("input")}} および {{HTMLElement("dialog")}} 要素で発行されます。このイベントは、ユーザーが <kbd>Esc</kbd> キーで現在開いているダイアログを閉じてキャンセルしたときに発行されます。また、[file 入力欄](/ja/docs/Web/HTML/Element/input/file) では、ユーザーが <kbd>Esc</kbd> キーやキャンセルボタンでファイルピッカーダイアログをキャンセルしたときや、前回選択したファイルを再度選択したときにも発行されます。

このイベントはバブリングしません。

`<dialog>` が <kbd>Esc</kbd> キーで閉じられたとき、`cancel` イベントと {{domxref("HTMLDialogElement/close_event", "close")}} イベントの両方が発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ダイアログのキャンセル

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">閉じる</button>
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

{{ EmbedLiveSample('ダイアログのキャンセル', '100%', '100px') }}

### input 要素のキャンセル

#### HTML

```html
<label for="file">ファイルを選択したり、しなかったりしてください。</label>
<input type="file" id="file" name="file" />

<div id="result"></div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
const elem = document.getElementById("file");

const result = document.getElementById("result");

elem.addEventListener("cancel", () => {
  result.textContent = "キャンセルされました。";
});

elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    result.textContent = "ファイルが選択されました。";
  }
});
```

#### 結果

{{ EmbedLiveSample('input_要素のキャンセル', '100%', '100px') }}

ファイルセレクターを開き、選択ダイアログをエスケープキーまたはキャンセルボタンで閉じます。どちらも cancel イベントが発生します。また、マシンのローカルファイルを選択し、ファイル選択ウィンドウを再度開いて同じファイルを再選択してみてください。これも cancel イベントが発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("input")}} 要素
- HTML の {{HTMLElement("dialog")}} 要素
- {{domxref("HTMLDialogElement/close_event", "close")}}
