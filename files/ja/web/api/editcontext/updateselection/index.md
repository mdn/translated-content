---
title: "EditContext: updateSelection() メソッド"
slug: Web/API/EditContext/updateSelection
l10n:
  sourceCommit: ab5aa440278a135b9932a071f9208f4c58b86d21
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`updateSelection()`** メソッドは、編集可能なテキストコンテンツ内の選択の内部状態を更新します。このメソッドは、マウスのクリックやドラッグ、およびキーボード操作など、ユーザーが `EditContext` に関連付けられた要素で描画されたテキストの操作を行った際に選択の状態を更新するために用いられます。

## 構文

```js-nolint
updateSelection(start, end)
```

### 引数

- `start`
  - : 新しい選択範囲の始点を表す数値です。
- `end`
  - : 新しい選択範囲の終点を表す数値です。

`start` と `end` が同じ値の場合、選択範囲はキャレットに相当します。

### 例外

- 引数が 1 個しか渡されなかった場合、`TypeError` {{domxref("DOMException")}} が投げられます。
- いずれかの引数が非負の数値でない場合、{{domxref("DOMException")}} が投げられます。

## 例

### ユーザーがテキストを操作した際、選択範囲を更新する

この例では、`updateSelection` メソッドを用いて、矢印キーを用いて編集可能な領域内でキャレットを動かしたりテキストを選択したりする際に `canvas` 要素の `EditContext` 内の選択範囲を更新する方法を示します。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

canvas.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    const newPosition = Math.max(editContext.selectionStart - 1, 0);

    if (e.shiftKey) {
      editContext.updateSelection(newPosition, editContext.selectionEnd);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  } else if (e.key == "ArrowRight") {
    const newPosition = Math.min(
      editContext.selectionEnd + 1,
      editContext.text.length,
    );

    if (e.shiftKey) {
      editContext.updateSelection(editContext.selectionStart, newPosition);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  }

  console.log(
    `The new EditContext selection is ${editContext.selectionStart}, ${editContext.selectionEnd}`,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
