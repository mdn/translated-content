---
title: "SVGStringList: initialize() メソッド"
short-title: initialize()
slug: Web/API/SVGStringList/initialize
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

**`initialize()`** は {{domxref("SVGStringList")}} インターフェイスのメソッドで、リストから既存のアイテムをすべて除去し、引数で指定された単一のアイテムを保持するようリストを再初期化します。追加されるアイテムがすでにリストに存在する場合は、このリストに追加される前に、前のリストから削除されます。追加されたアイテムはアイテムそのものであり、コピーされることはありません。返値は、リストに追加されたアイテムです。

## 構文

```js-nolint
initialize(newItem)
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
