---
title: "TextUpdateEvent: selectionStart プロパティ"
slug: Web/API/TextUpdateEvent/selectionStart
l10n:
  sourceCommit: 76f2007d4bd30314202820d96bba09f1e31dff33
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

読み取り専用プロパティ **`TextUpdateEvent.selectionStart`** は、{{domxref("EditContext")}} のオブジェクトに関連付けられた編集可能な領域のテキストコンテンツ内の選択範囲 (またはキャレット) の始点の位置を表します。

## 値

{{jsxref("Number")}} です。

## 例

### `textupdate` を用いて編集されたテキストとユーザーの選択を描画する

この例では、`selectionStart` プロパティを用いて {{domxref("EditContext/textupdate_event", "textupdate")}} イベントハンドラー内で選択されたテキストを描画する方法を示します。

```css
#editor {
  height: 200px;
  background: #eee;
  color: black;
}

.selection {
  display: inline-block;
  vertical-align: bottom;
  background: blue;
  color: white;
  min-width: 2px;
  height: 3ex;
}
```

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // 現在のコンテンツをクリアします。
  editorEl.textContent = "";

  const text = editContext.text;
  const { selectionStart, selectionEnd } = e;

  // 選択範囲の前のテキストを描画します。
  const textBefore = document.createElement("span");
  textBefore.textContent = text.substring(0, selectionStart);

  // 選択されたテキストまたはキャレットを描画します。
  const textSelected = document.createElement("span");
  textSelected.classList.add("selection");
  textSelected.textContent = text.substring(selectionStart, selectionEnd);

  // 選択範囲の後のテキストを描画します。
  const textAfter = document.createElement("span");
  textAfter.textContent = text.substring(selectionEnd);

  editorEl.appendChild(textBefore);
  editorEl.appendChild(textSelected);
  editorEl.appendChild(textAfter);

  console.log(`Text before selection: ${textBefore.textContent}`);
  console.log(`Selected text: ${textSelected.textContent}`);
  console.log(`Text after selection: ${textAfter.textContent}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
