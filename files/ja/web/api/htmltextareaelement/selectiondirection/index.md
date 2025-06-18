---
title: "HTMLTextAreaElement: selectionDirection プロパティ"
short-title: selectionDirection
slug: Web/API/HTMLTextAreaElement/selectionDirection
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

<!--  -->

{{APIRef("HTML DOM")}}

**`selectionDirection`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、現在の選択の方向を示します。利用可能な値は `"forward"`、`"backward"`、`"none"` です。 `forward` の値は、現在のロケールの書字方向で選択が先頭から末尾の方向に行われたことを示し、 `backward` は逆方向を示します。 `none` の値は、方向が不明である場合に発生します。これは、 `<textarea>` でテキストを選択した方向を取得および変更する際に使用することができます。

`selectionDirection` を新しい値に設定すると、 {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} および {{domxref("HTMLTextAreaElement.select_event", "select")}} イベントが発行されます。

## 値

文字列で、`"forward"`、`"backward"`、`"none"` のいずれかです。

## 例

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionDirection;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionStart")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionDirection")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} 擬似要素
