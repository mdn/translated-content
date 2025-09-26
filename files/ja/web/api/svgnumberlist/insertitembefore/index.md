---
title: "SVGNumberList: insertItemBefore() メソッド"
short-title: insertItemBefore()
slug: Web/API/SVGNumberList/insertItemBefore
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`insertItemBefore()`** は {{domxref("SVGNumberList")}} インターフェイスのメソッドで、指定した位置に新しいアイテムをリストに挿入します。最初のアイテムのインデックスは 0 です。挿入されるアイテムはアイテムそのものであり、コピーではありません。

- 新しいアイテムがすでにリスト内にある場合、このリストに挿入される前に、前回あったリストから除去されます。
- アイテムがすでにこのリスト内にある場合、挿入するアイテムの位置は、アイテムが除去される前の時点のものであることに注意してください。
- 位置が 0 である場合、新しいアイテムはリストの先頭に挿入されます。
- 位置が {{domxref("SVGNumberList.length", "length")}} 以上である場合、新しいアイテムはリストの末尾に追加されます。

## 構文

```js-nolint
insertItemBefore(newItem, index)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGNumber")}} です。
- `index`
  - : 新しいアイテムを直前の位置に挿入するアイテムのインデックスを指定する非負の整数です。

### 返値

リストに追加された {{domxref("SVGNumber")}} です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : {{domxref("SVGNumberList")}} が読み取り専用属性に相当するか、オブジェクト自身が読み取り専用である場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
