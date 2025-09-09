---
title: "HTMLTextAreaElement: selectionStart プロパティ"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

**`selectionStart`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、 {{HTMLElement("textarea")}} 要素内における現在のテキスト選択範囲の先頭の位置を指定します。これは、選択されたテキストの最初のインデックスを表す数値です。 `<textarea>` の選択されたテキストの最初のインデックスを取得したり、設定したりする際に使用することができます。

何も選択されていない場合、 `selectionStart` および {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} の値は、どちらも `<textarea>` 要素内のカーソル（キャレット）の位置になります。

`selectionStart` を現在の {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} の値より大きな値に設定すると、`selectionStart` と `selectionEnd` の両方のプロパティがその値に更新されます。 どちらの値も {{domxref("HTMLTextAreaElement.textLength", "textLength")}} 以上の場合、両方のプロパティが `textLength` プロパティの値に設定されます。

このプロパティ値は、この `<textarea>` にフォーカスがなくても取得したり設定したりすることができますが、要素にフォーカスがないと、 {{cssxref("::selection")}} 擬似要素が選択テキストと一致しません。

`selectionStart` を新しい値に設定すると、 {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} および {{domxref("HTMLTextAreaElement.select_event", "select")}} イベントが発生します。

## 値

非負の数値です。

## 例

```js
const textarea = document.getElementById("text-box");
const start = textarea.selectionStart;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("HTMLTextAreaElement.selectionDirection")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionStart")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} 擬似要素
