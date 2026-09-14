---
title: "DOMMatrix: invertSelf() メソッド"
short-title: invertSelf()
slug: Web/API/DOMMatrix/invertSelf
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`invertSelf()`** は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、元の行列を逆行列にします。行列が逆行列化できない場合、新しい行列の要素はすべて `NaN` に設定され、その {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} プロパティは `false` に設定されます。

変更せずに逆行列を作成する場合は、{{domxref("DOMMatrixReadOnly.inverse()")}} を参照してください。

## 構文

```js-nolint
invertSelf()
```

### 引数

なし。

### 返値

{{domxref("DOMMatrix")}} です。

## 例

この例では、30 度の回転を持つ行列を作成します。その後、これを逆行列に変換すると、-30 度の回転が得られます。

```js
const matrix = new DOMMatrix().rotate(30);
console.log(matrix.toString());
// 出力: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)
matrix.invertSelf();
console.log(matrix.toString());
// 出力: matrix(0.866, -0.5, 0.5, 0.866, 0, 0)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.inverse()")}}
- CSS の {{CSSxRef("transform-function/matrix", "matrix()")}} 関数
- CSS の {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} 関数
