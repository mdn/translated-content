---
title: "XPathResult: snapshotItem() メソッド"
short-title: snapshotItem()
slug: Web/API/XPathResult/snapshotItem
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`snapshotItem()`** は {{domxref("XPathResult")}} インターフェイスのメソッドで、アイテムのスナップショットの集合、またはインデックスがノードの範囲を外れている場合は `null` を返します。イテレーターの返値とは異なり、スナップショットは無効になることはありませんが、変更したときに現在の文書に対応しない場合があります。

## 構文

```js-nolint
snapshotItem(i)
```

### 引数

- `i`
  - : 数値で、項目のインデックスです。

### 返値

`XPathResult` のノード集合内の指定されたインデックスの {{domxref("Node")}} です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `UNORDERED_NODE_SNAPSHOT_TYPE` または `ORDERED_NODE_SNAPSHOT_TYPE` でない場合、 {{domxref("XPathException")}} による例外が `TYPE_ERR` 型で発生します。

## 例

以下の例は `snapshotItem()` メソッドの使用例を表しています。

### HTML

```html
<div>XPath example</div>
<div>Tag names of the matched nodes: <output></output></div>
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
let node = null;
const tagNames = [];
for (let i = 0; i < result.snapshotLength; i++) {
  node = result.snapshotItem(i);
  tagNames.push(node.localName);
}
document.querySelector("output").textContent = tagNames.join(", ");
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
