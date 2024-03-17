---
title: "XPathResult: iterateNext() メソッド"
short-title: iterateNext()
slug: Web/API/XPathResult/iterateNext
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

**`iterateNext()`** は {{domxref("XPathResult")}} インターフェイスのメソッドで、ノード集合の結果を反復処理し、そこから次のノードを返すか、まだノードがない場合は `null` を返します。

## 構文

```js-nolint
iterateNext()
```

### 引数

なし。

### 返値

`XPathResult` ノード集合の中の次の {{domxref("Node")}} です。

### 例外

#### TYPE_ERR

{{domxref("XPathResult.resultType")}} が `UNORDERED_NODE_ITERATOR_TYPE` または `ORDERED_NODE_ITERATOR_TYPE` でない場合、 `TYPE_ERR` 型の {{domxref("XPathException")}} が発生します。

#### INVALID_STATE_ERR

結果を返してから文書が変更された場合、 `INVALID_STATE_ERR` 型の {{domxref("XPathException")}} が発生します。

## 例

次の例では `iterateNext()` メソッドを使用しています。

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
  XPathResult.ANY_TYPE,
  null,
);
let node = null;
const tagNames = [];
while ((node = result.iterateNext())) {
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
