---
title: "HTMLTextAreaElement: selectionEnd プロパティ"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 92e5c0d4ac1ea1a8d78342cbb3d9dcbce705b015
---

{{APIRef("HTML DOM")}}

**`selectionEnd`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、 {{HTMLElement("textarea")}} 要素内における現在のテキスト選択範囲の末尾の位置を指定します。これは、選択されたテキストの最後のインデックスを表す数値です。 `<textarea>` の選択されたテキストの末尾のインデックスを取得したり、設定したりする際に使用することができます。

何も選択されていない場合、 {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} および `selectionEnd` の値は、どちらも `<textarea>` 要素内のカーソル（キャレット）の位置になります。

`selectionEnd` を現在の {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} の値より小さい値に設定すると、`selectionEnd` と `selectionStart` の両方のプロパティがその値に更新されます。 どちらの値も 0 未満の場合、両方のプロパティが {{domxref("HTMLTextAreaElement.textLength", "textLength")}} プロパティの値に設定されます。

このプロパティ値は、この `<textarea>` にフォーカスがなくても取得したり設定したりすることができますが、要素にフォーカスがないと、 {{cssxref("::selection")}} 擬似要素が選択テキストと一致しません。

`selectionEnd` を新しい値に設定すると、 {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} および {{domxref("HTMLTextAreaElement.select_event", "select")}} イベントが発生します。

## 値

非負の数値です。

## 例

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionEnd;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionStart")}}
- {{domxref("HTMLTextAreaElement.selectionDirection")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.selectionChange_event", "selectionChange")}} イベント
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionEnd")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} 擬似要素
