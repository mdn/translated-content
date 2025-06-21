---
title: "HTMLInputElement: step プロパティ"
short-title: step
slug: Web/API/HTMLInputElement/step
l10n:
  sourceCommit: bc141099823c9ae2e46f560ac674be2bc4118351
---

{{ApiRef("HTML DOM")}}

**`step`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、数値または日付時刻の {{HTMLElement("input")}} 要素が変更できる刻みを示します。これは、要素の [`step`](/ja/docs/Web/HTML/Reference/Elements/input#step) 属性を反映します。有効な値は、文字列 `"any"` または正の浮動小数点数の入った文字列です。属性が明示的に設定されていない場合、`step` プロパティは空文字列となります。

## 値

要素の `step` 値を表す文字列、または刻みが明示的に設定されていない場合は空文字列。

## 例

```js
const inputElement = document.querySelector('[type="number"]');
console.log(inputElement.step); // step 属性の現在の値
inputElement.step = 0.1; // step 値を "0.1" に設定
inputElement.step = "any"; // step を "any" に設定
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}} の {{HTMLElement("input/range", "range")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}} 型
- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.type")}}
