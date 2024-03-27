---
title: "XPathResult: numberValue プロパティ"
short-title: numberValue
slug: Web/API/XPathResult/numberValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`numberValue`** は {{domxref("XPathResult")}} インターフェイスの読み取り専用プロパティで、 {{domxref("XPathResult.resultType")}} が `NUMBER_TYPE` である結果の数値を返します。

{{AvailableInWorkers}}

## 値

返値は {{domxref("Document.evaluate()")}} が返す `XPathResult` の数値です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `NUMBER_TYPE` でない場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

## 例

次の例では `numberValue` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const xpath = "count(//div)";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.NUMBER_TYPE,
  null,
);
document.querySelector("output").textContent = result.numberValue;
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
