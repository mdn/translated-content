---
title: "XPathResult: stringValue プロパティ"
short-title: stringValue
slug: Web/API/XPathResult/stringValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`stringValue`** は {{domxref("XPathResult")}} インターフェイスの読み取り専用プロパティで、 {{domxref("XPathResult.resultType")}} が `STRING_TYPE` である結果の文字列値を返します。

{{AvailableInWorkers}}

## 値

返値は {{domxref("Document.evaluate()")}} が返す `XPathResult` の文字列値です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `STRING_TYPE` でない場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

## 例

次の例では `stringValue` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<div>Text content of the &lt;div&gt; above: <output></output></div>
```

### JavaScript

```js
const xpath = "//div/text()";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.STRING_TYPE,
  null,
);
document.querySelector("output").textContent = result.stringValue;
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
