---
title: "SVGLengthList: getItem() メソッド"
short-title: getItem()
slug: Web/API/SVGLengthList/getItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

**`getItem()`** は {{domxref("SVGLengthList")}} インターフェイスのメソッドで、リストから指定されたアイテムを返します。返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。最初のアイテムはインデックス 0 です。

## 構文

```js-nolint
getItem(index)
```

### 引数

- `index`
  - : 受け取るアイテムの位置を指定する非負の整数です。

### 返値

リスト内の指定された位置にある {{domxref("SVGLength")}} です。

### 例外

- {{domxref("DOMException")}} `IndexSizeError`
  - : インデックスがリストの範囲を外れていた場合に発生します。

## 例

完全な例については {{domxref("SVGLengthList")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
