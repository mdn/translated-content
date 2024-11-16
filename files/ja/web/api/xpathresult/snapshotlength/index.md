---
title: "XPathResult: snapshotLength プロパティ"
short-title: snapshotLength
slug: Web/API/XPathResult/snapshotLength
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`snapshotLength`** は {{domxref("XPathResult")}} インターフェイスの読み取り専用プロパティで、結果スナップショットのノード数を表します。

{{AvailableInWorkers}}

## 値

結果スナップショットのノード数を表す整数値です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `UNORDERED_NODE_SNAPSHOT_TYPE` または `ORDERED_NODE_SNAPSHOT_TYPE` でない場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

## 例

次の例では `snapshotLength` プロパティを使用しています。

### HTML

```html
<div>XPath example</div>
<div>Number of matched nodes: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);
document.querySelector("output").textContent = result.snapshotLength;
```

### 結果

{{EmbedLiveSample('Examples', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
