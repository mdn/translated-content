---
title: <view>
slug: Web/SVG/Element/view
translation_of: Web/SVG/Element/view
---
{{SVGRef}}

\<view> ist ein definierter Weg, das Bild zu betrachten, wie eine Vergrößerungsstufe oder eine Detail-Ansicht.

## Gebrauchs-Kontext

{{svginfo}}

## Attribute

### Globale Attribute

- [Bereichattribute](/de/docs/Web/SVG/Attribute#Aria_attributes "en/SVG/Attribute#Core") »
- [Kernattribute](/de/docs/Web/SVG/Attribute#Core_attributes "en/SVG/Attribute#Core") »
- [Globale Ereignisattribute](/de/docs/Web/SVG/Attribute#Global_event_attributes "en/SVG/Attribute#Core") »
- {{SVGAttr("externalResourcesRequired")}}

### Spezifische Attribute

- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("zoomAndPan")}}
- {{SVGAttr("viewTarget")}}

## Beispiel

### SVG

```html
<svg width="600" height="200" viewBox="0 0 600 200"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="gradient">
      <stop offset="0%" stop-color="#8cffa0" />
      <stop offset="100%" stop-color="#8ca0ff" />
    </radialGradient>
  </defs>

  <circle r="50" cx="180" cy="50" style="fill:url(#gradient)"/>

  <view id="halfSizeView" viewBox="0 0 1200 400"/>
  <view id="normalSizeView" viewBox="0 0 600 200"/>
  <view id="doubleSizeView" viewBox="0 0 300 100"/>

  <a xlink:href="#halfSizeView">
    <text x="5" y="20" font-size="20">half size</text>
  </a>
  <a xlink:href="#normalSizeView">
    <text x="5" y="40" font-size="20">normal size</text>
  </a>
  <a xlink:href="#doubleSizeView">
    <text x="5" y="60" font-size="20">double size</text>
  </a>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 600, 200)}}

## DOM Interface

This element implements the {{domxref("SVGViewElement")}} interface.

## Specifications

| Specification                                                                            | Status                   | Comment            |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('SVG2', 'linking.html#ViewElement', '&lt;view&gt;')}}     | {{Spec2('SVG2')}} |                    |
| {{SpecName('SVG1.1', 'linking.html#ViewElement', '&lt;view&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Browser compatibility

{{Compat}}
