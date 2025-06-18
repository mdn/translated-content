---
title: "EditContext: selectionEnd プロパティ"
slug: Web/API/EditContext/selectionEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} の読み取り専用プロパティ **`selectionEnd`** は、編集可能なテキストコンテンツ内での、現在選択されている範囲の終点のオフセットを表します。

## 値

{{jsxref("Number")}} です。

## 例

### `selectionEnd` を用いて編集可能なキャンバスでユーザーの選択を描画する

この例では、`selectionStart` および `selectionEnd` プロパティを用いて、`EditContext` に関連付けられた `<canvas>` 要素に現在の選択範囲を描画する方法を示します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const ANCHOR_X = 10;
const ANCHOR_Y = 30;
const FONT_SIZE = 20;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = `${FONT_SIZE}px Arial`;

const editContext = new EditContext({
  text: "Hello world!",
  selectionStart: 6,
  selectionEnd: 11,
});
canvas.editContext = editContext;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // まず、テキストコンテンツ全体を描画します。
  ctx.fillStyle = "black";
  ctx.fillText(editContext.text, ANCHOR_X, ANCHOR_Y);

  // テキストの始点から選択範囲の始点までの幅を取得します。
  const selectionStartX = ctx.measureText(
    editContext.text.substring(0, editContext.selectionStart),
  );

  // 選択範囲の幅を取得します。
  const selectionWidth = ctx.measureText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
  );

  // 選択範囲を表すため、テキストの上に長方形を描画します。
  ctx.fillStyle = "blue";
  ctx.fillRect(
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y - FONT_SIZE,
    selectionWidth.width,
    FONT_SIZE,
  );

  // 選択されたテキストを白で、長方形の上に再描画します。
  ctx.fillStyle = "white";
  ctx.fillText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y,
  );
}

render();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
