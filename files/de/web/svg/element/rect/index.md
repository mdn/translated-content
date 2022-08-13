---
title: <rect>
slug: Web/SVG/Element/rect
translation_of: Web/SVG/Element/rect
---
{{SVGRef}}

Das **`<rect>`** Element ist ein SVG Element, aus welchem Rechtecke mittels einer definierten Eckposition, einer Höhe und einer Breite erstellt werden können. Zudem sind Rechtecke mit abgerundeten Ecken möglich.

## Nutzungskontext

{{svginfo}}

## Attribute

### Globale Attribute

- [Conditional processing attributes](/de/docs/Web/SVG/Attribute#Conditional_processing_attributes)
- [Core attributes](/de/docs/Web/SVG/Attribute#Core_attributes)
- [Graphical event attributes](/de/docs/Web/SVG/Attribute#Graphical_event_attributes)
- [Presentation attributes](/de/docs/Web/SVG/Attribute#Presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- {{SVGAttr("x")}}
  - : Legt die x-Koordinate des rect-Elements fest.
- {{SVGAttr("y")}}
  - : Legt die y-Koordinate des rect-Elements fest.
- {{SVGAttr("width")}}
  - : Legt die Breite des rect-Elements fest.
- {{SVGAttr("height")}}
  - : Legt die Höhe des rect-Elements fest.
- {{SVGAttr("rx")}}
  - : Legt den horizontalen Eckradius des rect-Elements fest.
- {{SVGAttr("ry")}}
  - : Legt den vertikalen Eckradius des rect-Elements fest.

## DOM Interface

Dieses Element implementiert das {{domxref("SVGRectElement")}} Interface.

## Beispiele

### Einfache Nutzung des rect-Elements

#### SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

#### Ergebnis

{{EmbedLiveSample("Simple_rect_usage", 120, 120)}}

### Rect-Element mit abgerundeten Ecken

#### SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100" rx="15" ry="15"/>
</svg>
```

#### Ergebnis

{{EmbedLiveSample("Rect_with_rounded_corners", 120, 120)}}

## Spezifikationen

| Specification                                                                            | Status                   | Comment          |
| ---------------------------------------------------------------------------------------- | ------------------------ | ---------------- |
| {{SpecName('SVG2', 'shapes.html#RectElement', '&lt;rect&gt;')}}     | {{Spec2('SVG2')}} |                  |
| {{SpecName('SVG1.1', 'shapes.html#RectElement', '&lt;rect&gt;')}} | {{Spec2('SVG1.1')}} | Erste Definition |

## Browser Kombatibilität

{{Compat}}

Die Tabelle stützt sich auf [diese Quellen](/en-US/SVG/Compatibility_sources).

## Siehe auch

- {{SVGElement("path")}}
