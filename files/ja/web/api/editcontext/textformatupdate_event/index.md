---
title: "EditContext: textformatupdate イベント"
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの `textformatupdate` イベントは、{{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) ウィンドウを用いた変換を実行中に発火します。

このイベントは、IME が変換の状態を表すためテキストの変換中の部分を別の書式で表示するべきだと判断した時発火します。

以下のスクリーンショットは、日本語の IME を用いて Windows 上のメモ帳アプリケーションでテキストを書いている例です。テキストは、IME による推薦の一つに従って変換中であることを表すため、太い下線とともに表示されています。

![IME ウィンドウで日本語のテキストを変換中の Windows 上のメモ帳](./ime-notepad.png)

ウェブ開発者としては、`textformatupdate` イベントを監視し、それに従って編集可能な領域内に表示しているテキストの書式を更新するべきです。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("textformatupdate", (event) => {});

ontextformatupdate = (event) => {};
```

## イベント型

{{domxref("TextFormatUpdateEvent")}} です。{{domxref("Event")}} を継承しています。

## イベントプロパティ

_以下に挙げるプロパティに加えて、親の {{domxref("Event")}} インターフェイス由来のプロパティも使用可能です。_

- {{domxref('TextFormatUpdateEvent.getTextFormats')}}
  - : IME ウィンドウがテキストに適用したい書式のリストを返します。

## 例

### IME により変換中のテキストの書式を描画する

以下の例では、`textformatupdate` イベントを用いて、編集可能な領域内のテキストの書式を更新しています。この例のイベントリスナーコールバックは、IME ウィンドウやその他のプラットフォーム固有の UI を用いてテキストを変換しているときにのみ呼ばれることに注意してください。

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

  // IME ウィンドウが適用したいテキストの書式を取得します。
  const formats = e.getTextFormats();

  // テキストの書式を走査します。
  for (const format of formats) {
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    const underlineXStart = ctx.measureText(
      editContext.text.substring(0, rangeStart),
    ).width;
    const underlineXEnd = ctx.measureText(
      editContext.text.substring(0, rangeEnd),
    ).width;
    const underlineY = TEXT_Y + 3;

    // 簡単のため、この例ではシンプルな下線のみを描画します。
    // 下線の描画には、underlineStyle および underlineThickness の値を用いるべきです。

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
