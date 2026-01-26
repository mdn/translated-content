---
title: TextFormat
slug: Web/API/TextFormat
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`TextFormat`** インターフェイスは、{{domxref("EditContext")}} のインスタンスに関連付けられた編集可能なテキスト領域内のある範囲のテキストに適用するべき特定の書式を表します。このテキストの書式は、ユーザーがテキストの変換に用いている {{glossary("Input Method Editor", "インプットメソッドエディター")}} (IME) からの要求です。

ウェブ上のデフォルトの編集可能な領域 ([`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) 要素など) を使用しているときは、IME による変換はブラウザーとオペレーティングシステムが処理してくれます。たとえば、Windows 上の `textarea` で日本語の IME を使用しているときは、以下のテキストの書式が適用されることがあります。

- キーボードからテキストを入力しているときは、入力された文字には細い波状の下線がつきます。

  ![Windows 上の Microsoft Edge 内の textarea で、IME ウィンドウで日本語のテキストを入力している](./ime-squiggle-underline.png)

- IME ウィンドウ内の候補リストからユーザーが提案を選択すると、テキストが置き換えられ、太い実線の下線がつきます。

  ![Windows 上の Microsoft Edge 内の textarea で、IME ウィンドウで日本語のテキストを選択している](./ime-solid-underline.png)

{{domxref("EditContext API", "", "", "nocode")}} を用いて自分で独自の編集可能な領域を構築しているときは、IME による変換を自分で処理する必要があります。{{domxref("EditContext/textformatupdate_event", "textformatupdate")}} イベントにより、IME ウィンドウが変換中のテキストに適用しようとしている書式のリストが送られます。このイベントを監視し、それに従って編集可能な領域内に表示しているテキストの書式を更新するべきです。

## コンストラクター

- {{DOMxRef("TextFormat.TextFormat", "TextFormat()")}} {{experimental_inline}}
  - : 新しい `TextFormat` のインスタンスを返します。

## インスタンスプロパティ

- {{domxref("TextFormat.rangeStart")}} {{readonlyinline}} {{experimental_inline}}
  - : この書式を適用するべきテキストの範囲の始点です。
- {{domxref("TextFormat.rangeEnd")}} {{readonlyinline}} {{experimental_inline}}
  - : この書式を適用するべきテキストの範囲の終点です。
- {{domxref("TextFormat.underlineStyle")}} {{readonlyinline}} {{experimental_inline}}
  - : この書式を適用するテキストの範囲につけるべき下線のスタイルです。
- {{domxref("TextFormat.underlineThickness")}} {{readonlyinline}} {{experimental_inline}}
  - : この書式を適用するテキストの範囲につけるべき下線の太さです。

## 例

### `textformatupdate` イベントの使用

以下の例では、`textformatupdate` イベントを用いて、IME 変換ウィンドウが編集可能な要素内のテキストの各範囲に適用したい様々な書式を記録します。この例におけるイベントリスナーコールバックは、IME ウィンドウを用いてテキストを変換しているときのみ呼び出されることに注意してください。

```html
<div id="editor" style="height:200px;background:#eee;"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext(editorEl);
editorEl.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  // TextFormat のインスタンス群を取得します。
  const formats = e.getTextFormats();

  // TextFormat のインスタンス群を走査します。
  for (const format of formats) {
    console.log(
      `Applying a ${format.underlineThickness} ${format.underlineStyle} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
    );
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
