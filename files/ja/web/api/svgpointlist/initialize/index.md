---
title: "SVGPointList: initialize() メソッド"
short-title: initialize()
slug: Web/API/SVGPointList/initialize
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

**`initialize()`** は {{domxref("SVGPointList")}} インターフェイスのメソッドで、リストをクリアしてから、新しい {{domxref("SVGPoint")}} オブジェクトをリストへ追加します。

## 構文

```js-nolint
initialize(obj)
```

### 引数

- `obj`
  - : リストが初期化された際に追加する点の座標が含まれている {{domxref("SVGPoint")}} オブジェクト。

### 返値

追加された {{domxref("SVGPoint")}} オブジェクトです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。返される {{domxref("SVGPointList.length")}} の値は `5` です。 `initialize()` を呼び出した後、返される {{domxref("SVGPointList.length")}} の値は `1` になります。

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
console.log(example.points.length); //5;
let svgPoint = document.getElementById("svg").createSVGPoint();
example.points.initialize(svgPoint);
console.log(example.points.length); //1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
