---
title: "SVGPointList: removeItem() メソッド"
short-title: removeItem()
slug: Web/API/SVGPointList/removeItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

**`removeItem()`** は {{domxref("SVGPointList")}} インターフェイスのメソッドで、このリストから{{domxref("SVGPoint","点")}}を除去します。

## 構文

```js-nolint
removeItem(index)
```

### 引数

- `index`
  - : 除去するアイテムのインデックスです。

### 返値

除去された {{domxref("SVGPoint")}} オブジェクトです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : リストが読み取り専用である場合に発生します。
- `IndexSizeError` {{domxref("DOMException")}}
  - : 渡されたインデックスがリスト内のアイテムの数よりも大きい場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。インデックス `2` にあるアイテムが除去されます。

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
let example = document.getElementById("example");
console.log(example.points.removeItem(2));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
