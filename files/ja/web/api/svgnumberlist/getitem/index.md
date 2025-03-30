---
title: "SVGNumberList: getItem() メソッド"
short-title: getItem()
slug: Web/API/SVGNumberList/getItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`getItem()`** は {{domxref("SVGNumberList")}} インターフェイスのメソッドで、リストから指定されたアイテムを返します。返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。最初のアイテムはインデックス 0 です。

## 構文

```js-nolint
getItem(index)
```

### 引数

- `index`
  - : 受け取るアイテムの位置を指定する非負の整数です。

### 返値

リスト内の指定された位置にある {{domxref("SVGNumber")}} です。

### 例外

- {{domxref("DOMException")}} `IndexSizeError`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
