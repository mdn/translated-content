---
title: ":-moz-drag-over"
slug: Web/CSS/:-moz-drag-over
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-drag-over` se usa para editar un elemento cuando se produce un evento de arrasttar (drag) sobre él.

## Síntaxis

```
element:-moz-drag-over { propiedades del estilo }
```

## Ejemplo

### CSS

```css
td:-moz-drag-over {
  color: red;
}
```

### HTML

```html
<table border="1">
  <tr>
    <td width="100px" height="100px">Arrastra aquí</td>
  </tr>
</table>
```

### Resultado

{{EmbedLiveSample("Example")}}
