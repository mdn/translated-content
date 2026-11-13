---
title: "SVGPointList: getItem() メソッド"
short-title: getItem()
slug: Web/API/SVGPointList/getItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

**`getItem()`** は {{domxref("SVGPointList")}} インターフェイスのメソッドで、リストから指定した位置のアイテムを取得します。

## 構文

```js-nolint
getItem(index)
```

### 引数

- `index`
  - : 返すアイテムのインデックスです。

### 返値

{{domxref("SVGPoint")}} オブジェクトです。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 渡されたインデックスがリスト内のアイテムの数よりも大きい場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。インデックス `0` の位置の {{domxref("SVGPoint")}} を取得します。

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
console.log(example.points.getItem(0));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
