---
title: SVG animation with SMIL
slug: Web/SVG/SVG_animation_with_SMIL
---

Firefox 4 より、[Synchronized Multimedia Integration Language](http://www.w3.org/TR/REC-smil) (SMIL) を用いた [SVG](/ja/SVG) のアニメーションをサポートしています。SMIL では以下のようなことができます:

- 要素の数値属性 (x, y など) のアニメーション
- トランスフォーム属性 (translation または rotation) のアニメーション
- 色属性のアニメーション
- モーションパスに従う

これらは {{ SVGElement("animate") }} のような SVG 要素を、アニメーションさせる SVG 要素の中に追加することで実現します。以下は、4 つのアニメーション方法を例として示します。

## 要素の属性のアニメーション

以下の例は、円 (circle) の **cx** 属性のアニメーションを行います。そのために、{{ SVGElement("circle") }} 要素の内部に {{ SVGElement("animate") }} 要素を追加します。{{ SVGElement("animate") }} の重要な属性は以下のとおりです:

- **attributeName**
  - : アニメーションを行う属性名
- from
  - : 属性の初期状態の値
- to
  - : 属性の最後の値
- dur
  - : アニメーションを行う時間 (例えば、5 秒の場合は '5s' と書く)

同じ要素でより多くの属性のアニメーションを行いたい場合は、{{ SVGElement("animate") }} 要素を追加してください。

```html
<!doctype html>
<html>
  <head>
    <title>Attribute Animation with SMIL</title>
  </head>
  <body>
    <svg width="300px" height="100px">
      <rect
        x="0"
        y="0"
        width="300"
        height="100"
        stroke="black"
        stroke-width="1" />
      <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
        <animate
          attributeName="cx"
          from="0"
          to="100"
          dur="5s"
          repeatCount="indefinite" />
      </circle>
    </svg>
  </body>
</html>
```

## トランスフォーム属性のアニメーション

{{ SVGElement("animateTransform") }} 要素は、**トランスフォーム** 属性のアニメーションを可能にします。数値をとる **x** のような、単純な属性のアニメーションを行うのではないため、この新しい要素が必要です。Rotation 属性はこのようなものです: `rotation(theta, x, y)`。ここで `theta` は角度、`x` および `y` は絶対位置を示します。以下の例では、回転の中心位置と角度のアニメーションを行います。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SVG SMIL Animate with transform</title>
  </head>
  <body>
     <svg width="300px" height="100px">
       <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
       <rect x="0" y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1" transform="rotation">

   <animateTransform
            attributeName="transform"
            begin="0s"
            dur="20s"
            type="rotate"
            <!-- 0 度から 360 度までの回転と、x 方向に 60 から 100 への移動を行う -->
            from="0 60 60"
            to="360 100 60"
            <!-- 図形が存在しなくなるまでアニメーションを続ける -->
            repeatCount="indefinite"
   />
       </rect>
     </svg>
  </body>
</html>
```

## パスに従うアニメーション

The {{ SVGElement("animateMotion") }} 要素は、パスに従った SVG 要素の位置や回転のアニメーションを可能にします。パスは {{ SVGElement("path") }} と同じ方法で定義されます。オブジェクトがパスの接線に沿って回転するかを定義する属性を設定することができます。

### 例 1: 直線的な移動

この例では、青い円 (circle) が黒い四角形の左端と右端をバウンドするように、無限に行き来します。このアニメーションは {{ SVGElement("animateMotion") }} 要素で制御されます。ここでは、アニメーションの始点を定義する **M**oveTo コマンド、円を 300 ピクセル右へ移動する **H**orizontal-line コマンド、そしてパスを閉じて始点へ戻ることを定義する **Z** コマンドで構成されるパスを指定しています。**repeatCount** 属性の値を `indefinite` にすることで、SVG 画像が存在する間は永久にアニメーションを繰り返すよう指定します。

```html
<!doctype html>
<html>
  <head>
    <title>SVG SMIL Animate with Path</title>
  </head>
  <body>
    <svg width="300px" height="100px">
      <rect
        x="0"
        y="0"
        width="300"
        height="100"
        stroke="black"
        stroke-width="1" />
      <rect
        x="0"
        y="50"
        width="15"
        height="34"
        fill="blue"
        stroke="black"
        stroke-width="1"
        transform="rotation">
        <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
          <rect
            x="0"
            y="0"
            width="300"
            height="100"
            stroke="black"
            stroke-width="1" />
          <circle
            cx="0"
            cy="50"
            r="15"
            fill="blue"
            stroke="black"
            stroke-width="1">
            <animateMotion
              path="M 0 0 H 300 Z"
              dur="3s"
              repeatCount="indefinite" />
          </circle>
        </svg>
      </rect>
    </svg>
  </body>
</html>
```

[View live sample](/samples/svg/svganimdemo1.html)

### 例 2: 曲線状の移動

前と同様の例を、曲線状のパスを用い、またパスの方向に従い回転するようにしたものです。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SVG SMIL Animate with Path</title>
  </head>
  <body>
     <svg width="300px" height="100px">
        <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
        <rect x="0" y="0" width="20" height="50" fill="blue" stroke="black" stroke-width="1">
            <animateMotion path="M 50,100 Q40,75 90,70Q95,60 95,50Q180,40 170,100Z"
        dur="3s" repeatCount="indefinite" rotate="auto">
        </rect>
    </svg>
  </body>
</html>
```

## 参考情報

- [SVG](/ja/SVG)
- [SVG Animation Specification](http://www.w3.org/TR/SVG/animate.html)
- [SMIL Specification](http://www.w3.org/TR/REC-smil)
