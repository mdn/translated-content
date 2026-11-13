---
title: "DOMMatrix: setMatrixValue() メソッド"
short-title: setMatrixValue()
slug: Web/API/DOMMatrix/setMatrixValue
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`setMatrixValue()`** は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、指定された座標変換または一連の座標変換によって記述される行列で、行列の内容を置き換え、自分自身を返します。

## 構文

```js-nolint
setMatrixValue(transformList)
```

### 引数

- `transformList`
  - : 文字列です。この値は CSS の {{cssxref("transform")}} プロパティ値と同じ構文に従います。

### 返値

自分自身を返します。更新された値の [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

この例では、行列を作成し、{{domxref("DOMMatrix.translateSelf()")}} メソッドを使用して三次元変換を適用し、`setMatrixValue()` メソッドを使用して二次元変換に戻し、さらに別の `setMatrixValue()` メソッド呼び出しで再び三次元変換に戻します。

```js
const matrix = new DOMMatrix();

console.log(matrix.toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.is2D); // true

matrix.translateSelf(30, 40, 50);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false

matrix.setMatrixValue("matrix(1, 0, 0, 1, 15, 45)");
console.log(matrix.toString()); // 出力: matrix(1, 0, 0, 1, 15, 45)
console.log(matrix.is2D); // true

matrix.setMatrixValue(
  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)",
);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.translateSelf()")}}
- {{domxref("DOMMatrixReadOnly.is2D")}}
- CSS の {{CSSxRef("transform-function/matrix", "matrix()")}} 関数
- CSS の {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} 関数
