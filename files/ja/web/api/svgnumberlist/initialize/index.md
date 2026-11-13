---
title: "SVGNumberList: initialize() メソッド"
short-title: initialize()
slug: Web/API/SVGNumberList/initialize
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`initialize()`** は {{domxref("SVGNumberList")}} インターフェイスのメソッドで、リストから既存のアイテムをすべて除去し、引数で指定された単一のアイテムを保持するようリストを再初期化します。追加されるアイテムがすでにリストに存在する場合は、このリストに追加される前に、前のリストから削除されます。追加されたアイテムはアイテムそのものであり、コピーされることはありません。返値は、リストに追加されたアイテムです。

## 構文

```js-nolint
initialize(newItem)
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
