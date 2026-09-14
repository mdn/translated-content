---
title: "DOMMatrix: preMultiplySelf() メソッド"
short-title: preMultiplySelf()
slug: Web/API/DOMMatrix/preMultiplySelf
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`preMultiplySelf()`** は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、指定された `DOMMatrix` と行列を左から乗算することで行列を変更します。これは内積 `B⋅A` に相当し、ここで行列 `A` はソース行列、`B` はメソッドへの入力として指定された行列です。乗数として行列が指定されなかった場合、行列は右下隅と、その直上かつ左隣の要素（`m33` と `m34`）を除き、すべての要素が `0` である行列と乗算されます。これらの要素はデフォルト値 `1` を持ちます。

## 構文

```js-nolint
preMultiplySelf()
preMultiplySelf(otherMatrix)
```

### 引数

- `otherMatrix` {{optional_inline}}
  - : 乗算する [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

### 返値

自分自身を返します。適用された乗算の結果に更新された [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix().translate(3, 22);
const otherMatrix = new DOMMatrix().translateSelf(15, 45);

console.log(matrix.toString()); // 出力: matrix(1, 0, 0, 1, 3, 22)
console.log(otherMatrix.toString()); // 出力: matrix(1, 0, 0, 1, 15, 45)

matrix.preMultiplySelf(otherMatrix);

console.log(matrix.toString()); // 出力: matrix(1, 0, 0, 1, 18, 67)
console.log(otherMatrix.toString()); // 出力: matrix(1, 0, 0, 1, 15, 45)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.multiplySelf()")}}
- {{domxref("DOMMatrixReadOnly.multiply()")}}
- CSS の {{CSSxRef("transform-function/matrix", "matrix()")}} 関数
- CSS の {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} 関数
