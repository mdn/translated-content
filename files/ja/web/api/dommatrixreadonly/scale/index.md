---
title: "DOMMatrixReadOnly: scale() メソッド"
short-title: scale()
slug: Web/API/DOMMatrixReadOnly/scale
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{APIRef("Geometry Interfaces")}}

**`scale()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、 元の行列に拡大縮小変換を施した新しい行列を作成します。

## 構文

`scale()` メソッドには 1 つから 6 つの値を指定します。

```js
DOMMatrixReadOnly.scale(scaleX);
DOMMatrixReadOnly.scale(scaleX, scaleY);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX, originY);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX, originY, originZ);
```

### 引数

- `scaleX`
  - : X 軸の拡大縮小する値の倍率。
- `scaleY` {{optional_inline}}
  - : Y 軸の拡大縮小する値の倍率。省略した場合は `scaleX` の値が既定値となります。
- `scaleZ` {{optional_inline}}
  - : z 軸の拡大縮小する値の倍率。この値が 1 以外の場合、結果の行列は 3D になります。
- `originX` {{optional_inline}}
  - : 変換の原点の x 座標。原点が与えられなかった場合、既定値は 0 です。
- `originY` {{optional_inline}}
  - : 変換の原点の y 座標。原点が与えられなかった場合、既定値は 0 です。
- `originZ` {{optional_inline}}
  - : 変換の原点の z 座標。原点が与えられなかった場合、既定値は 0 です。この値が 0 以外の場合、結果の行列は 3D になります。

### 返値

行列の x と y を指定された係数で拡大縮小し、指定された原点を中心とした新しい行列を格納した [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) を返します。元の行列は変更されません。

z 軸を中心に拡大縮小すると、 4✕4 の 3D 行列になります。

## 例

この SVG には赤、青、緑の 3 つの正方形があり、それぞれ文書の原点に配置されています。

```html
<svg width="250" height="250" viewBox="0 0 25 25">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
  <rect id="transformedOrigin" width="25" height="25" fill="green" />
</svg>
```

この JavaScript では最初に単位行列を作成し、次に `scale()` メソッドを使用して単一の引数を持つ新しい行列を作成します。

3 つの引数を使用して新しい行列を作成し、その `is2D` プロパティを監視することで、そのブラウザーが 6 つの引数の `scale()` メソッドに対応しているかどうかをテストします。これが `false` ならば、 3 つ目の引数は `scaleZ` 引数としてブラウザーに受け入れられ、これは 3D 行列となります。

次に、ブラウザーの対応に応じて、 3 つまたは 6 つの引数を使用して、指定された原点に対して拡大縮小された新しい行列を作成します。

これらの新しい行列は `transform` として青と緑の正方形に適用され、寸法と位置が変更されます。赤い正方形はそのままの位置に配置されます。

```js
const matrix = new DOMMatrixReadOnly();
const scaledMatrix = matrix.scale(0.5);

let scaledMatrixWithOrigin = matrix.scale(0.5, 25, 25);

// ブラウザーがこれらの引数を scaleX, scaleY, scaleZ と解釈した場合、結果の行列は 3D になります。
const browserExpectsSixParamScale = !scaledMatrixWithOrigin.is2D;
if (browserExpectsSixParamScale) {
  scaledMatrixWithOrigin = matrix.scale(0.5, 0.5, 1, 25, 25, 0);
}

document
  .querySelector("#transformed")
  .setAttribute("transform", scaledMatrix.toString());
document
  .querySelector("#transformedOrigin")
  .setAttribute("transform", scaledMatrixWithOrigin.toString());
```

{{EmbedLiveSample('Examples', '250', '250')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
