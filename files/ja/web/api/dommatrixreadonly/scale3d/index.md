---
title: "DOMMatrixReadOnly: scale3d() メソッド"
short-title: scale3d()
slug: Web/API/DOMMatrixReadOnly/scale3d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`scale3d()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、 行列に三次元の変倍座標変換を適用した結果となる新しい行列を生成します。このメソッドは、ソースとなる三次元行列を指定された変倍率で拡大縮小し、原点の引数で指定された原点（デフォルトは `(0, 0, 0)`）を中心として変換した結果となる新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。

三次元変倍座標変換を行って行列を変更する場合は、{{domxref("DOMMatrix.scale3dSelf()")}} を参照してください。

## 構文

```js-nolint
scale3d()
scale3d(scale)
scale3d(scale, originX)
scale3d(scale, originX, originY)
scale3d(scale, originX, originY, originZ)
```

### 引数

- `scale`
  - : 乗数、倍率値。倍率が指定されない場合、デフォルトで `1` となります。
- `originX` {{optional_inline}}
  - : 座標変換の原点の X 座標。原点が与えられなかった場合、既定値は `0` です。
- `originY` {{optional_inline}}
  - : 座標変換の原点の Y 座標。原点が与えられなかった場合、既定値は `0` です。
- `originZ` {{optional_inline}}
  - : 座標変換の原点の Z 座標。値が `0` の場合、これは省略時のデフォルト値ですが、結果の行列は三次元になりません。

### 返値

{{domxref("DOMMatrix")}} です。

## 例

```js
const matrix = new DOMMatrix();
console.log(matrix.toString()); // 座標変換は適用されていない
// matrix(1, 0, 0, 1, 0, 0)

console.log(matrix.scale3d(2).toString());
/* matrix3d(
    2, 0, 0, 0, 
    0, 2, 0, 0, 
    0, 0, 2, 0, 
    0, 0, 0, 1) */
console.log(matrix.scale3d(0.5, 25, 25, 1.25).toString());
/* matrix3d(
    0.5, 0, 0, 0, 
    0, 0.5, 0, 0, 
    0, 0, 0.5, 0, 1
    2.5, 12.5, 0.625, 1) */
console.log(matrix.toString()); // 元の配列は変更されない
// matrix(1, 0, 0, 1, 0, 0)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.scale3dSelf()")}}
- {{domxref("DOMMatrixReadOnly.scale()")}}
- CSS の {{cssxref("transform")}} プロパティ、{{cssxref("transform-function/scale3d", "scale3d()")}} 関数、{{cssxref("transform-function/matrix3d", "matrix3d()")}} 関数
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスの {{domxref("CanvasRenderingContext2D.transform()")}} メソッド
