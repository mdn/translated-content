---
title: "DOMMatrixReadOnly: rotate() メソッド"
short-title: rotate()
slug: Web/API/DOMMatrixReadOnly/rotate
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`rotate()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、ソース行列をそれぞれの軸について指定された角度だけ回転させて生成された、新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。

行列を回転させた形に変更するには、{{domxref("DOMMatrix.rotateSelf()")}} を参照してください。

## 構文

```js-nolint
rotate()
rotate(rotX)
rotate(rotX, rotY)
rotate(rotX, rotY, rotZ)
```

### 引数

- `rotX`
  - : 数値です。回転軸を示すベクトルの X 座標です。ゼロでない場合、[`is2D`](/ja/docs/Web/API/DOMMatrixReadOnly/is2D) は false になります。
- `rotY` {{optional_inline}}
  - : 数値です。回転軸を示すベクトルの Y 座標です。ゼロでない場合、[`is2D`](/ja/docs/Web/API/DOMMatrixReadOnly/is2D) は false になります。
- `rotZ` {{optional_inline}}
  - : 数値です。回転軸を示すベクトルの Z 座標です。

`rotX` のみが渡された場合、`rotX` が Z 座標の値として使用され、X 座標と Y 座標は両方ともゼロに設定されます。

### 返値

[`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString());
// 出力: "matrix(1, 0, 0, 1, 0, 0)"

const rotated = matrix.rotate(30); // 回転して代入
console.log(matrix.toString()); // 元の行列は変更されない
// 出力: "matrix(1, 0, 0, 1, 0, 0)"
console.log(rotated.toString());
// 出力: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
- CSS の {{cssxref("transform")}} プロパティと {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数
- CSS {{cssxref("rotate")}} property
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスと {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} メソッド
