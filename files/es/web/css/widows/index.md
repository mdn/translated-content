---
title: widows
slug: Web/CSS/widows
---

{{CSSRef}}

La propiedad [CSS](/es/docs/CSS) **`widows`** especifica el número minimo de lineas en un contenedor de bloques que se deben mostrar en la parte superior de la [pagina](/es/docs/Web/CSS/Paged_Media), region o [columna](/es/docs/Web/CSS/CSS_Columns). Esta propiedad se usa normalmente para controlar como se producen las pausas.

```css
/* valores <enteros> */
widows: 2;
widows: 3;

/* valores globales */
widows: inherit;
widows: initial;
widows: unset;
```

> **Nota:** En la tipografia, un _widow_ is la ultima linea de un paragrafo que aparece solo en la parte superior de la pagina.

{{cssinfo}}

## Sintaxis

### Valores

- {{cssxref("&lt;integer&gt;")}}
  - : The minimum number of lines that can stay by themselves at the top of a new fragment after a fragmentation break. The value must be positive.

### Sintaxis Formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<div>
  <p>Este es el primer paragrafo que contiene algun texto.</p>
  <p>
    Este es el segundo paragrafo que contiene algún texto mayor que el primero.
    Es usado para desmostrar como trabaja widows.
  </p>
  <p>
    Este es el tercer paragrafo. Es un poco mas extenso en texto que el primero.
  </p>
</div>
```

### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

### Resultado

{{EmbedLiveSample("Example", 400, 160)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- {{cssxref("orphans")}}
- [Medio paginados](/es/docs/Web/CSS/Paged_Media)
