---
title: "DOMMatrix: multiplySelf() メソッド"
short-title: multiplySelf()
slug: Web/API/DOMMatrix/multiplySelf
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`multiplySelf()`** は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、行列を `otherMatrix` 引数で乗算し、元の行列と指定された行列のドット積 (`A⋅B`) を計算します。乗数として行列が指定されなかった場合、行列は右下隅と、その直上かつ左隣の要素（`m33` と `m34`）を除き、すべての要素が `0` である行列と乗算されます。これらの要素はデフォルト値 `1` を持ちます。

変化させずに行列を乗算する場合は、{{domxref("DOMMatrixReadOnly.multiply()")}} を参照してください。

## 構文

```js-nolint
multiplySelf()
multiplySelf(otherMatrix)
```

### 引数

- `otherMatrix` {{optional_inline}}
  - : 乗算する [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

### 返値

自分自身を返します。適用された乗算の結果に更新された [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix().rotate(30);

console.log(matrix.toString());
// 出力: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)

matrix.multiplySelf(matrix);

console.log(matrix.toString());
// 出力: matrix(0.5, 0.866, -0.866, 0.5, 0, 0) （60 度の回転）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.multiply()")}}
- {{domxref("DOMMatrix.preMultiplySelf()")}}
- CSS の {{CSSxRef("transform-function/matrix", "matrix()")}} 関数
- CSS の {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} 関数
