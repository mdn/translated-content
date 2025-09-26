---
title: "HTMLInputElement: cancel イベント"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{APIRef}}

**`cancel`** イベントは {{HTMLElement("input")}} 要素において、ユーザーが <kbd>Esc</kbd> キーやキャンセルボタンによってファイルピッカーダイアログをキャンセルしたり、前回 `type="file"` で選択された同じファイルを再選択した場合に発生します。

このイベントはキャンセル不可ですが、バブリングします。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### input 要素のキャンセル

#### HTML

```html
<label for="file">ファイルを選択するか、選択をやめるかしてください。</label>
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

{{ EmbedLiveSample('input 要素のキャンセル', '100%', '100px') }}

ファイルセレクターを開き、エスケープキーまたはキャンセルボタンで選択ダイアログを閉じます。どちらも cancel イベントが発行される原因となります。また、自分のマシン上のローカルファイルを選択し、ファイル選択ウィンドウを再度開いてから同じファイルを再選択してみてください。これも cancel イベントが発行される原因となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("input")}} 要素
