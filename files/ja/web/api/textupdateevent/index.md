---
title: TextUpdateEvent
slug: Web/API/TextUpdateEvent
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`TextUpdateEvent`** インターフェイスは [DOM イベント](/ja/docs/Web/API/Event)で、{{domxref("EditContext")}} のインスタンスに関連付けられた編集可能なテキスト領域内のテキストまたは選択の更新を表します。

このインターフェイスは、{{domxref("Event")}} からプロパティを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("TextUpdateEvent.TextUpdateEvent", "TextUpdateEvent()")}} {{experimental_inline}}
  - : 新しい `TextUpdateEvent` のオブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('TextUpdateEvent.updateRangeStart')}} {{readonlyinline}} {{experimental_inline}}
  - : 更新されたテキストの範囲の始点の文字の添字を返します。
- {{domxref('TextUpdateEvent.updateRangeEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : 更新されたテキストの範囲の終点の文字の添字を返します。
- {{domxref('TextUpdateEvent.text')}} {{readonlyinline}} {{experimental_inline}}
  - : 更新された範囲に挿入されたテキストを返します。
- {{domxref('TextUpdateEvent.selectionStart')}} {{readonlyinline}} {{experimental_inline}}
  - : 更新後の、新しい選択範囲の始点の文字の添字を返します。
- {{domxref('TextUpdateEvent.selectionEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : 更新後の、新しい選択範囲の終点の文字の添字を返します。

## 例

### 編集可能なキャンバスに更新されたテキストを描画する

以下の例では、EditContext API を用いて `<canvas>` 要素に編集可能なテキストを描画し、`textupdate` イベントを用いてユーザーが入力した時にテキストを描画します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

function render() {
  // キャンバスを初期化します。
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // テキストを描画します。
  ctx.fillText(editContext.text, 10, 10);
}

editContext.addEventListener("textupdate", (e) => {
  // ユーザーがテキストを入力した際に、エディタービューを再描画します。
  render();

  console.log(
    `The user entered ${e.text}. Rendering the entire text: ${editContext.text}`,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
