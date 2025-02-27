---
title: "EditContext: updateText() メソッド"
slug: Web/API/EditContext/updateText
l10n:
  sourceCommit: 7d7b014191b4892e7a059493a90f0c511cfdf633
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`updateText()`** メソッドは、`EditContext` オブジェクト内部のテキストコンテンツを更新します。

ユーザーが関連付けられた要素にテキストを打ち込む際には、このメソッドを使う必要はありません。`EditContext` オブジェクトが自動的に内部のテキストコンテンツを更新し、必要に応じて {{domxref("EditContext.textupdate_event", "textupdate")}} イベントを発火します。

しかし、このメソッドは、クリップボードからテキストを貼り付けるときなど、ユーザーがそれ以外の方法でテキストコンテンツを操作する際に使用できます。

## 構文

```js-nolint
updateText(rangeStart, rangeEnd, text)
```

### 引数

- `rangeStart`
  - : 置き換えるテキストの範囲の始点を表す数値です。
- `rangeEnd`
  - : 置き換えるテキストの範囲の終点を表す数値です。
- `text`
  - : 新しいテキストコンテンツを表す文字列です。

### 例外

- 渡された引数が 3 個未満の場合は、`TypeError` {{domxref("DOMException")}} が投げられます。

## 例

### ユーザーがテキストを貼り付けた際、エディターを更新する

この例では、`updateText` メソッドを用いて、ユーザーがテキストを貼り付けるために <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>V</kbd> ショートカットを押した時に `<canvas>` 要素の `EditContext` 内のテキストコンテンツを更新する方法を示します。

また、この例ではクリップボードからテキストを読むために {{domxref("Clipboard.readText()")}} メソッドを用います。

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 0, 40);
}

editContext.addEventListener("textupdate", (e) => {
  render();
});

canvas.addEventListener("keydown", async (e) => {
  if (e.key == "v" && (e.ctrlKey || e.metaKey)) {
    const pastedText = await navigator.clipboard.readText();
    console.log(
      `The user pasted the text: ${pastedText}. Updating the EditContext text.`,
    );

    editContext.updateText(
      editContext.selectionStart,
      editContext.selectionEnd,
      pastedText,
    );

    editContext.updateSelection(
      editContext.selectionStart + pastedText.length,
      editContext.selectionStart + pastedText.length,
    );

    render();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
