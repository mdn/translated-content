---
title: "SVGNumberList: removeItem() メソッド"
short-title: removeItem()
slug: Web/API/SVGNumberList/removeItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`removeItem()`** は {{domxref("SVGNumberList")}} インターフェイスのメソッドで、指定された位置にある既存のアイテムをリストから除去します。

## 構文

```js-nolint
removeItem(index)
```

### 引数

- `index`
  - : 削除するアイテムのインデックスを指定する、非負の整数です。

### 返値

リストから削除された {{domxref("SVGNumber")}} です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : {{domxref("SVGNumberList")}} が読み取り専用属性に相当するか、オブジェクト自身が読み取り専用である場合に発生します。
- {{domxref("DOMException")}} `IndexSizeError`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
