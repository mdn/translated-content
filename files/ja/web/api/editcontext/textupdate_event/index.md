---
title: "EditContext: textupdate イベント"
slug: Web/API/EditContext/textupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの `textupdate` イベントは、ユーザーが `EditContext` のインスタンスに関連付けられた編集可能な領域のテキストまたは選択範囲を変更した時発火します。

このイベントにより、ユーザーの入力に応じて UI 内に新しいテキストや選択範囲を描画できます。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("textupdate", (event) => {});

ontextupdate = (event) => {};
```

## イベント型

{{domxref("TextUpdateEvent")}} です。{{domxref("Event")}} を継承しています。

## イベントプロパティ

_以下に挙げるプロパティに加え、親の {{domxref("Event")}} インターフェイス由来のプロパティも使用可能です。_

- {{domxref('TextUpdateEvent.updateRangeStart')}} {{readonlyinline}}
  - : 更新されたテキストの範囲の始点の文字の添字を返します。
- {{domxref('TextUpdateEvent.updateRangeEnd')}} {{readonlyinline}}
  - : 更新されたテキストの範囲の終点の文字の添字を返します。
- {{domxref('TextUpdateEvent.text')}} {{readonlyinline}}
  - : 更新された範囲に挿入されたテキストを返します。
- {{domxref('TextUpdateEvent.selectionStart')}} {{readonlyinline}}
  - : 更新後の新しい選択範囲の始点の文字の添字を返します。
- {{domxref('TextUpdateEvent.selectionEnd')}} {{readonlyinline}}
  - : 更新後の新しい選択範囲の終点の文字の添字を返します。

## 例

### `textupdate` で更新されたテキストを描画する

以下の例では、EditContext API の `textupdate` イベントを用いて、ユーザーが編集可能な `<canvas>` 要素に入力したテキストを描画します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // <canvas> にフォーカスがある状態でユーザーがテキストを入力すると、
  // このイベントが発火します。これをテキストの再描画に用います。
  console.log(
    `The user entered the text: ${e.text} at ${e.updateRangeStart}. Re-rendering the full EditContext text`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
