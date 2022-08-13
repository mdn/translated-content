---
title: <polygon>
slug: Web/SVG/Element/polygon
tags:
  - Element
  - Referenz
  - SVG
  - SVG Grafik
translation_of: Web/SVG/Element/polygon
---
{{SVGRef}}

Das **`<polygon>`** Element definiert eine geschlossene Form, die aus mehreren geraden Linien besteht. Der letzte Punkt wird mit dem ersten Punkt verbunden. Für geöffnete (nicht verbundene) Formen existiert das {{SVGElement("polyline")}} Element.

## Verwendung

{{svginfo}}

## Attribute

### Globale Attribute

- [Bedingte Verarbeitungsattribute](/de/docs/Web/SVG/Attribute#Conditional_processing_attributes) »
- [Kernattribute](/de/docs/Web/SVG/Attribute#Core_attributes) »
- [Grafische Ereignisattribute](/de/docs/Web/SVG/Attribute#Graphical_event_attributes) »
- [Darstellungsattribute](/de/docs/Web/SVG/Attribute#Presentation_attributes) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Zielgenaue Attribute

- {{SVGAttr("points")}}

## DOM Schnittstelle

Dieses Element implementiert die {{domxref("SVGPolygonElement")}} Schnittstelle.

## Beispiel

### SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg">

  <polygon points="60,20 100,40 100,80 60,100 20,80 20,40"/>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 120, 120)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                   | Kommentar           |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('SVG2', 'shapes.html#PolygonElement', '&lt;polygon&gt;')}}     | {{Spec2('SVG2')}} | Keine Änderung      |
| {{SpecName('SVG1.1', 'shapes.html#PolygonElement', '&lt;polygon&gt;')}} | {{Spec2('SVG1.1')}} | Initiale Definition |

## Browser Kompatibilität

{{Compat}}

Diese Tabelle basiert auf [diesen Daten](/de/docs/Web/SVG/Compatibility_sources).

## Siehe auch

- {{SVGElement("polyline")}}
