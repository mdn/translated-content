---
title: image
slug: Web/SVG/Element/image
---

{{SVGRef}}

O elemento SVG **`<image>`** carrega imagens dentro de documentos SVG. Ele pode exibir arquivos {{glossary("raster image")}} ou outros arquivos SVG.

The only image formats SVG software must support are [JPEG](/pt-BR/docs/Glossary/JPEG), [PNG](/pt-BR/docs/Glossary/PNG), and other SVG files. Animated [GIF](/pt-BR/docs/Glossary/gif) behavior is undefined.

SVG files displayed with `<image>` are [treated as an image](/pt-BR/docs/Web/SVG/SVG_as_an_Image): external resources aren't loaded, [:visited](/pt-BR/docs/Web/CSS/:visited) styles [aren't applied](/pt-BR/docs/Web/CSS/Privacy_and_the_:visited_selector), and they cannot be interactive. To include dynamic SVG elements, try [\<use>](/pt-BR/docs/Web/SVG/Element/use) with an external URL. To include SVG files and run scripts inside them, try [\<object>](/pt-BR/docs/Web/HTML/Element/object) inside of [\<foreignObject>](/pt-BR/docs/Web/SVG/Element/foreignObject).

> [!NOTE]
> The HTML spec defines `<image>` as a synonym for [\<img>](/pt-BR/docs/Web/HTML/Element/img) while parsing HTML. This specific element and its behavior only apply inside SVG documents or [inline SVG](/pt-BR/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction).

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Conditional processing attributes](/pt-BR/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Core attributes](/pt-BR/docs/Web/SVG/Attribute#core_attributes)
- [Graphical event attributes](/pt-BR/docs/Web/SVG/Attribute#graphical_event_attributes)
- [Presentation attributes](/pt-BR/docs/Web/SVG/Attribute#presentation_attributes)
- [Xlink attributes](/pt-BR/docs/Web/SVG/Attribute#xlink_attributes)
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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
