---
title: ":link"
slug: Web/CSS/:link
---

{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:link`** [CSS](/es/docs/Web/CSS) representa un elemento que aún no se ha visitado. Coincide con cada elemento no visitado {{HTMLElement("a")}}, {{HTMLElement("area")}}, o {{HTMLElement("link")}} que tiene un atributo `href`.

```css
/* Selecciona cualquier <a> que aún no se haya visitado */
a:link {
  color: red;
}
```

Los estilos definidos por la pseudo-clase `:link` serán anulados por cualquier pseudo-clase posterior relacionada con el enlace ({{cssxref(":active")}}, {{cssxref(":hover")}}, o {{cssxref(":visited")}}) que tenga al menos la misma especificidad. Para darle un estilo apropiado a los enlaces, coloque la regla `:link` antes de todas las demás reglas relacionadas con el enlace, tal como lo define el _orden LVHA_: `:link` — `:visited` — `:hover` — `:active`.

> **Nota:** Use {{cssxref(":any-link")}} para seleccionar un elemento independientemente de si ha sido visitado o no.

## Sintaxis

{{csssyntax}}

## Ejemplos

Por defecto, la mayoría de los navegadores aplican un valor especial {{cssxref("color")}} a los enlaces visitados. Por lo tanto, los enlaces de este ejemplo probablemente tendrán colores de fuente especiales solo antes de visitarlos. (Después de eso, deberá borrar el historial de su navegador para volver a verlos). Sin embargo, es probable que los valores de {{cssxref("background-color")}} permanezcan, ya que la mayoría de los navegadores no establecen esa propiedad en los enlaces visitados de forma predeterminada.

### HTML

```html
<a href="#ordinary-target">Este es un enlace ordinario.</a><br />
<a href="">Ya has visitado este enlace.</a><br />
<a>Enlace de marcador de posición (no se personalizará)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### Resultado

{{EmbedLiveSample("Ejemplos")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Pseudo-clases relacionadas con enlaces: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
