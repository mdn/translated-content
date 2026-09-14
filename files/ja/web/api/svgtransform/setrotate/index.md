---
title: "SVGTransform: setRotate() メソッド"
short-title: setRotate()
slug: Web/API/SVGTransform/setRotate
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

`setRotate()` は {{domxref("SVGTransform")}} インターフェイスのメソッドで、座標変換の種類を `SVG_TRANSFORM_ROTATE` に設定します。引数 `angle` は回転角度を定義し、引数 `cx` と `cy` は回転のオプションの中心を定義します。

## 構文

```js-nolint
setRotate(angle, cx, cy)
```

### 引数

- `angle`
  - : 浮動小数点数で、回転角の角度を定義します。
- `cx` {{optional_inline}}
  - : 浮動小数点数で、回転の中心の X 座標を定義します。既定値は `0` です。
- `cy` {{optional_inline}}
  - : 浮動小数点数で、回転の中心の Y 座標を定義します。既定値は `0` です。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 属性または {{domxref("SVGTransform")}} オブジェクトが読み取り専用であった場合に発生します。

## 例

### SVG 要素の回転

```js
// SVG 要素を選択し、座標変換オブジェクトを作成
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// 45 度の回転を設定
transform.setRotate(45, 0, 0);

// 回転角を出力
console.log(`回転角: ${transform.angle}`); // 出力: 45
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform.angle")}}
