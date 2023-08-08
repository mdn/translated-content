---
title: fill
slug: Web/SVG/Attribute/fill
---

{{SVGRef}}

**`fill`** 属性には使われ方により 2 つの意味があります. 1 つは図形やテキストに使われた場合で，その要素を塗りつぶす色を意味します．もう 1 つはアニメーションに使われた場合で，そのアニメーションの最終状態を定義します．

呈示属性(presentation attribute)として全ての要素に適用可能ですが，実際に影響があるのは次の 11 の要素です: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}.

アニメーションとしては次の 5 つの要素で使われています: {{SVGElement('animate')}}, {{SVGElement('animateColor')}}, {{SVGElement('animateMotion')}}, {{SVGElement('animateTransform')}}, and {{SVGElement('set')}}.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple color fill -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Fill circle with a gradient -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  Keeping the final state of an animated circle
  which is a circle with a radius of 40.
  -->
  <circle cx="250" cy="50" r="20">
    <animate
      attributeType="XML"
      attributeName="r"
      from="0"
      to="40"
      dur="5s"
      fill="freeze" />
  </circle>
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## altGlyph

> **警告:** As of SVG2 {{SVGElement('altGlyph')}} is deprecated and shouldn't be used.

For {{SVGElement('altGlyph')}}, `fill` is a presentation attribute that defines the color of the glyph.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## animate

For {{SVGElement('animate')}}, `fill` defines the final state of the animation.

| Value         | `freeze` (_Keep the state of the last animation frame_) \| `remove` (_Keep the state of the first animation frame_) |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Default value | `remove`                                                                                                            |
| Animatable    | No                                                                                                                  |

## animateColor

> **警告:** As of SVG Animation 2 {{SVGElement('animateColor')}} is deprecated and shouldn't be used. Use {{SVGElement('animate')}} instead.

For {{SVGElement('animateColor')}}, `fill` defines the final state of the animation.

| Value         | `freeze` (_Keep the state of the last animation frame_) \| `remove` (_Keep the state of the first animation frame_) |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Default value | `remove`                                                                                                            |
| Animatable    | No                                                                                                                  |

## animateMotion

For {{SVGElement('animateMotion')}}, `fill` defines the final state of the animation.

| Value         | `freeze` (_Keep the state of the last animation frame_) \| `remove` (_Keep the state of the first animation frame_) |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Default value | `remove`                                                                                                            |
| Animatable    | No                                                                                                                  |

## animateTransform

For {{SVGElement('animateTransform')}}, `fill` defines the final state of the animation.

| Value         | `freeze` (_Keep the state of the last animation frame_) \| `remove` (_Keep the state of the first animation frame_) |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Default value | `remove`                                                                                                            |
| Animatable    | No                                                                                                                  |

## circle

For {{SVGElement('circle')}}, `fill` is a presentation attribute that defines the color of the circle.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## ellipse

For {{SVGElement('ellipse')}}, `fill` is a presentation attribute that defines the color of the ellipse.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## path

For {{SVGElement('path')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## polygon

For {{SVGElement('polygon')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## polyline

For {{SVGElement('polyline')}}, `fill` is a presentation attribute that defines tthe color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## rect

For {{SVGElement('rect')}}, `fill` is a presentation attribute that defines the color of the rectangle.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## set

For {{SVGElement('set')}}, `fill` defines the final state of the animation.

| Value         | `freeze` (_Keep the state of the last animation frame_) \| `remove` (_Keep the state of the first animation frame_) |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Default value | `remove`                                                                                                            |
| Animatable    | No                                                                                                                  |

## text

For {{SVGElement('text')}}, `fill` is a presentation attribute that defines what the color of the text.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## textPath

For {{SVGElement('textPath')}}, `fill` is a presentation attribute that defines the color of the text.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## tref

> **警告:** As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

For {{SVGElement('tref')}}, `fill` is a presentation attribute that defines the color of the text.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## tspan

For {{SVGElement('tspan')}}, `fill` is a presentation attribute that defines the color of the text.

| Value         | **[\<paint>](/ja/docs/Web/SVG/Content_type#Paint)** |
| ------------- | --------------------------------------------------- |
| Default value | `black`                                             |
| Animatable    | Yes                                                 |

> **メモ:** As a presentation attribute `fill` can be used as a CSS property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("svg.attributes.presentation.fill")}}

> **メモ:** For information on using the `context-fill` (and `context-stroke`) values from HTML documents, see the documentation for the non-standard {{cssxref("-moz-context-properties")}} property.
