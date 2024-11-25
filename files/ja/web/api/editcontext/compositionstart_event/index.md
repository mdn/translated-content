---
title: "EditContext: compositionstart イベント"
slug: Web/API/EditContext/compositionstart_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの `compositionstart` イベントは、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウを用いた変換が開始する時発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("compositionstart", (event) => {});

oncompositionstart = (event) => {};
```

## 例

### `compositionstart` を用いて編集可能な領域の境界線を変える

以下の例では、`compositionstart` イベントが発火した時に編集可能な領域の境界線を赤色に設定し、`compositionend` イベントが発火した時に黒色に戻します。この例のイベントリスナーコールバックは、テキストの変換に IME ウィンドウやその他のプラットフォーム固有の編集 UI を用いている場合のみ呼び出されることに注意してください。

```css
#text-editor {
  border: 1px solid black;
}
#text-editor.is-composing {
  border-color: red;
}
```

```html
<div id="text-editor"></div>
```

```js
const editorElement = document.getElementById("text-editor");
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("compositionstart", (event) => {
  editorElement.classList.add("is-composing");
});

editContext.addEventListener("compositionend", (event) => {
  editorElement.classList.remove("is-composing");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
