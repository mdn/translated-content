---
title: "XPathResult: singleNodeValue プロパティ"
short-title: singleNodeValue
slug: Web/API/XPathResult/singleNodeValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`singleNodeValue`** は {{domxref("XPathResult")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Node")}} 値を返すか、{{domxref("XPathResult.resultType")}} が `ANY_UNORDERED_NODE_TYPE` または `FIRST_ORDERED_NODE_TYPE` である結果のノードが一致しなかった場合は `null` を返します。

## 値

返値は {{domxref("Document.evaluate()")}} が返す `XPathResult` の {{domxref("Node")}} 値です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `ANY_UNORDERED_NODE_TYPE` または `FIRST_ORDERED_NODE_TYPE` でない場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

## 例

次の例では `singleNodeValue` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<div>
  Tag name of the element having the text content 'XPath example':
  <output></output>
</div>
```

### JavaScript

```js
const xpath = "//*[text()='XPath example']";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);
document.querySelector("output").textContent = result.singleNodeValue.localName;
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
