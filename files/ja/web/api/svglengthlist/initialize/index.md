---
title: "SVGLengthList: initialize() メソッド"
short-title: initialize()
slug: Web/API/SVGLengthList/initialize
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

**`initialize()`** は {{domxref("SVGLengthList")}} インターフェイスのメソッドで、リストから既存のアイテムをすべて除去し、引数で指定された単一のアイテムを保持するようリストを再初期化します。追加されるアイテムがすでにリストに存在する場合は、このリストに追加される前に、前のリストから削除されます。追加されたアイテムはアイテムそのものであり、コピーされることはありません。返値は、リストに追加されたアイテムです。

## 構文

```js-nolint
initialize(newItem)
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
