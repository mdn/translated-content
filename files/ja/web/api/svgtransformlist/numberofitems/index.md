---
title: "SVGTransformList: numberOfItems プロパティ"
short-title: numberOfItems
slug: Web/API/SVGTransformList/numberOfItems
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

**`numberOfItems`** は {{domxref("SVGTransformList")}} インターフェイスのプロパティで、リスト内のアイテム数を返します。

## 値

`integer` で、このリストにある {{domxref("SVGTransform")}} オブジェクトの数を unsigned long で示します。

## 例

### `numberOfItems` プロパティへのアクセス

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// <rect> 要素への移動座標変換を適用
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

console.log(`座標変換の数: ${transformList.numberOfItems}`); // 出力: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
