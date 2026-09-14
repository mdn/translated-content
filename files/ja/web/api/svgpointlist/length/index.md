---
title: "SVGPointList: length プロパティ"
short-title: length
slug: Web/API/SVGPointList/length
l10n:
  sourceCommit: 45088e6e93e190ba453db2cd6e2360af48904cae
---

{{APIRef("SVG")}}

**`length`** は {{domxref("SVGPointList")}} インターフェイスのプロパティで、リスト内のアイテム数を返します。

## 値

リストのアイテム数です。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。 `length` プロパティは `5` を返します。

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
console.log(example.points.length); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
