---
title: "SVGTransform: angle プロパティ"
short-title: angle
slug: Web/API/SVGTransform/angle
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

**`angle`** は {{domxref("SVGTransform")}} インターフェイスの読み取り専用プロパティで、座標変換の角度を度数で表します。

`SVG_TRANSFORM_ROTATE`、`SVG_TRANSFORM_SKEWX`、`SVG_TRANSFORM_SKEWY` では、`angle` は座標変換の回転または歪めの角度を表します。

`SVG_TRANSFORM_MATRIX`、`SVG_TRANSFORM_TRANSLATE`、`SVG_TRANSFORM_SCALE` では、 `angle` はゼロになります。

## 値

整数です。度数での角度を表す浮動小数点数です。

## 例

### `angle` プロパティへのアクセス

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="green" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// 回転の座標変換を作成して追加
const rotateTransform = rect.ownerSVGElement.createSVGTransform();
rotateTransform.setRotate(45, 100, 100); // 45 度回転
transformList.appendItem(rotateTransform);

// angle プロパティにアクセス
console.log(transformList.getItem(0).angle); // 出力: 45
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
