---
title: "SVGAnimatedAngle: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedAngle/animVal
l10n:
  sourceCommit: 6db682e5b5717b90a47135134434191c265970d8
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedAngle")}} インターフェイスの読み取り専用プロパティで、この SVG 要素に関連付けられた [`<angle>`](/ja/docs/Web/SVG/Guides/Content_type#angle) の現在のアニメーション値を表します。 関連付けられた属性が現在アニメーションしていない場合、 `animVal` は `baseVal` と同じ値になります。

このプロパティは、 SVG の {{SVGElement("marker")}} 要素のアニメーションする {{SVGattr("orient")}} 属性の角度の状態を反映し、アニメーション中の角度の値にアクセスできるようにします。

## 値

{{domxref("SVGAngle")}} オブジェクトで、 [`<angle>`](/ja/docs/Web/SVG/Guides/Content_type#angle) コンテンツ型のアニメーション中の値を表します。

- この角度がアニメーション中であれば、 `animVal` は現在のアニメーション状態を反映します。
- この角度がアニメーション中でなければ、 `animVal` は {{domxref("SVGAnimatedAngle.baseVal")}} と等しくなります。

## 例

```js
const marker = document.querySelector("[orient]");

// orient 属性の初期角度を設定
marker.setAttribute("orient", "45");

// Access the animated value of the angle
const animAngle = marker.orientAngle.animVal; // SVGAngle オブジェクト

console.log(animAngle.value); // 出力: 45 （アニメーション中の現在の角度の値）
console.log(animAngle.unitType); // 出力: 2 （SVG_ANGLETYPE_DEG の定数）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle.baseVal")}}
- {{domxref("SVGAngle")}} および[角度の `value` の定数](/ja/docs/Web/API/SVGAngle#定数)
