---
title: "SVGTransformList: removeItem() メソッド"
short-title: removeItem()
slug: Web/API/SVGTransformList/removeItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`removeItem()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、指定された位置にある既存のアイテムをリストから除去します。

## 構文

```js-nolint
removeItem(index)
```

### 引数

- `index`
  - : `integer` 除去するアイテムのインデックスを unsigned long で表します。

### 返値

{{domxref("SVGTransform")}} オブジェクトです。リストから除去されたアイテムです。

### 例外

このメソッドは、次の型の {{domxref("DOMException")}} を発生させる可能性があります。

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

- `IndexSizeError` {{domxref("DOMException")}}
  - : インデックス番号が {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}} 以上であった場合に発生します。

## 例

### リストから座標変換を削除

```html
<svg width="200" height="200" id="mySvg">
  <rect
    width="100"
    height="100"
    fill="blue"
    transform="translate(50,50) rotate(45)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

const removedTransform = transformList.removeItem(0);
console.dir(removedTransform); // 出力: SVGTransform { type: 2, matrix: SVGMatrix, angle: 0 }

// 更新されたリストの長さ
console.log(`更新後の座標変換の数: ${transformList.length}`); // 出力: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}}
