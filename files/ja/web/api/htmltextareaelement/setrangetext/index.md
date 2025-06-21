---
title: "HTMLTextAreaElement: setRangeText() メソッド"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("HTML DOM")}}

**`setRangeText()`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのメソッドで、 {{HTMLElement("textarea")}} 要素内のテキストの範囲を、引数として渡した新しいテキストで置き換えます。

追加のオプション引数には、変更するテキストの範囲の先頭、その範囲の末尾、およびテキストが更新された後に選択すべき `<textarea>` のどの部分を定義するキーワードを記載します。 `startSelection` と `endSelection` 引数が指定されていない場合、その範囲が選択範囲であると見なされます。

最後の引数は、テキストが置換された後に選択範囲がどのように設定されるかを決定します。 可能な値は、 `"select"` で新たに挿入されたテキストを選択し、 `"start"` で選択範囲を挿入されたテキストの直前に移動し、 `"end"` で選択範囲を挿入されたテキストの直後に移動し、既定値の `"preserve"` は選択範囲を維持しようとします。

それに加えて {{domxref("HTMLTextAreaElement.select_event", "select")}} および {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} イベントが発行されます。

## 構文

```js-nolint
setRangeText(replacement)
setRangeText(replacement, startSelection)
setRangeText(replacement, startSelection, endSelection)
setRangeText(replacement, startSelection, endSelection, selectMode)
```

### 引数

- `replacement`
  - : 挿入する文字列。
- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} {{optional_inline}}
  - : 最初の選択文字のインデックス。インデックスが要素の値の長さを超えている場合は、値の末尾を指しているものとみなされます。
- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} {{optional_inline}}
  - : 最後に選択された文字の次の文字のインデックス。インデックスが要素の値の長さを超えている場合は、値の末尾を指しているものとみなされます。 `selectionEnd` が `selectionStart` より小さい場合、どちらも `selectionEnd` の値として扱われます。
- `selectMode` {{optional_inline}}
  - : `select`、`start`、`end`、または既定値の `preserve` のいずれかのキーワードで、テキストが置き換えられた後に選択をどのように設定するかを定義します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例にあるボタンをクリックすると、テキストボックス内のテキストの一部を置き換えます。新しく挿入されたテキストは、その後で強調（選択）されます。

### HTML

```html
<label for="ta">空の入力フィールドの例:</label>
<textarea id="ta">
  このテキストは更新されません。
</textarea>
<button id="btn">テキストを更新</button>
```

### JavaScript

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  changeText();
});

function changeText() {
  const textarea = document.getElementById("ta");
  textarea.focus();
  textarea.setRangeText("ALREADY", 14, 17, "select");
}
```

### 結果

{{EmbedLiveSample("例")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} 擬似要素
