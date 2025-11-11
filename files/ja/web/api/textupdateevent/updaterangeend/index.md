---
title: "TextUpdateEvent: updateRangeEnd プロパティ"
slug: Web/API/TextUpdateEvent/updateRangeEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

読み取り専用プロパティ **`TextUpdateEvent.updateRangeEnd`** は、{{domxref("EditContext")}} オブジェクト内で置き換えられているテキストの範囲の終点を表します。

## 値

{{jsxref("Number")}} です。

## 例

### `textupdate` を用いて挿入されたテキストと位置を表示する

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  console.log(
    `The user inserted the text "${e.text}" between index ${e.updateRangeStart} and index ${e.updateRangeEnd}.`,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
