---
title: "SVGTransform: setScale() メソッド"
short-title: setScale()
slug: Web/API/SVGTransform/setScale
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

`setScale()` は {{domxref("SVGTransform")}} インターフェイスのメソッドで、座標変換の種類を `SVG_TRANSFORM_SCALE` にし、拡大率を定義する `sx` および `sy` と定義します。

## 構文

```js-nolint
setScale(sx, sy)
```

### 引数

- `sx`
  - : 浮動小数点値で、 X 軸方向の拡大率を定義します。
- `sy`
  - : 浮動小数点値で、 Y 軸方向の拡大率を定義します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 属性または {{domxref("SVGTransform")}} オブジェクトが読み取り専用であった場合に発生します。

## 例

### SVG 要素の変倍

```js
// SVG 要素を選択し、座標変換オブジェクトを作成
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// 座標変換の拡大率を設定
transform.setScale(2, 3);

// 拡大率の詳細を出力
console.log(`Scale X: ${transform.matrix.a}`); // 出力: 2
console.log(`Scale Y: ${transform.matrix.d}`); // 出力: 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
