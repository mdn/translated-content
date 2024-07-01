---
title: "-moz-user-input"
slug: Web/CSS/-moz-user-input
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

En las aplicaciones Mozilla , `-moz-user-input` determina si un elemento aceptará entrada por parte del usuario. `user-focus`, una propiedad similar fue propuesta en [primeros borradores de un predecesor de la especificación CSS3 UI](http://www.w3.org/TR/2000/WD-css3-userint-20000216) pero fue rechazada posteriormente por el grupo de trabajo..

{{cssinfo}}

`-moz-user-input` fue was one of the proposals leading to the proposed CSS 3 {{cssxref("user-input")}} property, which has not yet reached Candidate Recommendation (call for implementations).

Para elementos que normalmente son receptores de entrada por parte del usuario, como {{HTMLElement("textarea")}}, el valor inicial de `-moz-user-input` es `enabled`.

## Síntaxis

```css
/* Palabras clave valor */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Valores gloables */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Valores

- none
  - : El elemento no responde a la entrada de datos por parte del usuario y no estará {{Cssxref(":active")}}.
- enabled
  - : El elemento acepta entrada por parte del usuario. Para cajas de texto es el comportamiento por defecto.
- disabled
  - : El elemento no acepta datos del usuario. Sin embargo, no es lo mismo que establecer `disabled` a true, en ese caso el elemento es dibujado normalmente.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
input.example {
  /* the user will be able to select the text, but not change it. */
  -moz-user-input: disabled;
}
```

## Ver además

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-modify")}}
- {{cssxref("-moz-user-select")}}
