---
title: "HTMLInputElement: min プロパティ"
short-title: min
slug: Web/API/HTMLInputElement/min
l10n:
  sourceCommit: 97e0bb9c3087d24d09525a74619660c796cd635e
---

{{ApiRef("HTML DOM")}}

**`min`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、この {{HTMLElement("input")}} 要素の [`min`](/ja/docs/Web/HTML/Reference/Elements/input#min) 属性を反映します。この属性は通常、数値または日付時刻入力の有効な最小値を定義します。この属性が明示的に設定されていない場合、`min` プロパティは空文字列となります。

## 値

この要素の `min` を表す文字列、または `min` が明示的に設定されていない場合は空文字列です。

## 例

```js
const inputElement = document.querySelector("#range");
console.log(inputElement.min); // min 属性の現在の値
inputElement.min = 0; // min 値を "0" に設定
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} の {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}} 型
- {{domxref("HTMLInputElement.max")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
