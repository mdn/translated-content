---
title: "::-webkit-progress-bar"
slug: Web/CSS/::-webkit-progress-bar
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::-webkit-progress-bar`** representa la barra entera del elemento {{HTMLElement("progress")}} . Normalmente sólo está visible a partir de la porción rellena de la barra ya que, por defecto se muestra debajo del pseudo-lemento {{ cssxref("::-webkit-progress-value") }}. Es hijo del pseudo-elemento {{cssxref("::-webkit-progress-inner-element")}} y padre del pseudo-elemento {{cssxref("::-webkit-progress-value")}}.

> **Nota:** para que `::-webkit-progress-value` tenga efecto , en el elemento `<progress>` {{cssxref("-webkit-appearance")}} debe tener el valor _none_.

## Ejemplo

### Contenido CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: orange;
}
```

### Contenido HTML

```html
<progress value="10" max="50"></progress>
```

### Resultado

{{EmbedLiveSample("Ejemplo", 200, 50)}}

Una barra de progreso que use el estilo indicado anteriormente será similar a la siguiente:

![](progress-bar.png)

## Especificaciones

No es parte de ninguna especificación. Es un pseudo-elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- Los pseudo-elementos usados por WebKit/Blink para dar estilo a otras partes del elemento {{HTMLElement("progress")}}:

  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
