---
title: "DOMMatrix: rotateFromVectorSelf() メソッド"
short-title: rotateFromVectorSelf()
slug: Web/API/DOMMatrix/rotateFromVectorSelf
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`rotateFromVectorSelf()` は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、指定されたベクトルと `(1, 0)` との間の角度で行列を回転させることで行列を変更する、変更を行う座標変換メソッドです。回転角度は、ベクトル `(1,0)T` と `(x,y)T` の間の時計回り方向の角度、すなわち `(+/-)arctan(y/x)` で決定されます。`x` と `y` が両方とも `0` の場合、角度は `0` として指定され、行列は変更されません。

ベクトルから行列を回転させる際に元の行列を書き換えずに処理するには、{{domxref("DOMMatrixReadOnly.rotateFromVector()")}} を参照してください。このメソッドは元の行列を変更せずに、新しい回転後の行列を生成します。

## 構文

```js-nolint
rotateFromVectorSelf()
rotateFromVectorSelf(rotX)
rotateFromVectorSelf(rotX, rotY)
```

### 引数

- `rotX` {{optional_inline}}
  - : 数値です。回転角を決定する x,y ベクトルの X 座標です。未定義の場合、`0` が使用されます。
- `rotY` {{optional_inline}}
  - : 数値です。回転角を決定する x,y ベクトルの Y 座標です。未定義の場合、`0` が使用されます。

### 返値

自分自身を返します。更新された [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.rotateFromVectorSelf().toString());
// 出力: matrix(1, 0, 0, 1, 0, 0) （回転は適用されない）
console.log(matrix.rotateFromVectorSelf(10, 20).toString());
// 出力: matrix(0.447, 0.894, -0.894, 0.447, 0, 0)
console.log(matrix.toString());
// 出力: matrix(0.447, 0.894, -0.894, 0.447, 0, 0) （上記と同じ）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
- {{domxref("DOMMatrix.rotateSelf()")}}
- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
- CSS の {{cssxref("transform")}} プロパティと {{cssxref("transform-function/rotate3d", "rotate3d()")}} 関数
- CSS {{cssxref("rotate")}} property
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスと {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} メソッド
