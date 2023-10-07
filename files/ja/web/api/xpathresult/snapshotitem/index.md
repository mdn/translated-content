---
title: XPathResult.snapshotItem()
slug: Web/API/XPathResult/snapshotItem
---

{{APIRef("DOM XPath")}}

**`snapshotItem()`** は {{domxref("XPathResult")}} インターフェイスのメソッドで、アイテムのスナップショットのコレクション、または添字がノードの範囲を外れている場合は `null` を返します。イテレーターの返値とは異なり、スナップショットは無効になることはありませんが、変更したときに現在の文書に対応しない場合があります。

## 構文

```
var node = result.snapshotItem(i);
```

### 返値

`XPathResult` のノードセット内の指定された添字の {{domxref("Node")}} です。

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
var xpath = "//div";
var result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);
var node = null;
var tagNames = [];
for (var i = 0; i < result.snapshotLength; i++) {
  var node = result.snapshotItem(i);
  tagNames.push(node.localName);
}
document.querySelector("output").textContent = tagNames.join(", ");
```

### 結果

{{EmbedLiveSample('Example', 400, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
