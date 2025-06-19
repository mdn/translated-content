---
title: SMIL による SVG アニメーション
slug: Web/SVG/Guides/SVG_animation_with_SMIL
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

SMIL [(Synchronized Multimedia Integration Language)](https://www.w3.org/TR/REC-smil/) は、対話型マルチメディアプレゼンテーションを作成するための XML ベースの言語です。
制作者は、他の XML ベースの言語で SMIL 構文を使用して、アニメーションの要素のタイミングやレイアウトを定義することができます。

SMIL では次のようなことができます。

- 要素の数値属性（[x](/ja/docs/Web/SVG/Reference/Attribute/x)、[y](/ja/docs/Web/SVG/Reference/Attribute/y) など）のアニメーション
- [transform](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性（[translation](/ja/docs/Web/SVG/Reference/Attribute/transform#translate)、[rotate](/ja/docs/Web/SVG/Reference/Attribute/transform#rotate)、など）のアニメーション
- [color](/ja/docs/Web/SVG/Reference/Attribute/color) 属性のアニメーション
- モーション[パス](/ja/docs/Web/SVG/Reference/Element/path)の追跡

次の節では、これらの 4 つの用途で [SVG](/ja/docs/Web/SVG) において SMIL を使用する方法を示します。

## 要素の属性のアニメーション

以下の例は、円 (circle) の [`cx` 属性](/ja/docs/Web/SVG/Reference/Attribute/cx)のアニメーションを行います。そのために、{{ SVGElement("circle") }} 要素の内部に {{ SVGElement("animate") }} 要素を追加します。{{ SVGElement("animate") }} の重要な属性は以下のとおりです。

- `attributeName`
  - : アニメーションを行う属性名
- `from`
  - : 属性の初期状態の値
- `to`
  - : 属性の最後の値
- `dur`
  - : アニメーションを行う時間（例えば、5 秒の場合は '5s' と書く）

同じ要素でより多くの属性のアニメーションを行いたい場合は、{{ SVGElement("animate") }} 要素を追加してください。

```html
<svg width="300" height="100">
  <title>SMIL による属性のアニメーション</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animate
      attributeName="cx"
      from="0"
      to="500"
      dur="5s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Animating_attributes_of_an_element', '100%', 120) }}

## transform 属性のアニメーション

{{ SVGElement("animateTransform") }} 要素により、 [transform](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性のアニメーションができます。数値をとる [x](/ja/docs/Web/SVG/Reference/Attribute/x) のような、単純な属性のアニメーションを行うのではないため、この新しい要素が必要です。 rotation 属性は `rotation(theta, x, y)` のようになります。ここで `theta` は角度、`x` および `y` は絶対位置を示します。以下の例では、回転の中心位置と角度のアニメーションを行います。

```html
<svg width="300" height="100">
  <title>transform による SVG SMIL アニメーション</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="50"
    width="15"
    height="34"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateTransform
      attributeName="transform"
      begin="0s"
      dur="20s"
      type="rotate"
      from="0 60 60"
      to="360 100 60"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{ EmbedLiveSample('Animating_the_transform_attributes', '100%', 120) }}

## パスを追跡するアニメーション

The {{ SVGElement("animateMotion") }} 要素は、パスに従った SVG 要素の位置や回転のアニメーションを可能にします。パスは {{ SVGElement("path") }} と同じ方法で定義されます。オブジェクトがパスの接線に沿って回転するかを定義する属性を設定することができます。

### 例 1: 直線的な移動

この例では、青い円 (circle) が黒い四角形の左端と右端をバウンドするように、無限に行き来します。このアニメーションは {{ SVGElement("animateMotion") }} 要素で制御されます。ここでは、アニメーションの始点を定義する **MoveTo** コマンド、円を 300 ピクセル右へ移動する **Horizontal-line** コマンド、そしてパスを閉じて始点へ戻ることを定義する **Z コマンド**で構成されるパスを指定しています。**repeatCount** 属性の値を `indefinite` にすることで、SVG 画像が存在する間は永久にアニメーションを繰り返すよう指定します。

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Example_1_Linear_motion', '100%', 120) }}

[View live sample](https://mdn.dev/archives/media/samples/svg/svganimdemo1.html)

### 例 2: 曲線状の移動

前と同様の例を、曲線状のパスを用い、またパスの方向に従い回転するようにしたものです。

```html
<svg width="300" height="100">
  <title>パスによる SVG SMIL アニメーション</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="0"
    width="20"
    height="20"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateMotion
      path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
      dur="3s"
      repeatCount="indefinite"
      rotate="auto" />
  </rect>
</svg>
```

{{ EmbedLiveSample('Example_2_Curved_motion', '100%', 120) }}

## 関連情報

- [SVG](/ja/docs/Web/SVG)
- [SVG アニメーション仕様書](https://www.w3.org/TR/SVG/animate.html)（英語）
- [SMIL 仕様書](https://www.w3.org/TR/REC-smil)（英語）
