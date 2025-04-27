---
title: "SVGPointList: appendItem() メソッド"
short-title: appendItem()
slug: Web/API/SVGPointList/appendItem
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

**`appendItem()`** は {{domxref("SVGPointList")}} インターフェイスのメソッドで、リストの末尾に{{domxref("SVGPoint","点")}}を追加します。

## 構文

```js-nolint
appendItem(obj)
```

### 引数

- `obj`
  - : 追加する点の座標の入った {{domxref("SVGPoint")}} オブジェクトです。

### 返値

追加された {{domxref("SVGPoint")}} オブジェクトです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。新しい {{domxref("SVGPoint")}} が作成され、リストに追加されます。

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
let svgPoint = document.getElementById("svg").createSVGPoint();
svgPoint.y = 10;
svgPoint.x = 10;
console.log(example.points.appendItem(svgPoint));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
