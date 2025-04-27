---
title: SVGAnimatedTransformList.animVal プロパティ
short-title: animVal
slug: Web/API/SVGAnimatedTransformList/animVal
l10n:
  sourceCommit: 4f59a1b67315a09e31a0521eb5a6f976ece9ab3c
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedTransformList")}} インターフェイスの読み取り専用プロパティで、 SVG 要素の `transform` 属性のアニメーションする値を表します。

このプロパティは、SVG 要素の {{SVGAttr("transform")}} 属性、 {{SVGElement("linearGradient")}} または {{SVGElement("radialGradient")}} 要素の {{SVGAttr("gradientTransform")}} 属性、 {{SVGElement("pattern")}} 要素の {{SVGAttr("patternTransform")}} 属性を、読み取り専用の {{ domxref("SVGTransformList") }} として反映し、アニメーション中の各座標変換関数に対して動的に更新された {{ domxref("SVGTransform") }} にアクセスできるように指定します。アニメーションがアクティブでない場合、このプロパティは `baseVal` と同じ値を返します。

## 値

{{domxref("SVGTransformList")}} オブジェクトで、 `transform` 属性のアニメーション中の値を表します。

## 例

```js
// 長方形の要素を取得
const rect = document.querySelector("rect");

// 座標変換のアニメーションリストにアクセス（もしあれば）
const animTransforms = rect.transform.animVal;

// アニメーションする座標変換をコンソールにログ出力
console.dir(animTransforms);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransformList")}}
- {{domxref("SVGTransform")}}
