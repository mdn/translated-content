---
title: SVGAnimatedTransformList.baseVal プロパティ
short-title: baseVal
slug: Web/API/SVGAnimatedTransformList/baseVal
l10n:
  sourceCommit: 4f59a1b67315a09e31a0521eb5a6f976ece9ab3c
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedTransformList")}} インターフェイスの読み取り専用プロパティで、 SVG 要素の `transform` 属性のアニメーション前の値を表します。

このプロパティは、SVG 要素の {{SVGAttr("transform")}} 属性、 {{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} 要素の {{SVGAttr("gradientTransform")}} 属性、 {{SVGElement("pattern")}} 要素の {{SVGAttr("patternTransform")}} 属性の値を、読み取り専用の {{ domxref("SVGTransformList") }} として反映し、 SVG 要素に設定されたアニメーション中の各座標変換関数に対して静的な {{ domxref("SVGTransform") }} にアクセスできるように指定します。

## 値

{{domxref("SVGTransformList")}} オブジェクトで、 `transform` 属性の現在のアニメーション前の値を表します。

## 例

```js
// 長方形の要素を取得
const rect = document.querySelector("rect");

// 要素のアニメーション前の座標変換リストにアクセス
const baseTransforms = rect.transform.baseVal;

// 座標変換の基底値をコンソールにログ出力
console.dir(baseTransforms);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransformList")}}
- {{domxref("SVGTransform")}}
