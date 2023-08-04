---
title: "::-webkit-progress-value"
slug: Web/CSS/::-webkit-progress-value
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::-webkit-progress-value`** representa la parte rellena de la barra del elemento {{HTMLElement("progress")}}. Es hija del pseudo-elemento {{cssxref("::-webkit-progress-bar")}}.

> **Nota:** para que `::-webkit-progress-value` tenga efecto en el elemento \<progress> {{cssxref("-webkit-appearance")}} deberá tener _none_ como valor.

## Ejemplo

### Contenido CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}
```

### Contenido HTML

```html
<progress value="10" max="50"></progress>
```

## Resultado

{{EmbedLiveSample("Ejemplo", 200, 50)}}

Una barra de progreso con el estilo indicado anteriormente será similar a esta:

![](progress-value.png)

## Especificaciones

No es parte de ninguna especificación. Es un elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- Los pseudo-elemento de WebKit/Blink para dar estilos a otras partes de un elemento {{HTMLElement("progress")}}:

  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
