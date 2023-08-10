---
title: r
slug: Web/SVG/Attribute/r
---

{{SVGRef}}Атрибут r устанавливает значение радиуса круга.

Этот атрибут используют два элемента: {{SVGElement("circle")}}, и {{SVGElement("radialGradient")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient r="0" id="myGradient000">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="50%" id="myGradient050">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="100%" id="myGradient100">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="0" />
  <circle cx="150" cy="50" r="25" />
  <circle cx="250" cy="50" r="50" />

  <rect x="20" y="120" width="60" height="60" fill="url(#myGradient000)" />
  <rect x="120" y="120" width="60" height="60" fill="url(#myGradient050)" />
  <rect x="220" y="120" width="60" height="60" fill="url(#myGradient100)" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## circle

Для {{SVGElement('circle')}}, `r` устанавливает радиус окружности и, следовательно, её размер. При значении, меньшем или равном нулю, круг не будет нарисован.

| Значение              | **[\<length>](/docs/Web/SVG/Content_type#Length)**\| **[\<percentage>](/docs/Web/SVG/Content_type#Percentage)** |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Значение по умолчанию | `0`                                                                                                             |
| Анимируемость         | Да                                                                                                              |

> **Примечание:** Начиная с SVG2, **r** является свойством геометрии, означающим, что этот атрибут также может использоваться как CSS-свойство для кругов.

## radialGradient

Для {{ SVGElement("radialGradient") }}, `r` устанавливает радиус конечной окружности радиального градиента.

Градиент будет нарисован таким образом, чтобы **100%** конца градиента отображались по периметру этого конечного круга. Значение, меньшее или равное нулю, приведёт к тому, что область будет окрашена как один цвет, используя цвет и непрозрачность последнего градиента {{ SVGElement("stop") }}.

| Значение              | **[\<length>](/docs/Web/SVG/Content_type#Length)** \| **[\<percentage>](/docs/Web/SVG/Content_type#Percentage)** |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Значение по умолчанию | `50%`                                                                                                            |
| Анимируемость         | Да                                                                                                               |

## Спецификации

| Specification                                                                | Status              | Comment                                              |
| ---------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------- |
| {{SpecName("SVG2", "geometry.html#R", "r")}}                                 | {{Spec2("SVG2")}}   | Definition as a geometry property                    |
| {{SpecName("SVG2", "pservers.html#RadialGradientElementRAttribute", "r")}}   | {{Spec2("SVG2")}}   | Definition for SVG2 paint servers `<radialGradient>` |
| {{SpecName("SVG1.1", "pservers.html#RadialGradientElementRAttribute", "r")}} | {{Spec2("SVG1.1")}} | Initial definition for `<radialGradient>`            |
| {{SpecName("SVG1.1", "shapes.html#CircleElementRAttribute", "r")}}           | {{Spec2("SVG1.1")}} | Initial definition for `<circle>`                    |
