---
title: "DOMRectList: item() メソッド"
short-title: item()
slug: Web/API/DOMRectList/item
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}

{{domxref("DOMRectList")}} の `item()` メソッドは、リスト内の指定されたインデックスの {{domxref("DOMRect")}} を返します。インデックスが範囲外の場合は `null` を返します。

## 構文

```js-nolint
item(index)
```

### 引数

- `index`
  - : 取得する `DOMRectList` 内の `DOMRect` の位置を表す 0 から始まる整数。

### 返値

`DOMRectList` 内の指定した位置にある {{domxref("DOMRect")}} オブジェクト、またはインデックスがリスト内の長方形の数以上である場合は null。

## 例

```js
const rects = document.getElementById("rects").getClientRects();
console.log(rects.length); // DOMRectList の中の長方形の数

if (rects.length > 0) {
  console.log(rects.item(0)); // 最初の DOMRect オブジェクトをログ出力
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
