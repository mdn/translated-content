---
title: "DOMMatrix: scaleSelf() メソッド"
short-title: scaleSelf()
slug: Web/API/DOMMatrix/scaleSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`scaleSelf()`** は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、指定された変倍率を適用して行列を変更する座標変換メソッドです。この変倍率は、デフォルトの原点 `(0, 0)` を基準に、指定された原点を中心として作用し、変倍された行列を返します。

行列を変更せず変倍するには、{{domxref("DOMMatrixReadOnly.scale()")}} を参照してください。これは元の行列を変更せず、変倍後の新しい行列を生成します。

## 構文

```js-nolint
scaleSelf()
scaleSelf(scaleX)
scaleSelf(scaleX, scaleY)
scaleSelf(scaleX, scaleY, scaleZ)
scaleSelf(scaleX, scaleY, scaleZ, originX)
scaleSelf(scaleX, scaleY, scaleZ, originX, originY)
scaleSelf(scaleX, scaleY, scaleZ, originX, originY, originZ)
```

### 引数

- `scaleX` {{optional_inline}}
  - : X 軸の拡大縮小する値の倍率。指定されていない場合、デフォルト値は `1` となります。
- `scaleY` {{optional_inline}}
  - : Y 軸の拡大縮小する値の倍率。省略した場合は `scaleX` の値が既定値となります。
- `scaleZ` {{optional_inline}}
  - : z 軸の拡大縮小する値の倍率。この値が 1 以外の場合、結果の行列は三次元になります。
- `originX` {{optional_inline}}
  - : 座標変換の原点の x 座標。原点が与えられなかった場合、既定値は 0 です。
- `originY` {{optional_inline}}
  - : 座標変換の原点の y 座標。原点が与えられなかった場合、既定値は 0 です。
- `originZ` {{optional_inline}}
  - : 座標変換の原点の z 座標。原点が与えられなかった場合、既定値は 0 です。この値が 0 以外の場合、結果の行列は三次元になります。

### 返値

自分自身を返します。 {{domxref("DOMMatrix")}} です。

Z 軸を中心に変倍した場合、行列は 4✕4 の三次元行列になります。

## 例

この SVG には、半透明の正方形が 2 つ含まれています。1 つは赤、もう 1 つは青で、それぞれ文書の原点に位置指定されています。

```html
<svg viewBox="0 0 50 50" height="200">
  <rect width="25" height="25" fill="#ff000099" />
  <rect id="transformed" width="25" height="25" fill="#0000ff99" />
</svg>
```

この JavaScript はまず行列を生成し、`scaleSelf()` メソッドを使用して幅を半分にし高さを 2 倍にする行列に変倍します。

その後、この行列が `transform` として青い四角形に適用され、そのサイズと位置が変更されます。赤い四角形は変更されません。

```js
const matrix = new DOMMatrix();
matrix.scaleSelf(0.5, 2);

document
  .querySelector("#transformed")
  .setAttribute("transform", matrix.toString());
```

{{EmbedLiveSample('Examples', '', '220')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.scale()")}}
- {{domxref("DOMMatrix.scale3dSelf()")}}
- CSS の {{cssxref("transform")}} プロパティ、{{cssxref("transform-function/scale", "scale()")}} 関数、{{cssxref("transform-function/matrix", "matrix()")}} 関数
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスの {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} メソッド
