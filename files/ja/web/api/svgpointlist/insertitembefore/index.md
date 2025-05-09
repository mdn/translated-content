---
title: "SVGPointList: insertItemBefore() メソッド"
short-title: insertItemBefore()
slug: Web/API/SVGPointList/insertItemBefore
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

**`insertItemBefore()`** は {{domxref("SVGPointList")}} インターフェイスのメソッドで、{{domxref("SVGPoint", "点")}}をリスト内の他のアイテムの前に挿入します。

## 構文

```js-nolint
insertItemBefore(obj, index)
```

### 引数

- `obj`
  - : 挿入される点の座標が入っている {{domxref("SVGPoint")}} オブジェクトです。
- `index`
  - : オブジェクトをその前に挿入するアイテムのインデックスです。渡されたインデックスがリストの長さを上回る場合、インデックスはリストの長さに設定され、アイテムはリスト内の末尾のアイテムの前に挿入されます。

### 返値

挿入された {{domxref("SVGPoint")}} オブジェクトです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : リストが読み取り専用である場合に発生します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。新しい {{domxref("SVGPoint")}} が作成され、インデックス `2` の位置の前にその点を挿入します。

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
console.log(example.points.insertItemBefore(svgPoint, 2));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
