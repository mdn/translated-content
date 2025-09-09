---
title: "EditContext: characterboundsupdate イベント"
slug: Web/API/EditContext/characterboundsupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

`characterboundsupdate` イベントは、オペレーティングシステムが `EditContext` オブジェクトの編集可能なテキスト領域内にある特定の各文字の境界を知る必要がある時発火します。

これは、オペレーティングシステムが{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウなどのプラットフォーム固有の編集関係の UI を表示する必要がある際に発生します。

`characterboundsupdate` イベントが発火した際は、テキストの各文字の境界を計算し、{{domxref("EditContext.updateCharacterBounds()")}} メソッドを呼び出すことによりオペレーティングシステムに必要な情報を渡すべきです。

いつ、そしてどのように `characterboundsupdate` イベントを用いるかについて詳しくは、{{domxref("EditContext.updateCharacterBounds()", "updateCharacterBounds")}} メソッドのドキュメントを参照してください。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("characterboundsupdate", (event) => {});

oncharacterboundsupdate = (event) => {};
```

## イベント型

{{domxref("CharacterBoundsUpdateEvent")}} です。{{domxref("Event")}} を継承しています。

## イベントプロパティ

_以下に挙げたプロパティに加えて、親の {{domxref("Event")}} インターフェイス由来のプロパティも使用可能です。_

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}}
  - : 編集可能な領域内のテキスト内のオペレーティングシステムが境界を必要としている始点の文字のオフセットです。
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}}
  - : 編集可能な領域内のテキスト内のオペレーティングシステムが境界を必要としている終点の文字のオフセットです。

## 例

### 必要に応じて各文字の境界を更新する

この例では、`updateCharacterBounds` メソッドを用いて、オペレーティングシステムが情報を要求した時に `canvas` 要素の `EditContext` 内の各文字の境界を更新する方法を示します。このイベントリスナーコールバックはテキストの変換に IME ウィンドウやその他のプラットフォーム固有の編集 UI を使用しているときのみ呼ばれることに注意してください。

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
  // テキストの先頭から対象の文字までの幅を計測します。
  const widthBeforeChar = ctx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // 対象の文字の幅を計測します。
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

  console.log("The required character bounds are", charBounds);
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
