---
title: spreadMethod
slug: Web/SVG/Reference/Attribute/spreadMethod
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`spreadMethod`** 属性は、グラデーションの定義された境界の外側で、図形がどのように塗りつぶされるかを決定します。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## 使用コンテキスト

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>pad</code> | <code>reflect</code> | <code>repeat</code></td>
    </tr>
    <tr>
      <th scope="row">初期値</th>
      <td><code>pad</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `pad`
  - : この値は、グラデーションの最終色が、グラデーションの境界を越えて図形全体を塗りつぶすことを示します。
- `reflect`
  - : この値は、グラデーションが境界を越えて逆方向にも繰り返されることを示しています。
- `repeat`
  - : この値は、グラデーションが境界を越えて元通りの順序で繰り返されることを指定します。

### グラデーションの境界の定義

デフォルトでは、グラデーションは塗りつぶされる図形の境界まで達します。この属性の効果を確認するには、グラデーションのサイズを図形よりも小さく設定する必要があります。

線形グラデーションの場合、境界は `x1`、`x2`、`y1`、`y2` の各属性によって矩形として定義されます。放射グラデーションの場合、境界は `cx`、`cy`、`r`（外側）および `fx`、`fy`、`fr`（内側）の各属性によって、外側の円と内側の円として定義されます。

## spreadMethod と線形グラデーションの例

### SVG

```html
<svg width="220" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="PadGradient" x1="33%" x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
    <linearGradient
      id="ReflectGradient"
      spreadMethod="reflect"
      x1="33%"
      x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
    <linearGradient id="RepeatGradient" spreadMethod="repeat" x1="33%" x2="67%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </linearGradient>
  </defs>

  <rect fill="url(#PadGradient)" x="10" y="0" width="200" height="40" />
  <rect fill="url(#ReflectGradient)" x="10" y="50" width="200" height="40" />
  <rect fill="url(#RepeatGradient)" x="10" y="100" width="200" height="40" />
</svg>
```

### 結果

{{EmbedLiveSample('Examples_of_spreadMethod_with_linear_gradients')}}

それぞれのグラデーションの中央の 3 分の 1 の部分は同じであることに注目してください。外側の 3 分の 1 の部分には、3 つの展開方法の違いが示されています。

## spreadMethod と放射グラデーションの例

### SVG

```html
<svg width="340" height="120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="RadialPadGradient"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
    <radialGradient
      id="RadialReflectGradient"
      spreadMethod="reflect"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
    <radialGradient
      id="RadialRepeatGradient"
      spreadMethod="repeat"
      cx="75%"
      cy="25%"
      r="33%"
      fx="64%"
      fy="18%"
      fr="17%">
      <stop offset="0%" stop-color="fuchsia" />
      <stop offset="100%" stop-color="orange" />
    </radialGradient>
  </defs>

  <rect fill="url(#RadialPadGradient)" x="10" y="10" width="100" height="100" />
  <rect
    fill="url(#RadialReflectGradient)"
    x="120"
    y="10"
    width="100"
    height="100" />
  <rect
    fill="url(#RadialRepeatGradient)"
    x="230"
    y="10"
    width="100"
    height="100" />
</svg>
```

### 結果

{{EmbedLiveSample('Examples_of_spreadMethod_with_radial_gradients')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
