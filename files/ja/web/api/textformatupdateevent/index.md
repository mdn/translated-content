---
title: TextFormatUpdateEvent
slug: Web/API/TextFormatUpdateEvent
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`TextFormatUpdateEvent`** インターフェイスは [DOM イベント](/ja/docs/Web/API/Event)で、{{domxref("EditContext")}} のインスタンスに関連付けられた編集可能な領域内で変換中のテキストに{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウが適用したい書式のリストを表します。

このインターフェイスは {{domxref("Event")}} からプロパティを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("TextFormatUpdateEvent.TextFormatUpdateEvent", "TextFormatUpdateEvent()")}} {{experimental_inline}}
  - : 新しい `TextFormatUpdateEvent` オブジェクトを生成します。

## インスタンスメソッド

- {{domxref('TextFormatUpdateEvent.getTextFormats')}} {{experimental_inline}}
  - : IME ウィンドウがテキストに適用したい書式を表す {{domxref("TextFormat")}} オブジェクトの {{jsxref("Array")}} を返します。

## 例

### IME で変換中のテキストに書式を設定する

以下の例では、`textformatupdate` イベントを用いて編集可能な領域内のテキストの書式を更新しています。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const TEXT_X = 10;
const TEXT_Y = 10;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  // キャンバスを初期化します。
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // テキストを描画します。
  ctx.fillText(editContext.text, TEXT_X, TEXT_Y);
  console.log(`Rendering text: ${editContext.text}`);

  // IME ウィンドウが適用したい書式を取得します。
  const formats = e.getTextFormats();

  // 取得した書式を走査します。
  for (const format of formats) {
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    console.log(
      `Applying underline ${underlineThickness} ${underlineStyle} between ${rangeStart} and ${rangeEnd}.`,
    );

    const underlineXStart = ctx.measureText(
      editContext.text.substring(0, rangeStart),
    ).width;
    const underlineXEnd = ctx.measureText(
      editContext.text.substring(0, rangeEnd),
    ).width;
    const underlineY = TEXT_Y + 3;

    // 簡単のため、この例ではシンプルな下線のみを引きます。
    // 正しい下線を引くには、underlineStyle と underlineThickness を使用してください。

    ctx.beginPath();
    ctx.moveTo(TEXT_X + underlineXStart, underlineY);
    ctx.lineTo(TEXT_X + underlineXEnd, underlineY);
    ctx.stroke();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
