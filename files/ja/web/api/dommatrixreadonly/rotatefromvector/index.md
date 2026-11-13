---
title: "DOMMatrixReadOnly: rotateFromVector() メソッド"
short-title: rotateFromVector()
slug: Web/API/DOMMatrixReadOnly/rotateFromVector
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`rotateFromVector()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスの読み取り専用プロパティで、指定されたベクトルと `(1, 0)` の間の角度でソース行列を回転させて作成された新しい {{domxref("DOMMatrix")}} を返します。回転角度は、ベクトル `(1,0)T` と `(x,y)T` の間の時計回り方向の角度、すなわち `(+/-)arctan(y/x)` で決定されます。`x` と `y` が両方とも `0` の場合、角度は `0` と指定します。元の行列は変更されません。

指定されたベクトルと `(1, 0)` の間の角度で回転させながら行列を変化させるには、{{domxref("DOMMatrix.rotateFromVectorSelf()")}} を参照してください。

## 構文

```js-nolint
rotateFromVector()
rotateFromVector(rotX)
rotateFromVector(rotX, rotY)
```

### 引数

- `rotX` {{optional_inline}}
  - : 数値です。回転角を決定する x,y ベクトルの X 座標です。未定義の場合、`0` が使用されます。
- `rotY` {{optional_inline}}
  - : 数値です。回転角を決定する x,y ベクトルの Y 座標です。未定義の場合、`0` が使用されます。

### 返値

[`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString()); // 元の値
// 出力: "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.rotateFromVector().toString()); // デフォルトで `0`
// 出力: matrix(1, 0, 0, 1, 0, 0)

console.log(matrix.rotateFromVector(10, 20).toString());
// matrix(0.447, 0.894, -0.894, 0.447, 0, 0)

console.log(matrix.rotateFromVector(-5, 5).toString());
// matrix(-0.707, 0.707, -0.707, -0.707, 0, 0)

console.log(matrix.toString()); // 行列は変更されない
// 出力: "matrix(1, 0, 0, 1, 0, 0)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
- {{domxref("DOMMatrixReadOnly.rotate()")}}
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
- CSS の {{cssxref("transform")}} プロパティと {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数
- CSS {{cssxref("rotate")}} property
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスと {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} メソッド
