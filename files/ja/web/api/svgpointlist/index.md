---
title: SVGPointList
slug: Web/API/SVGPointList
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

**`SVGPointList`** インターフェイスは、 {{domxref("SVGPoint")}} オブジェクトのリストを表します。

`SVGPointList` オブジェクトは読み取り専用として指定することができます。すなわち、オブジェクトを変更しようとすると例外が発生するようにすることができます。

## インスタンスプロパティ

- {{domxref("SVGPointList.length")}} {{ReadOnlyInline}}
  - : リスト内のアイテム数を返します。
- {{domxref("SVGPointList.numberOfItems")}} {{ReadOnlyInline}}
  - : リスト内のアイテム数を返します。

## インスタンスメソッド

- {{domxref("SVGPointList.clear()")}}
  - : リスト内のすべてのアイテムを除去します。
- {{domxref("SVGPointList.initialize()")}}
  - : まずリスト内のすべてのアイテムを除去し、そのリストに単一の値を追加します。
- {{domxref("SVGPointList.getItem()")}}
  - : リストから指定した位置のアイテムを取得します。
- {{domxref("SVGPointList.insertItemBefore()")}}
  - : 要素をリストの指定した位置に挿入します。
- {{domxref("SVGPointList.replaceItem()")}}
  - : リスト内のアイテムを新しいアイテムで置き換えます。
- {{domxref("SVGPointList.removeItem()")}}
  - : リストからアイテムを除去します。
- {{domxref("SVGPointList.appendItem()")}}
  - : アイテムをリストの末尾に追加します。

## 例

次の例では、 SVG の中に 5 つの座標ペアを持つ {{SVGElement("polyline")}} があります。 `points` プロパティは `SVGPointList` を返します。

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
let example = document.getElementById("example");
console.log(example.points); // SVGPointList
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
