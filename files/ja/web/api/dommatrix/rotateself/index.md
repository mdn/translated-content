---
title: "DOMMatrix: rotateSelf() メソッド"
short-title: rotateSelf()
slug: Web/API/DOMMatrix/rotateSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`rotateSelf()` は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、行列に変更を行う座標変換メソッドです。ソース行列をそれぞれの軸を中心に指定された角度だけ回転させ、回転後の行列を返します。

変更せずに行列を回転させるには、{{domxref("DOMMatrixReadOnly.rotate()")}} を参照してください。

## 構文

```js-nolint
rotateSelf()
rotateSelf(rotX)
rotateSelf(rotX, rotY)
rotateSelf(rotX, rotY, rotZ)
```

### 引数

- `rotX`
  - : 数値です。回転軸を示すベクトルの X 座標です。
- `rotY` {{optional_inline}}
  - : 数値です。回転軸を示すベクトルの Y 座標です。
- `rotZ` {{optional_inline}}
  - : 数値です。回転軸を示すベクトルの Z 座標です。

引数が 1 つだけ渡された場合、`rotZ` は `rotX` の値となり、`rotX` と `rotY` は両方とも `0` で、回転は二次元回転となります。`rotX` と `rotY` が 0 以外の場合、[`is2D`](/ja/docs/Web/API/DOMMatrixReadOnly/is2D) は `false` です。

### 返値

自分自身を返します。指定されたベクトルで回転された [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString()); // 出力: "matrix(1, 0, 0, 1, 0, 0)"
matrix.rotateSelf(30); // 変更する
console.log(matrix); // 出力: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.rotate()")}}
- CSS の {{cssxref("transform")}} プロパティ
- CSS の {{cssxref("rotate")}} プロパティ
- CSS の {{cssxref("transform-function")}} 関数
  - {{cssxref("transform-function/rotate", "rotate()")}}
  - {{cssxref("transform-function/rotate3d", "rotate3d()")}}
  - {{cssxref("transform-function/rotateX", "rotateX()")}}
  - {{cssxref("transform-function/rotateY", "rotateY()")}}
  - {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インスタンスメソッド
  - {{domxref("CanvasRenderingContext2D.rotate()")}}
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
