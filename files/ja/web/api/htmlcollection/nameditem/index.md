---
title: "HTMLCollection: namedItem() メソッド"
short-title: namedItem()
slug: Web/API/HTMLCollection/namedItem
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

**`namedItem()`** は {{domxref("HTMLCollection")}} インターフェイスのメソッドで、この集合の中で `id` または `name` 属性が指定された名前に一致する {{domxref("Element")}} の先頭のものを返します。一致する要素がなければ `null` を返します。

JavaScript では、配列のブラケット記法を{{jsxref("String", "文字列")}}で `collection["value"]` のように使用すると、`collection.namedItem("value")` と同等になります。

## 構文

```js-nolint
namedItem(key)
```

### 引数

- `key` は文字列で、探している要素の `id` または `name` 属性の値を表します。

### 返値

- `item` は {{domxref("HTMLCollection")}} の中で _key_ に一致する最初の {{domxref("Element")}} です。または、存在しない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="firstname">Carina</span>
  <span name="lastname">Anand</span>
  <span id="degree">(MD)</span>
</div>
```

### JavaScript

```js
const container = document.getElementById("personal");

// "title" という名前の HTMLSpanElement を返す。そのような要素が存在しない場合は null を返す。
const titleSpan = container.children.namedItem("title");

// 以下の変化形は、name や id が一致する要素がない場合、null ではなく undefined を返す
const firstnameSpan = container.children["firstname"];
const lastnameSpan = container.children.lastname;

// id が "degree" である span 要素を返す
const degreeSpan = container.children.namedItem("degree");

const output = document.createElement("div");
output.textContent = `Result: ${titleSpan.textContent} ${firstnameSpan.textContent} ${lastnameSpan.textContent} ${degreeSpan.textContent}`;

container.insertAdjacentElement("afterend", output);
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
