---
title: "HTMLInputElement: max プロパティ"
short-title: max
slug: Web/API/HTMLInputElement/max
l10n:
  sourceCommit: 97e0bb9c3087d24d09525a74619660c796cd635e
---

{{ApiRef("HTML DOM")}}

**`max`** は {{domxref("HTMLInputElement")}} インターフェースのプロパティで、この {{HTMLElement("input")}} 要素の [`max`](/ja/docs/Web/HTML/Element/input#max) 属性を反映します。この属性は通常、数値または日付時刻入力の有効な最大値を定義します。この属性が明示的に設定されていない場合、`max` プロパティは空文字列となります。

## 値

この要素の `max` を表す文字列、または `max` が明示的に設定されていない場合は空文字列です。

## 例

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.max); // max 属性の現在の値
inputElement.max = "18:00:00"; // max 値を午後 6 時に設定
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} の {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}} 型
- {{domxref("HTMLInputElement.min")}}
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
