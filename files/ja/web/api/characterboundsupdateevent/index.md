---
title: CharacterBoundsUpdateEvent
slug: Web/API/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`CharacterBoundsUpdateEvent`** インターフェイスは [DOM イベント](/ja/docs/Web/API/Event)で、{{domxref("EditContext")}} のインスタンスに関連付けられた編集可能な領域内の特定の各文字の境界を知るためのオペレーティングシステムからの要求を表します。

このインターフェイスは、{{domxref("Event")}} からプロパティを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent", "CharacterBoundsUpdateEvent()")}} {{experimental_inline}}
  - : 新しい `CharacterBoundsUpdateEvent` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}} {{experimental_inline}}
  - : 編集可能な領域内のテキストのうち、オペレーティングシステムが境界を要求している部分の始点となる文字のオフセットです。
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : 編集可能な領域内のテキストのうち、オペレーティングシステムが境界を要求している部分の終点となる文字のオフセットです。

## 例

### 必要に応じて各文字の境界を更新する

この例では、`characterboundsupdate` イベントと `updateCharacterBounds` メソッドを用いて、オペレーティングシステムに要求された各文字の境界を知らせる方法を示しています。このイベントリスナーコールバックは、IME ウィンドウやその他のプラットフォーム固有の編集 UI を用いてテキストを変換しているときのみ呼ばれることに注意してください。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const FONT_SIZE = 40;
const FONT = `${FONT_SIZE}px Arial`;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = FONT;

const editContext = new EditContext();
canvas.editContext = editContext;

function computeCharacterBound(offset) {
  // テキストの頭から対象の文字までの幅を測定します。
  const widthBeforeChar = ctx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // 対象の文字の幅を測定します。
  const charWidth = ctx.measureText(editContext.text[offset]).width;

  const charX = canvas.offsetLeft + widthBeforeChar;
  const charY = canvas.offsetTop;

  // 文字の境界を表す DOMRect を返します。
  return DOMRect.fromRect({
    x: charX,
    y: charY - FONT_SIZE,
    width: charWidth,
    height: FONT_SIZE,
  });
}

editContext.addEventListener("characterboundsupdate", (e) => {
  const charBounds = [];
  for (let offset = e.rangeStart; offset < e.rangeEnd; offset++) {
    charBounds.push(computeCharacterBound(offset));
  }

  // EditContext インスタンス内の各文字の境界を更新します。
  editContext.updateCharacterBounds(e.rangeStart, charBounds);

  console.log(
    "The required character bounds are",
    charBounds
      .map((bound) => {
        return `(x: ${bound.x}, y: ${bound.y}, width: ${bound.width}, height: ${bound.height})`;
      })
      .join(", "),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
