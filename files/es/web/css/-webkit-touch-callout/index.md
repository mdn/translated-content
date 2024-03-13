---
title: "-webkit-touch-callout"
slug: Web/CSS/-webkit-touch-callout
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) `-webkit-touch-callout` controla la visualización de la llamada predeterminada que se muestra cuando se mantiene pulsado un objetivo táctil .

Cuando se toca y se mantiene la presión en un objetivo en iPhone OS, Safari muestra un un cuadro con información sobre el enlace. Esta propiedad permite deshabilitar este comportamiento.

## Síntaxis

```css
/* Palabras clave valor */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* Valores globales */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: unset;
```

### Valores

- `default`
  - : Se muestra el cuadro de información por defecto.
- `none`
  - : El cuadro está deshabilitado

### Síntaxis Formal

{{csssyntax}}

## Example

```css
.example {
  -webkit-touch-callout: none;
}
```

## Especificaciones

No es parte de ninguna especificación.

Apple tiene una [descripcón en la Referencia CSS de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout).

## Compatibilidad con navegadores

{{Compat}}
