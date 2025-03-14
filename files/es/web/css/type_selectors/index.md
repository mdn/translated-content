---
title: Selectores de tipo
slug: Web/CSS/Type_selectors
---

{{CSSRef}}El selector de tipo CSS selecciona elementos por nombre de nodo. En otras palabras, selecciona todos los elementos del tipo dado dentro de un documento.

```css
/* Todos los elementos <a> */
a {
  color: red;
}
```

## Sintaxis

```
element { style properties }
```

## Ejemplo

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Aquí hay un elemento 'span' con algo de texto.</span>
<p>Aquí hay un elemento 'p' con algo de texto.</p>
<span>Aquí hay un elemento 'span' con más texto.</span>
```

### Resultado

{{EmbedLiveSample('Ejemplo', 200, 150)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
