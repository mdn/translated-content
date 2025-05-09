---
title: "SVGAnimatedInteger: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedInteger/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedInteger")}} インターフェイスの読み取り専用プロパティで、 SVG 要素に関連付けられた [`<integer>`](/ja/docs/Web/SVG/Guides/Content_type#integer) の（アニメーションしていない）基底値を表します。

{{SVGElement("feTurbulence")}} 要素の {{SVGAttr("numOctaves")}} 属性や、 {{SVGElement("feConvolveMatrix")}} 要素の {{SVGAttr("order")}} 属性のように、 `long` 型の整数を値として受け入れる属性もあります。このプロパティで、属性の静的なアニメーション中ではない状態に数値としてアクセスできます。

## 値

`long` 型です。属性を反映したアニメーション中ではない値です。

## 例

```js
const feTurbulence = document.querySelector("feTurbulence");

// アニメーション可能な 'numOctaves' 属性を設定
feTurbulence.setAttribute("numOctaves", "4");

// SVGAnimatedInteger オブジェクトにアクセス
const animatedInteger = feTurbulence.numOctaves;

// 基底値を取得
console.log(animatedInteger.baseVal); // 出力: 4

// 基底値を変更
animatedInteger.baseVal = 6;

// 反映された属性の値を検証
console.log(feTurbulence.getAttribute("numOctaves")); // 出力: "6"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<integer>`](/ja/docs/Web/SVG/Guides/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
