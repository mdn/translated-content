---
title: x1
slug: Web/SVG/Attribute/x1
---

{{SVGRef}}

**`x1`** 属性は、二つ以上の座標を必要とする SVG 要素を描画するための一つ目の x 座標を指定するのに使います。一つしか座標を必要としない要素は、これの代わりに {{SVGAttr("x")}} 属性を使います。

二つの要素がこの属性を使っています。つまり、{{ SVGElement("line") }} と {{ SVGElement("linearGradient") }} です。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="5" y1="1" y2="9" stroke="red" />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="9" x2="5" y1="1" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## line

{{SVGElement('line')}} に関しては、`x1` は、その直線の開始点の x 座標を定めます。

| 値                 | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Percentage)** |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| デフォルト値       | `0`                                                                                                                    |
| アニメーション可能 | Yes                                                                                                                    |

### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="5" y1="1" y2="9" stroke="red" />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="9" x2="5" y1="1" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

## linearGradient

{{SVGElement('linearGradient')}} に関しては、`x1` は、グラデーションのストップ値をマッピングするのに使われる*グラデーション・ベクトル* (_gradient vector)_ の開始点の x 座標を定めます。この属性の正確な振る舞いは、{{SVGAttr('gradientUnits')}} 属性の影響を受けます。

| 値                 | **[\<length>](/ja/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/ja/docs/Web/SVG/Content_type#Percentage)** |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| デフォルト値       | `0%`                                                                                                                   |
| アニメーション可能 | Yes                                                                                                                    |

### 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  デフォルトでは、グラデーション・ベクトルは、適用先の形状を囲う境界の
  左端から始まります。
  -->
  <linearGradient x1="0%" id="g0">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="1" y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  ここでは、グラデーション・ベクトルは、適用先の形状を囲う境界の
  左端から 80% のところから始まります。
  -->
  <linearGradient x1="80%" id="g1">
    <stop offset="0" stop-color="black" />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

## 仕様

{{Specifications}}
