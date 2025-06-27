---
title: "SVGTransform: matrix プロパティ"
short-title: matrix
slug: Web/API/SVGTransform/matrix
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

**`matrix`** は {{domxref("SVGTransform")}} インターフェイスの読み取り専用プロパティで、この座標変換の `type` に対応する座標変換行列を表します。

`matrix` オブジェクトが直接変更された場合（すなわち、 `SVGTransform` インターフェイス自体のメソッドを使用せずに変更された場合）、 `SVGTransform` の `type` は `SVG_TRANSFORM_MATRIX` に変更されます。

- `SVG_TRANSFORM_MATRIX` では、行列にはユーザーから提供された a、b、c、d、e、f の値が含まれます。

- `SVG_TRANSFORM_TRANSLATE` では、 e と f は移動量を表します（a=1、b=0、c=0、d=1 です）。

- `SVG_TRANSFORM_SCALE` では、 a と d は拡大量を表します（b=0、c=0、e=0、f=0）。

- `SVG_TRANSFORM_SKEWX` および `SVG_TRANSFORM_SKEWY` では、a、b、c、d が指定された歪めを生み出す行列を表します（e=0 および f=0）。

- `SVG_TRANSFORM_ROTATE` では、a、b、c、d、e、f が指定された回転を生み出す行列を表します。回転は中心点 (0, 0) の周りで行われ、 e と f はゼロです。

## 値

生きた {{domxref("DOMMatrix")}} オブジェクトです。

## 例

### 行列のアクセスと変更

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="red" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// 回転の座標変換を作成して追加
const rotateTransform = rect.ownerSVGElement.createSVGTransform();
rotateTransform.setRotate(30, 100, 100); // 30 度回転
transformList.appendItem(rotateTransform);

// 行列へアクセス
const matrix = transformList.getItem(0).matrix;
console.log(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);

// 行列を直接変更
matrix.a = 2; // Double the horizontal scaling
console.log(transformList.getItem(0).type); // 出力: 1 (SVG_TRANSFORM_MATRIX)
```

### 座標変換の種類を理解する

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// 移動の座標変換を適用
const translateTransform = rect.ownerSVGElement.createSVGTransform();
translateTransform.setTranslate(20, 30);
transformList.appendItem(translateTransform);

// 行列にアクセス
const matrix = transformList.getItem(0).matrix;
console.log(matrix.e, matrix.f); // 出力: 20, 30
console.log(transformList.getItem(0).type); // 出力: 2 (SVG_TRANSFORM_TRANSLATE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform.type")}}
- {{domxref("DOMMatrix")}}
