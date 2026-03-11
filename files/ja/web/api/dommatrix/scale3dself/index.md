---
title: "DOMMatrix: scale3dSelf() メソッド"
short-title: scale3dSelf()
slug: Web/API/DOMMatrix/scale3dSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`scale3dSelf()`** は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、変更を行う座標変換メソッドであり、指定された原点（デフォルトは `(0, 0, 0)`）を中心として、3 軸すべてに指定された変倍率を適用することで行列を変更し、三次元で変倍された行列を返します。

行列を変更せずに三次元変倍する場合は、 {{domxref("DOMMatrixReadOnly.scale3d()")}} を参照してください。これは、元の行列を変更せずに新しい変倍行列を生成します。

## 構文

```js-nolint
scale3dSelf()
scale3dSelf(scale)
scale3dSelf(scale, originX)
scale3dSelf(scale, originX, originY)
scale3dSelf(scale, originX, originY, originZ)
```

### 引数

- `scale`
  - : 乗数、倍率値。倍率が指定されない場合、デフォルトで `1` となります。倍率が 1 でない場合、現在の行列の {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} プロパティは `false` に設定されます。
- `originX` {{optional_inline}}
  - : 座標変換の原点の X 座標。原点が与えられなかった場合、既定値は `0` です。
- `originY` {{optional_inline}}
  - : 座標変換の原点の Y 座標。原点が与えられなかった場合、既定値は `0` です。
- `originZ` {{optional_inline}}
  - : 座標変換の原点の Z 座標。原点が与えられなかった場合、既定値は `0` です。

### 返値

自分自身を返します。 {{domxref("DOMMatrix")}} です。

## 例

```js
const matrix = new DOMMatrix();
console.log(matrix.scale3dSelf(2).toString());
/* matrix3d(
    2, 0, 0, 0, 
    0, 2, 0, 0, 
    0, 0, 2, 0, 
    0, 0, 0, 1) */
console.log(matrix.scale3dSelf(3.1, 25, 25, 1.25).toString());
/* matrix3d(
    6.2, 0, 0, 0,
    0, 6.2, 0, 0, 
    0, 0, 6.2, 0, 
    -105, -105, -5.25, 1) */
console.log(matrix.toString());
/* matrix3d(
    6.2, 0, 0, 0, 
    0, 6.2, 0, 0, 
    0, 0, 6.2, 0, 
    -105, -105, -5.25, 1) （上と同じ） */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.scale3d()")}}
- {{domxref("DOMMatrix.scaleSelf()")}}
- CSS の {{cssxref("transform")}} プロパティ、{{cssxref("transform-function/scale3d", "scale3d()")}} 関数、{{cssxref("transform-function/matrix3d", "matrix3d()")}} 関数
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスの {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} メソッド
