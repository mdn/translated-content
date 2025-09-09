---
title: "SVGTransform: setMatrix() メソッド"
short-title: setMatrix()
slug: Web/API/SVGTransform/setMatrix
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

`setMatrix()` は {{domxref("SVGTransform")}} インターフェイスのメソッドで、座標変換の種類を `SVG_TRANSFORM_MATRIX` に設定し、引数 `matrix` で新しい座標変換を定義します。

なお、引数 `matrix` の値がコピーされることに注意してください。つまり、このメソッドを呼び出した後に `matrix` オブジェクトに変更を加えても、変換には影響しません。

## 構文

```js-nolint
setMatrix(matrix)
```

### 引数

- `matrix`
  - : 生きた {{domxref("DOMMatrix")}} オブジェクトで、適用する新しい座標変換行列を定義します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 属性または {{domxref("SVGTransform")}} オブジェクトが読み取り専用であった場合に発生します。

## 例

### 座標変換行列を設定

```js
// SVG 要素を取得し、座標変換オブジェクトを作成
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// DOMMatrix を指定された値で作成
const matrix = new DOMMatrix();
matrix.a = 1; // Scale X
matrix.d = 1; // Scale Y
matrix.e = 50; // Translate X
matrix.f = 50; // Translate Y

// 座標変換を新しい行列に設定
transform.setMatrix(matrix);

console.dir(transform.matrix); // 出力: SVGMatrix { a: 1, b: 0, c: 0, d: 1, e: 50, f: 50 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix")}}
