---
title: "EditContext: text プロパティ"
slug: Web/API/EditContext/text
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの読み取り専用プロパティ **`text`** は、要素の編集可能なコンテンツを表します。

## 値

この `EditContext` オブジェクトに関連付けられた要素の現在の編集可能なコンテンツが格納された文字列です。初期値は空文字列です。

この文字列は `EditContext` に関連付けられた DOM 要素の {{domxref("Node.textContent", "textContent")}} プロパティと一致することもありますし、しないこともあります。たとえば、関連付けられた要素が `textContent` プロパティを持たない `<canvas>` 要素である可能性があります。もしくは、関連付けられた要素が `<div>` 要素で、より高度な描画を行うため `EditContext.text` の値とは異なるテキストが格納されている可能性もあります。

`EditContext` オブジェクトの `text` プロパティは、編集可能なテキスト領域のモデルとして使用できます。`selectionStart` や `selectionEnd` などの `EditContext` オブジェクトの他のプロパティは、この `text` 文字列内でのオフセットを表しています。

## 例

### `text` を用いて編集可能なキャンバスにテキストを描画する

以下の例では、EditContext API を用いてユーザーが入力したテキストを `<canvas>` 要素に描画します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // ユーザーが <canvas> にフォーカスを当ててテキストを入力すると、
  // このイベントが発火し、それをテキストの再描画に用います。
  console.log(
    `The user entered the text: ${e.text}. Re-rendering the full EditContext text`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
