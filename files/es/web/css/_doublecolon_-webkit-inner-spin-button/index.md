---
title: "::-webkit-inner-spin-button"
slug: Web/CSS/::-webkit-inner-spin-button
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) [CSS](/es/docs/Web/CSS) **`::-webkit-inner-spin-button`** se usa para dar estilo a la parte interior del botón ruleta para seleccionar números en los input con type="number".

## Ejemplo

### Contenido CSS

```css
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
```

### Contenido HTML

```html
<input type="number" />
```

{{EmbedLiveSample("Example", 200, 30)}}

## Especificaciones

No es parte de ninguna especificación. Es un elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{cssxref("::-webkit-outer-spin-button")}}
- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Dando estilo a controles de formularios – WebKit](http://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
