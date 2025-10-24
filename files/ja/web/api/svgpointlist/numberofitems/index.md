---
title: "SVGPointList: numberOfItems プロパティ"
short-title: numberOfItems
slug: Web/API/SVGPointList/numberOfItems
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

**`numberOfItems`** は {{domxref("SVGPointList")}} インターフェイスの読み取り専用プロパティで、リスト内のアイテム数を返します。

## 値

リストのアイテム数です。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。 `numberOfItems` プロパティは `5` を返します。

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
console.log(example.points.numberOfItems); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
