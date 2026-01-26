---
title: "DOMMatrix: DOMMatrix() コンストラクター"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Geometry Interfaces")}}

**`DOMMatrix`** コンストラクターは、 4x4 の行列を表す新しい {{domxref("DOMMatrix")}} オブジェクトを作成します。

## 構文

```js-nolint
new DOMMatrix()
new DOMMatrix(init)
```

### 引数

- `init` {{optional_inline}}
  - : 作成したい行列を指定する数値の配列、あるいは CSS transform の文字列です。

    数値の配列が渡された場合の動作は、配列の長さによって変わります。
    - `[a, b, c, d, e, f]` という形で 6 要素の配列を指定すると、指定された成分で初期化された 2D 行列が作成されます。
    - `[m11, m12, m13, …, m42, m43, m44]` という形で 16 要素の配列（列優先順）が指定された場合，指定された成分で初期化された 3D 行列が作成されます．

## 例

この例では、 {{domxref("Point.matrixTransform()")}} を呼び出す際の引数として使用する DOMMatrix を作成しています。

```js
const point = new DOMPoint(5, 4);
const scaleX = 2;
const scaleY = 3;
const translateX = 12;
const translateY = 8;
const angle = Math.PI / 2;
const matrix = new DOMMatrix([
  Math.cos(angle) * scaleX,
  Math.sin(angle) * scaleX,
  -Math.sin(angle) * scaleY,
  Math.cos(angle) * scaleY,
  translateX,
  translateY,
]);
const transformedPoint = point.matrixTransform(matrix);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
