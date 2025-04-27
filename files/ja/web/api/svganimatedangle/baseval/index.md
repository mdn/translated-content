---
title: "SVGAnimatedAngle: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedAngle/baseVal
l10n:
  sourceCommit: 6db682e5b5717b90a47135134434191c265970d8
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedAngle")}} インターフェイスの読み取り専用プロパティで、 SVG 要素に関連付けられた [`<angle>`](/ja/docs/Web/SVG/Guides/Content_type#angle) の（アニメーションしていない）基底値を表します。このプロパティは、実行中のアニメーションに影響されない `<angle>` の静的な値を取得するために使用します。

このプロパティは、SVG の {{SVGElement("marker")}} 要素の {{SVGattr("orient")}} 属性における `<angle>` 値を反映します。これは、 {{domxref("SVGMarkerElement.orientAngle")}} プロパティと同じです。

## 値

{{domxref("SVGAngle")}} オブジェクトで、 [`<angle>`](/ja/docs/Web/SVG/Guides/Content_type#angle) コンテンツ型の基底値を表します。

- この値はアニメーションの影響を受けず、角度の初期状態を表します。
- 角度の単位は {{domxref("SVGAngle.unitType")}} から受け取ることができます。

## 例

```js
const marker = document.querySelector("[orient]");

// orient 属性に角度を設定
marker.setAttribute("orient", "90");
const baseAngle = marker.orientAngle.baseVal; // SVGAngle オブジェクト

console.log(baseAngle.value); // 出力: 90
console.log(baseAngle.unitType); // 出力: 1 （SVG_ANGLETYPE_UNSPECIFIED の定数）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle.animVal")}}
- {{domxref("SVGAngle")}} と[角度の `value` の定数](/ja/docs/Web/API/SVGAngle#定数)
