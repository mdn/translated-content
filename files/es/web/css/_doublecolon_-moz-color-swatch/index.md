---
title: "::-moz-color-swatch"
slug: Web/CSS/::-moz-color-swatch
---

{{CSSRef}}{{Non-standard_header}}

El **`::-moz-color-swatch`** [pdseudo-elemento CSS](/es/docs/Web/CSS) es una [extension de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions) que representa el color seleccionado en un {{HTMLElement("input")}} de `type="color"`.

> **Nota:** Usando `::-moz-color-swatch` con cualquier cosa excepto `<input type="color">` no concuerda con nada y no tiene efecto.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<input type="color" value="#de2020" />
```

### CSS

```css
input[type="color"]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
```

### Resultado

{{EmbedLiveSample("Example", 300, 50)}}

## Especificaciones

No es parte de ninguna especificacion. Es un pseudo-elemento patentado específicamente para Gecko.

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- Pseudo-elementos similares usados por otros buscadores:

  - {{cssxref("::-webkit-color-swatch")}}, pseudo-elemento soportado por WebKit y Blink (Safari, Chrome, and Opera)
