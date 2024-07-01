---
title: "XPathResult: booleanValue プロパティ"
short-title: booleanValue
slug: Web/API/XPathResult/booleanValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`booleanValue`** は {{domxref("XPathResult")}} インターフェイスのプロパティで、 {{domxref("XPathResult.resultType")}} が `BOOLEAN_TYPE` である結果の論理値を返します。

{{AvailableInWorkers}}

## 値

返値は {{domxref("Document.evaluate()")}} が返す `XPathResult` の論理値です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `BOOLEAN_TYPE` でない場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

## 例

次の例では `booleanValue` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<p>Text is 'XPath example': <output></output></p>
```

### JavaScript

```js
const xpath = "//div/text() = 'XPath example'";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.BOOLEAN_TYPE,
  null,
);
document.querySelector("output").textContent = result.booleanValue;
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
