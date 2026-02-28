---
title: "DOMMatrix: rotateAxisAngleSelf() メソッド"
short-title: rotateAxisAngleSelf()
slug: Web/API/DOMMatrix/rotateAxisAngleSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`rotateAxisAngleSelf()` は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、指定されたベクトルと角度でソース行列を回転させる座標変換メソッドであり、変更後の行列を返します。

行列を変更せずに回転させるには、{{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}} を参照してください。これは元の行列を変更せずに、新しい回転後の行列を生成します。

## 構文

```js-nolint
rotateAxisAngleSelf()
rotateAxisAngleSelf(rotX)
rotateAxisAngleSelf(rotX, rotY)
rotateAxisAngleSelf(rotX, rotY, rotZ)
rotateAxisAngleSelf(rotX, rotY, rotZ, angle)
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

`rotY` と `rotZ` の両方が省略されている場合、`rotZ` は `rotX` の値に設定され、`rotX` と `rotY` の両方が `0` となります。

### 返値

[`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.rotateAxisAngleSelf(10, 20, 30, 45).toString());
/* "matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 
    0, 0, 0, 0, 1)" */
console.log(matrix.toString());
/* "matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 0, 
    0, 0, 0, 1)" */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
- CSS の {{cssxref("transform")}} プロパティと {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数
- CSS {{cssxref("rotate")}} property
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスと {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} メソッド
