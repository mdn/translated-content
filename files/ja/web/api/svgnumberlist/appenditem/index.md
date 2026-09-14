---
title: "SVGNumberList: appendItem() メソッド"
short-title: appendItem()
slug: Web/API/SVGNumberList/appendItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`appendItem()`** は {{domxref("SVGNumberList")}} インターフェイスのメソッドで、リストの末尾に新しいアイテムを追加します。指定されたアイテムがすでにリストに存在する場合は、このリストに追加する前に、以前のリストから除去します。追加されたアイテムはアイテムそのものであり、コピーではありません。

## 構文

```js-nolint
appendItem(newItem)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGNumber")}} です。

### 返値

リストに追加された {{domxref("SVGNumber")}} です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : {{domxref("SVGNumberList")}} が読み取り専用属性に相当するか、オブジェクト自身が読み取り専用である場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
