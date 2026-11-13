---
title: "SVGNumberList: replaceItem() メソッド"
short-title: replaceItem()
slug: Web/API/SVGNumberList/replaceItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`replaceItem()`** は {{domxref("SVGNumberList")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。新しいアイテムがすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。挿入されるアイテムはアイテムそのものであり、コピーではありません。アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムのインデックスは、アイテムが除去される前であることに注意してください。

## 構文

```js-nolint
replaceItem(newItem, index)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGNumber")}} です。
- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストに追加された {{domxref("SVGNumber")}} です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : {{domxref("SVGNumberList")}} が読み取り専用属性に相当するか、オブジェクト自身が読み取り専用である場合に発生します。
- {{domxref("DOMException")}} `IndexSizeError`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
