---
title: "HTMLTextAreaElement: setSelectionRange() メソッド"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{APIRef("HTML DOM")}}

**`setSelectionRange()`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのメソッドで、 {{HTMLElement("textarea")}} 要素における現在のテキスト選択の開始と終了の位置、およびオプションで方向を設定します。方向は、選択がどの方向に行われたかを示します。例えば、選択されたテキストの末尾から先頭に向かってユーザーがクリックしてドラッグしたことで選択が設定されたことを示します。さらに、 {{domxref("HTMLTextAreaElement.select_event", "select")}} および {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} イベントが発生します。

このメソッドは {{domxref("HTMLTextAreaElement.selectionStart")}}、{{domxref("HTMLTextAreaElement.selectionEnd")}}、{{domxref("HTMLTextAreaElement.selectionDirection")}} の各プロパティも更新します。

> [!NOTE]
> `<textarea>` にフォーカスを当てると、 `setSelectionRange()` メソッドを使用してテキストの一部を選択できるようになります。 フォーカスを設定すると、 `selectchange` イベントも発行されます。

`<textarea>` 要素のテキストを**すべて**選択するには、 {{domxref("HTMLTextAreaElement.select()")}} メソッドを使用します。

## 構文

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### 引数

- `selectionStart`
  - : 選択範囲の最初の文字のインデックス。 要素の値の長さを超えるインデックスを指定すると、値の末尾を指しているものとみなされます。 詳細は、 {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} プロパティを参照してください。
- `selectionEnd`
  - : 選択範囲の最後の文字の次の文字のインデックス。要素の値の長さを超えるインデックスを指定すると、値の末尾を指しているものとみなされます。 `selectionEnd` が `selectionStart` より小さい場合、どちらも `selectionEnd` の値として扱われます。 詳細な情報については、{{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} プロパティを参照してください。
- `selectionDirection` {{optional_inline}}
  - : `"forward"`、`"backward"`、または既定値の `"none"` で、選択が実行された方向を示します。 詳細は、 {{domxref("HTMLTextAreaElement.selectionDirection", "selectionDirection")}} プロパティを参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const textarea = document.getElementById("text-box");
const chars = textarea.textLength;
// 値が 10 文字以上の長さであれば
if (chars > 10) {
  // 内部のテキストの範囲を選択するには、要素にフォーカスを設定する必要がある
  textarea.focus();
  // テキストの先頭から 5 文字目と末尾から 5 文字目までの間を選択
  textarea.setSelectionRange(5, chars - 5);
} else {
  // それ以外の場合はすべてのテキストを選択
  textarea.select();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} 擬似要素
