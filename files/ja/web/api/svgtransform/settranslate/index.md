---
title: "SVGTransform: setTranslate() メソッド"
short-title: setTranslate()
slug: Web/API/SVGTransform/setTranslate
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

`setTranslate()` は {{domxref("SVGTransform")}} インターフェイスのメソッドで、 メソッドは座標変換の種類を `SVG_TRANSFORM_TRANSLATE` に設定し、引数 `tx` と `ty` で移動量を定義します。

## 構文

```js-nolint
setTranslate(tx, ty)
```

### 引数

- `tx`
  - : 浮動小数点数で、 X 軸方向の移動量を定義します。
- `ty`
  - : 浮動小数点数で、 Y 軸方向の移動量を定義します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 属性または {{domxref("SVGTransform")}} オブジェクトが読み取り専用であった場合に発生します。

## 例

### 移動量の値を設定

```js
// SVG 要素を選択し、座標変換オブジェクトを作成
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// 座標変換の移動値を設定
transform.setTranslate(100, 50);

// 移動の詳細を出力
console.log(`X の移動量: ${transform.matrix.e}`); // 出力: 100
console.log(`Y の移動量: ${transform.matrix.f}`); // 出力: 50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
