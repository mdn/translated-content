---
title: "SVGLengthList: appendItem() メソッド"
short-title: appendItem()
slug: Web/API/SVGLengthList/appendItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

**`appendItem()`** は {{domxref("SVGLengthList")}} インターフェイスのメソッドで、リストの末尾に新しいアイテムを追加します。指定されたアイテムがすでにリストに存在する場合は、このリストに追加する前に、以前のリストから除去します。追加されたアイテムはアイテムそのものであり、コピーではありません。

## 構文

```js-nolint
appendItem(newItem)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGLength")}} です。

### 返値

リストに追加された {{domxref("SVGLength")}} です。

### 例外

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : リストが読み取り専用である場合に発生します。

## 例

完全な例については {{domxref("SVGLengthList")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
