---
title: image
slug: Web/SVG/Element/image
---

{{SVGRef}}

O elemento SVG **`<image>`** carrega imagens dentro de documentos SVG. Ele pode exibir arquivos {{glossary("raster image")}} ou outros arquivos SVG.

The only image formats SVG software must support are [JPEG](/pt-BR/docs/Glossary/jpeg), [PNG](/pt-BR/docs/Glossary/PNG), and other SVG files. Animated [GIF](/pt-BR/docs/Glossary/gif) behavior is undefined.

SVG files displayed with `<image>` are [treated as an image](/pt-BR/docs/Web/SVG/SVG_as_an_Image): external resources aren't loaded, [:visited](/pt-BR/docs/Web/CSS/:visited) styles [aren't applied](/pt-BR/docs/Web/CSS/Privacy_and_the_:visited_selector), and they cannot be interactive. To include dynamic SVG elements, try [\<use>](/pt-BR/docs/Web/SVG/Element/use) with an external URL. To include SVG files and run scripts inside them, try [\<object>](/pt-BR/docs/Web/HTML/Element/object) inside of [\<foreignObject>](/pt-BR/docs/Web/SVG/Element/foreignObject).

> **Nota:** The HTML spec defines `<image>` as a synonym for [\<img>](/pt-BR/docs/Web/HTML/Element/img) while parsing HTML. This specific element and its behavior only apply inside SVG documents or [inline SVG](/pt-BR/docs/SVG_In_HTML_Introduction).

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Conditional processing attributes](/pt-BR/docs/Web/SVG/Attribute#Conditional_processing_attributes)
- [Core attributes](/pt-BR/docs/Web/SVG/Attribute#Core_attributes)
- [Graphical event attributes](/pt-BR/docs/Web/SVG/Attribute#Graphical_event_attributes)
- [Presentation attributes](/pt-BR/docs/Web/SVG/Attribute#Presentation_attributes)
- [Xlink attributes](/pt-BR/docs/Web/SVG/Attribute#Xlink_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Specific attributes

- {{SVGAttr("x")}}: Positions the image horizontally from the origin.
- {{SVGAttr("y")}}: Positions the image vertically from the origin.
- {{SVGAttr("width")}}: The width the image renders at. Unlike HTML's `<img>`, this attribute is required.
- {{SVGAttr("height")}}: The height the image renders at. Unlike HTML's `<img>`, this attribute is required.
- {{SVGAttr("href")}} and {{SVGAttr("xlink:href")}}: Points at a URL for the image file.
- {{SVGAttr("preserveAspectRatio")}}: Controls how the image is scaled.

## DOM Interface

`<image>` implements the {{domxref("SVGImageElement")}} interface.

## Example

Basic rendering of a PNG image in SVG:

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="https://www.w3.org/2000/svg"
  xmlns:xlink="https://www.w3.org/1999/xlink">
  <image href="mdn_logo_only_color.png" height="200" width="200" />
</svg>
```

### Result

{{EmbedLiveSample("Example", 250, 260)}}

## Specifications

| Specification                                                       | Status              | Comment                              |
| ------------------------------------------------------------------- | ------------------- | ------------------------------------ |
| {{SpecName('SVG2', 'embedded.html#ImageElement', '&lt;image&gt;')}} | {{Spec2('SVG2')}}   | Allows omitting `height` and `width` |
| {{SpecName('SVG1.1', 'struct.html#ImageElement', '&lt;image&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition                   |

## Compatibilidade com navegadores

{{Compat("svg.elements.image")}}
