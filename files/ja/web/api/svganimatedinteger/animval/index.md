---
title: "SVGAnimatedInteger: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedInteger/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedInteger")}} インターフェイスの読み取り専用プロパティで、この SVG 要素に関連付けられた [`<integer>`](/ja/docs/Web/SVG/Guides/Content_type#integer) のアニメーション中の値を表します。 アニメーションが適用されていない場合、 `animVal` は `baseVal` と等しくなります。

{{SVGElement("feTurbulence")}} 要素の {{SVGAttr("numOctaves")}} 属性や、 {{SVGElement("feConvolveMatrix")}} 要素の {{SVGAttr("order")}} 属性のように、 `long` 型の整数を値として受け入れる属性もあります。このプロパティで、属性の現在のアニメーション中の状態に数値としてアクセスできます。

## 値

`long` 型です。属性のアニメーション中の値です。

## 例

```js
const feTurbulence = document.querySelector("feTurbulence");

// アニメーション可能な 'numOctaves' 属性を設定
feTurbulence.setAttribute("numOctaves", "4");

// SVGAnimatedInteger オブジェクトにアクセス
const animatedInteger = feTurbulence.numOctaves;

// アニメーション中の値を取得（読み取り専用）
console.log(animatedInteger.animVal); // 出力: 4 （アニメーション中の現在の値）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<integer>`](/ja/docs/Web/SVG/Guides/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
