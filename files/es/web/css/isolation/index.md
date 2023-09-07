---
title: Isolation
slug: Web/CSS/isolation
---

{{CSSRef}}

## Resumen

La propiedad CSS **`isolation`** define si el elemento debe crear un nuevo {{glossary("stacking context")}}.

Esto es especialmente útil en conjunto con {{cssxref("background-blend-mode")}} que solo mezclan fondos en un contexto de apilamiento determinado: permite aislar grupos de elementos de sus fondos más profundos y mezclar sus colores de fondo.

{{cssinfo}}

## Sintaxis

```css
/* Keyword values */
isolation: auto;
isolation: isolate;

/* Global values */
isolation: inherit;
isolation: initial;
isolation: unset;
```

### Valores

- `auto`
  - : Es un keyword que indica que un nuevo contexto de apilamiento debe ser creado solo si una de las propiedades aplicadas al elemento lo requiere.
- `isolate`
  - : Es un keyword que indica que un nuevo contexto de apilamiento debe ser creado.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

```css
.a {
  background-color: rgb(0, 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
}
```

{{ EmbedLiveSample('Examples', "230", "230") }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También puedes ver

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
