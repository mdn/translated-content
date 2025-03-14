---
title: "CharacterBoundsUpdateEvent: rangeStart プロパティ"
slug: Web/API/CharacterBoundsUpdateEvent/rangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

読み取り専用プロパティ **`CharacterBoundsUpdateEvent.rangeStart`** は、編集可能な領域内のテキストのうち、オペレーティングシステムが境界を要求している部分の始点となる文字のオフセットを表します。

## 値

{{jsxref("Number")}} です。

## 例

### `rangeStart` の値を読み取る

この例では、`characterboundsupdate` イベントを用いて `rangeStart` および `rangeEnd` プロパティの値を読み取る方法を示します。

```js
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("characterboundsupdate", (e) => {
  console.log(
    `The OS needs the bounds of the chars at ${e.rangeStart} - ${e.rangeEnd}.`,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
