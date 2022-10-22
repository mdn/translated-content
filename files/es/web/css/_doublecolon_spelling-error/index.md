---
title: '::spelling-error'
slug: Web/CSS/::spelling-error
tags:
  - CSS
  - Experimental
  - Pseudo-elemento
  - Referencia
  - Web
translation_of: Web/CSS/::spelling-error
---
{{CSSRef}}{{SeeCompatTable}}

El [pseudo-elemento](/en/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::spelling-error`** representa un segmento de texto que el {{glossary("user agent")}} ha marcado como deletreado incorrectamente.

```css
::spelling-error {
  color: red;
}
```

## Propiedades permitidas

Solo se puede usar un pequeño subconjunto de propiedades de CSS en una regla con `::spelling-error` en su selector:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} y sus longhands
- {{cssxref("text-decoration")}} y sus propiedades asociadas
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Síntaxis

```
::spelling-error
```

## Especificaciones

| Especificación                                                                                                       | Estado                                       | Comentario          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-spelling-error', '::spelling-error')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("css.selectors.spelling-error")}}

## Ver también

- {{cssxref("::grammar-error")}}
