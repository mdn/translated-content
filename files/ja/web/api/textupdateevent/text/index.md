---
title: "TextUpdateEvent: text プロパティ"
slug: Web/API/TextUpdateEvent/text
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

読み取り専用プロパティ **`TextUpdateEvent.text`** には、{{domxref("EditContext")}} の `textupdate` イベントで更新された範囲に挿入されたテキストが格納されています。

## 値

{{domxref("TextUpdateEvent/updateRangeStart", "updateRangeStart")}} と {{domxref("TextUpdateEvent/updateRangeEnd", "updateRangeEnd")}} が表す添字の間に格納されたテキストを置き換えるテキストが格納された {{jsxref("String")}} です。

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
    `The user inserted the text "${e.text}" at index ${e.updateRangeStart}.`,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
