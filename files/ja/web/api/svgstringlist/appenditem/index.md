---
title: "SVGStringList: appendItem() メソッド"
short-title: appendItem()
slug: Web/API/SVGStringList/appendItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`appendItem()`** は {{domxref("SVGStringList")}} インターフェイスのメソッドで、リストの末尾に新しいアイテムを追加します。指定されたアイテムがすでにリストに存在する場合は、このリストに追加する前に、以前のリストから除去します。追加されたアイテムはアイテムそのものであり、コピーではありません。

## 構文

```js-nolint
appendItem(newItem)
```

### 引数

- `newItem`
  - : リストに追加する文字列です。

### 返値

リストに追加された文字列です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : {{domxref("SVGStringList")}} が読み取り専用属性に対応するか、オブジェクト自体が読み取り専用であった場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
