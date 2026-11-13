---
title: "DOMMatrixReadOnly: flipY() メソッド"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`flipY()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、元の行列を Y 軸で反転させた新しい行列を作成します。この操作は行列を `DOMMatrix(1, 0, 0, -1, 0, 0)` で乗算するのと同じです。元の行列は変更されません。

## 構文

```js-nolint
flipY()
```

### 引数

なし。

### 返値

[`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

### 三角形の反転

この例では、SVG には三角形 2 つの同一の[パス](/ja/docs/Web/SVG/Reference/Attribute/d)が含まれています。これらは同じサイズと位置で描画されます。ビューボックスの y 値は負の値を持ち、y 軸の両側のコンテンツを表示させます。これにより、反転した三角形は座標変換後にビューポート内に収まるようになります。

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

この JavaScript は[恒等行列](/ja/docs/Web/API/DOMMatrixReadOnly/isIdentity)を作成し、次に `flipY()` メソッドを使って新しい行列を作成し、それを青い三角形に用いて Y 軸を反転させています。赤い三角形はその場に残ります。

```js
const flipped = document.getElementById("flipped");
const matrix = new DOMMatrix();
const flippedMatrix = matrix.flipY();
flipped.setAttribute("transform", flippedMatrix.toString());
```

#### 結果

{{EmbedLiveSample('Inverting a triangle', '', '240')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.flipX()")}}
