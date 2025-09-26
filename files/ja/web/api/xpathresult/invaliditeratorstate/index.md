---
title: "XPathResult: invalidIteratorState プロパティ"
short-title: invalidIteratorState
slug: Web/API/XPathResult/invalidIteratorState
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`invalidIteratorState`** は {{domxref("XPathResult")}} インターフェイスの読み取り専用プロパティで、イテレーターが不正な状態になったことを示します。 {{domxref("XPathResult.resultType")}} が `UNORDERED_NODE_ITERATOR_TYPE` または `ORDERED_NODE_ITERATOR_TYPE` で、この結果を返してから文書が変更された場合は `true` です。

{{AvailableInWorkers}}

## 値

イテレーターが不正になったかどうかを示す論理値。

## 例

次の例では `invalidIteratorState` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<p>Iterator state: <output></output></p>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
// Invalidates the iterator state
document.querySelector("div").remove();
document.querySelector("output").textContent = result.invalidIteratorState
  ? "invalid"
  : "valid";
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
