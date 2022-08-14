---
title: <animateTransform>
slug: Web/SVG/Element/animateTransform
tags:
  - Animacja
  - Animacje SVG
  - SVG Animacja
translation_of: Web/SVG/Element/animateTransform
---
{{SVGRef}}

Element animateTransform służy do transformacji właściwości elementu takich jak skalowanie, obracanie, przechylanie.

## Użycie

{{svginfo}}

## Przykład

```html
<?xml version="1.0"?>
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink" >

    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
```

**Podgląd na żywo**

{{ EmbedLiveSample('Example','120','120') }}

## Atrybuty

### Atrybuty globalne

- [Conditional processing attributes](</pl/docs/Web/SVG/Attribute#Conditional processing attributes> "en-US/docs/Web/SVG/Attribute#Conditional processing attributes") »
- [Core attributes](</pl/docs/Web/SVG/Attribute#Core attributes> "en-US/docs/Web/SVG/Attribute#Core attributes") »
- [Animation event attributes](</pl/docs/Web/SVG/Attribute#Animation event attributes> "en-US/docs/Web/SVG/Attribute#Animation event attributes") »
- [Xlink attributes](</pl/docs/Web/SVG/Attribute#Xlink attributes> "en-US/docs/Web/SVG/Attribute#Xlink attributes") »
- [Animation attribute target attributes](</pl/docs/Web/SVG/Attribute#Animation attribute target attributes> "en-US/docs/Web/SVG/Attribute#Animation attribute target attributes") »
- [Animation timing attributes](</pl/docs/Web/SVG/Attribute#Animation timing attributes> "en-US/docs/Web/SVG/Attribute#Animation timing attributes") »
- [Animation value attributes](</pl/docs/Web/SVG/Attribute#Animation value attributes> "en-US/docs/Web/SVG/Attribute#Animation value attributes") »
- [Animation addition attributes](</pl/docs/Web/SVG/Attribute#Animation addition attributes> "en-US/docs/Web/SVG/Attribute#Animation addition attributes") »
- {{ SVGAttr("externalResourcesRequired") }}

### Atrybuty specyficzne

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## Model DOM

Element implementuje [`SVGAnimateTransformElement`](/en-US/docs/DOM/SVGAnimateTransformElement "en/DOM/SVGAnimateTransformElement").

## Specyfikacja

| Specification                                                                                                            | Status                                   | Comment            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------ |
| {{SpecName("SVG Animations 2", "#AnimateTransformElement", "&lt;animateTransform&gt;")}}     | {{Spec2("SVG Animations 2")}} | No change          |
| {{SpecName('SVG1.1', 'animate.html#AnimateTransformElement', '&lt;animateTransform&gt;')}} | {{Spec2('SVG1.1')}}                 | Initial definition |

## Wsparcie przeglądarek

{{Compat("svg.elements.animateTransform")}}
