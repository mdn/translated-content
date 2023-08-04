---
title: "::-webkit-outer-spin-button"
slug: Web/CSS/::-webkit-outer-spin-button
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

El pseudo-elemento CSS **`::-webkit-outer-spin-button`** se usa para dar estilo a la parte exterior del selector de números en un botón input de tipo _number_.

## Ejemplo

### Contenido CSS

```css
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
```

### Contenido HTML

```html
<input type="number" />
```

{{EmbedLiveSample("Ejemplo", 200, 30)}}

## Especificaciones

No es parte de ninguna especificación. Es un pseudo-elemento propietario y específico de WebKit/Blink.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{cssxref("::-webkit-inner-spin-button")}}
- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Dando estilo a controles de formulario – WebKit](http://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
