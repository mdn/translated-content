---
title: <view>
slug: Web/SVG/Reference/Element/view
original_slug: Web/SVG/Element/view
---

{{SVGRef}}

Un `view` es una forma definida de ver la imagen, con un nivel de zoom o una vista detallada.

## Contexto de uso

{{svginfo}}

## Atributos

### Atributos globales

- [Atributos Aria](/es/docs/Web/SVG/Reference/Attribute#aria_attributes)
- [Atributos Core](/es/docs/Web/SVG/Reference/Attribute#core_attributes)
- [Atributos de eventos globales](/es/docs/Web/SVG/Reference/Attribute#global_event_attributes)

### Atributos específicos

- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
- {{SVGAttr("viewTarget")}} {{Deprecated_Inline}}

## Ejemplo

### SVG

```svg
<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">

  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

### HTML

```html
<img src="example.svg" alt="tres círculos" width="300" height="100" />
<br />
<img src="example.svg#three" alt="círculo azul" width="100" height="100" />
```

### Resultado

{{EmbedLiveSample("Example", "85ch", "240px")}}

## Interfaz DOM

Este elemento implementa la interfaz {{SVGElement("SVGViewElement")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
