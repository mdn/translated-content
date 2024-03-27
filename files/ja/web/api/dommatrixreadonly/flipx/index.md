---
title: "DOMMatrixReadOnly: flipX() メソッド"
short-title: flipX()
slug: Web/API/DOMMatrixReadOnly/flipX
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

`flipX()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、元の行列を X 軸で反転させた新しい行列を作成します。

## 構文

```js-nolint
  DOMMatrixReadOnly.flipX()
```

### 返値

元の行列を X 軸で反転した結果である新しい行列を含む [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) を返します。これは、行列に `DOMMatrix(-1, 0, 0, 1, 0, 0)` を乗算することと等価です。元の行列は変更されません。

## 例

### 三角形の反転

この例では、 SVG に三角形の図形を持つ2つのパスが格納されており、どちらも同じ位置に描画されています。なお、 viewBox 属性の x 座標が負であり、 x 軸の両辺からのコンテンツを表示されます。

JavaScript は最初に単位行列を作成し、次に `flipX()` メソッドを使って新しい行列を作成し、それを青い三角形に用いて X 軸を反転させています。赤い三角形はその場に残ります。

#### HTML

```html
<svg width="100" height="100" viewBox="-50 0 100 100">
  <path fill="red" d="M 0 50 L 50 0 L 50 100 Z" />
  <path id="flipped" fill="blue" d="M 0 50 L 50 0 L 50 100 Z" />
</svg>
```

#### JavaScript

```js
const flipped = document.getElementById("flipped");
const matrix = new DOMMatrixReadOnly();
const flippedMatrix = matrix.flipX();
flipped.setAttribute("transform", flippedMatrix.toString());
```

#### 結果

{{EmbedLiveSample('Inverting a triangle')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
