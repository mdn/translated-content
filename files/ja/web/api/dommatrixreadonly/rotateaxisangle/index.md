---
title: "DOMMatrixReadOnly: rotateAxisAngle() メソッド"
short-title: rotateAxisAngle()
slug: Web/API/DOMMatrixReadOnly/rotateAxisAngle
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`rotateAxisAngle()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、指定されたベクトルと角度でソース行列を回転させて生成された、新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。

行列を回転させた形に変更するには、{{domxref("DOMMatrix.rotateAxisAngleSelf()")}} を参照してください。

## 構文

```js-nolint
rotateAxisAngle()
rotateAxisAngle(rotX)
rotateAxisAngle(rotX, rotY)
rotateAxisAngle(rotX, rotY, rotZ)
rotateAxisAngle(rotX, rotY, rotZ, angle)
```

### 引数

- `rotX`
  - : 数値です。回転軸を示すベクトルの X 座標です。ゼロでない場合、{{domxref("DOMMatrixReadOnly.is2D", "is2D")}} は false になります。
- `rotY` {{optional_inline}}
  - : 数値です。回転軸を示すベクトルの Y 座標です。未定義の場合、`rotX` 値が使用されます。ゼロでない場合、{{domxref("DOMMatrixReadOnly.is2D", "is2D")}} は false になります。
- `rotZ` {{optional_inline}}
  - : 数値です。回転軸を示すベクトルの Z 座標です。未定義の場合、`rotX` 値が使用されます。
- `angle` {{optional_inline}}
  - : 数値です。ベクトル軸の周囲を開店する角度の度数です。

### 返値

[`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.rotateAxisAngle().toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.rotateAxisAngle(10, 20, 30).toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.rotateAxisAngle(10, 20, 30, 45).toString());
/* matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 
    0, 0, 0, 0, 1) */
console.log(matrix.rotateAxisAngle(5, 5, 5, -45).toString());
/* matrix3d(
    0.805, -0.311, 0.506, 0, 
    0.506, 0.805, -0.311, 0, 
    -0.311, 0.506, 0.805, 0, 
    0, 0, 0, 1) */
console.log(matrix.toString()); // 出力: "matrix(1, 0, 0, 1, 0, 0)" （変化しない）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotate()")}}
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
- CSS の {{cssxref("transform")}} プロパティと {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数
- CSS {{cssxref("rotate")}} property
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスと {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} メソッド
