---
title: "SVGPointList: replaceItem() メソッド"
short-title: replaceItem()
slug: Web/API/SVGPointList/replaceItem
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

**`replaceItem()`** は {{domxref("SVGPointList")}} インターフェイスのメソッドで、リスト内の{{domxref("SVGPoint","点")}}を置き換えます。

## 構文

```js-nolint
replaceItem(obj, index)
```

### 引数

- `obj`
  - : 挿入する点の座標が入った {{domxref("SVGPoint")}} オブジェクトです。
- `index`
  - : 置き換えるアイテムのインデックスです。

### 返値

新しい {{domxref("SVGPoint")}} オブジェクトです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : リストが読み取り専用である場合に発生します。
- `IndexSizeError` {{domxref("DOMException")}}
  - : 渡されたインデックスがリスト内のアイテムの数よりも大きい場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。新しい {{domxref("SVGPoint")}} を作成し、インデックス `1` （リストの内 2 つ目のアイテム）の点を置き換えます。

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
console.log(example.points.replaceItem(svgPoint, 1));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
