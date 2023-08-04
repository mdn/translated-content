---
title: ":any-link"
slug: Web/CSS/:any-link
---

{{CSSRef}} {{SeeCompatTable}}La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) `:any-link` de [CSS](/es/docs/Web/CSS) representa a un elemento que actúa como el ancla origen de un hipervínculo independientemente de si ha sido visitado, es decir, coincide con cualquier elemento {{HTMLElement("a")}}, {{HTMLElement("area")}} o {{HTMLElement("link")}} con un atributo `href`. Por lo tanto, coincide con todos los elementos que coincidan con {{cssxref(":link")}} o {{cssxref(":visited")}}.

```css
/* Selecciona cualquier elemento que coincida con :link o :visited */
:any-link {
  color: green;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<a href="https://example.com">Enlace externo</a><br />
<a href="#">Enlace de destino interno</a><br />
<a>Enlace de marcador de posición (no se personalizará)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* navegadores WebKit */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
