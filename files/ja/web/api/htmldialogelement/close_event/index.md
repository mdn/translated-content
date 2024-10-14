---
title: "HTMLDialogElement: close イベント"
short-title: close
slug: Web/API/HTMLDialogElement/close_event
l10n:
  sourceCommit: 981ab25c61986b40213d0c84131432438d5a7903
---

{{APIRef}}

`close` イベントは `HTMLDialogElement` オブジェクト上で、これが表すダイアログ ({{htmlelement("dialog")}}) が閉じられたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ライブ例

#### HTML

```html
<dialog class="example-dialog">
  <form method="dialog">
    <button>method="dialog" で閉じる</button>
  </form>
  <button class="close">.close() メソッドで閉じる</button>
  <p>または <kbd>Esc</kbd> キーを押してください</p>
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
dialog.addEventListener("close", (event) => {
  result.textContent = "ダイアログが閉じました";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  dialog.showModal();
  result.textContent = "";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 結果

{{ EmbedLiveSample('ライブ例', '100%', '200px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`<dialog>`](/ja/docs/Web/HTML/Element/dialog) 要素
- [`Event`](/ja/docs/Web/API/Event) インターフェイス
