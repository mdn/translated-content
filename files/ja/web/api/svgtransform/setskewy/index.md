---
title: "SVGTransform: setSkewY() メソッド"
short-title: setSkewY()
slug: Web/API/SVGTransform/setSkewY
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

`setSkewY()` は {{domxref("SVGTransform")}} インターフェイスのメソッドで、変換の種類を `SVG_TRANSFORM_SKEWX` に設定し、引数の `angle` で Y 軸方向の歪めの量を定義します。

## 構文

```js-nolint
setSkewY(angle)
```

### 引数

- `angle`
  - : 浮動小数点値で、歪めの量を度単位で定義します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 属性または {{domxref("SVGTransform")}} オブジェクトが読み取り専用であった場合に発生します。

## 例

### SVG 要素を Y 軸に沿って歪める

```js
// SVG 要素を選択し、座標変換オブジェクトを作成
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// 30 度の Y 方向の歪めを適用
transform.setSkewX(30);

// 適用された座標変換の角度をログ出力
console.log(`歪め角度: ${transform.angle}`); // 出力: 30
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform.angle")}}
