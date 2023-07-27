---
title: Selectores universales
slug: Web/CSS/Universal_selectors
---

{{CSSRef}}

El **selector universal** CSS (`*`) coincide con elementos de cualquier tipo.

```css
/* Selecciona todos los elementos */
* {
  color: green;
}
```

A partir de CSS3, el asterisco se puede usar en combinación con {{cssxref("CSS_Namespaces", "namespaces")}}:

- `ns|*` - coincide con todos los elementos en el espacio de nombres _ns_
- `*|*` - coincide con todos los elementos
- `|*` - matches all elements without any declared namespace

## Sintaxis

```
* { style properties }
```

El asterisco es opcional con selectores simples. Por ejemplo, `*.warning` y `.warning` son equivalentes.

## Ejemplos

### CSS

```css
* [lang^="en"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

/* despejar automáticamente el siguiente hermano después de un elemento flotante */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="en-us">Un span verde</span> en un párrafo rojo.</span>
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">Un span rojo</span> en un párrafo verde.</span>
</p>
```

### Resultado

{{EmbedLiveSample('Ejemplos')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
