---
title: "SVGTransformList: createSVGTransformFromMatrix() メソッド"
short-title: createSVGTransformFromMatrix()
slug: Web/API/SVGTransformList/createSVGTransformFromMatrix
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`createSVGTransformFromMatrix()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、 `SVG_TRANSFORM_MATRIX` 型の変換に初期化され、その値が指定された行列である {{domxref("SVGTransform")}} オブジェクトを作成します。

引数行列の値はコピーされます。この行列引数は `SVGTransform::matrix` に取りつけられません。

## 構文

```js-nolint
createSVGTransformFromMatrix(matrix)
```

### 引数

- `matrix`
  - : {{domxref("DOMMatrix")}} オブジェクトです。座標変換行列です。

### 返値

{{domxref("SVGTransform")}} オブジェクトです。

## 例

### 行列から座標変換を作成

```html
<svg width="200" height="200">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// 回転変換の DOMMatrix オブジェクトを作成
const rotationMatrix = new DOMMatrix();
rotationMatrix.a = Math.cos(Math.PI / 4); // 45 度の回転
rotationMatrix.b = Math.sin(Math.PI / 4);
rotationMatrix.c = -Math.sin(Math.PI / 4);
rotationMatrix.d = Math.cos(Math.PI / 4);

// 行列から SVGTransform オブジェクトを作成
const svgTransform = transformList.createSVGTransformFromMatrix(rotationMatrix);

// 新しい座標変換を座標変換リストに追加
transformList.appendItem(svgTransform);

console.dir(svgTransform); // 出力: SVGTransform { type: 1, matrix: SVGMatrix, angle: 0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
- {{domxref("DOMMatrix")}}
