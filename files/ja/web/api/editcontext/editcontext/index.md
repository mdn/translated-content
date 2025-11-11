---
title: "EditContext: EditContext() コンストラクター"
slug: Web/API/EditContext/EditContext
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

**`EditContext()`** コンストラクターは、新しい {{DOMxRef("EditContext")}} オブジェクトを返します。

## 構文

```js-nolint
new EditContext()
new EditContext(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つ、省略可能なオブジェクトです。
    - `text`
      - : `EditContext` のテキストの初期値として設定する文字列です。
    - `selectionStart`
      - : `EditContext` の選択範囲の始点の初期値として設定する数値です。
    - `selectionEnd`
      - : `EditContext` の選択範囲の終点の初期値として設定する数値です。

## 例

### `EditContext` オブジェクトを生成する

以下の例では、初期値としてテキスト `"Hello world!"` を格納し、このテキスト全体を選択した新しい `EditContext` オブジェクトを生成します。

```html
<div id="editor"></div>
```

```js
const initialText = "Hello world!";

const editContext = new EditContext({
  text: initialText,
  selectionStart: 0,
  selectionEnd: initialText.length,
});

const editorElement = document.getElementById("editor");
editorElement.editContext = editContext;

console.log(
  `EditContext object ready. Text: ${editContext.text}. Selection: ${editContext.selectionStart} - ${editContext.selectionEnd}.`,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
