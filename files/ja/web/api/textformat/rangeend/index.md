---
title: "TextFormat: rangeEnd プロパティ"
slug: Web/API/TextFormat/rangeEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("TextFormat")}} インターフェイスの **`rangeEnd`** プロパティは、この書式を適用するべきテキストの範囲の終点を表します。

## 値

{{jsxref("Number")}} です。

## 例

### 書式を適用するべきテキストの範囲を読み取る

以下の例では、`textformatupdate` イベントの `rangeStart` および `rangeEnd` プロパティを用いて、書式を適用するべきテキストの範囲を判別する方法を示します。この例におけるイベントリスナーコールバックは、IME ウィンドウを用いてテキストを変換しているときにしか呼ばれないことに注意してください。

```html
<div id="editor" style="height:200px;background:#eee;"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext(editorEl);
editorEl.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  const formats = e.getTextFormats();

  for (const format of formats) {
    console.log(
      `IME wants to apply formatting between ${format.rangeStart} and ${format.rangeEnd}.`,
    );
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("TextFormat")}} インターフェイス
