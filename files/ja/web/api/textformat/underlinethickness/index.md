---
title: "TextFormat: underlineThickness プロパティ"
slug: Web/API/TextFormat/underlineThickness
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("TextFormat")}} インターフェイスの **`underlineThickness`** プロパティは、この書式を適用するテキストの範囲につけるべき下線の太さを表します。

## 値

{{jsxref("String")}} で、以下のいずれかの値です。

- `"none"`: 下線なし
- `"thin"`: 細い下線
- `"thick"`: 太い下線

## 例

### 適用するべき下線の太さを読み取る

以下の例では、`textformatupdate` イベントの `underlineThickness` プロパティを用いて、書式を適用するテキストに適用する下線の太さを判別する方法を示します。この例におけるイベントリスナーコールバックは、IME ウィンドウを用いてテキストを変換しているときにしか呼ばれないことに注意してください。

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
      `IME wants to apply a ${format.underlineThickness} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
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
