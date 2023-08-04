---
title: align-self
slug: Web/CSS/align-self
---

{{CSSRef}}

## Resumen

La propiedad [CSS](/es/docs/CSS) **`align-self`** alinea los elementos flexibles de la línea flexible actual, reemplazando el valor de {{cssxref("align-items")}}. Si el límite transversal de alguno de los elementos está definido como `auto`, el valor de `align-self` es ignorado.

{{cssinfo}}

Véase [Usando las cajas flexibles CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS) para más propiedades e información.

## Sintaxis

```css
/* Valores clave */
align-self: auto;
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;
align-self: stretch;

/* Valores globales */
align-self: inherit;
align-self: initial;
align-self: unset;
```

### Valores

- `auto`
  - : Se calcula acorde al valor de {{cssxref("align-items") }} del padre, o al de `stretch` si el elemento no tiene padre.
- `flex-start`
  - : El límite transversal inicial del elemento flexible es unido al borde transversal inicial de la línea.
- `flex-end`
  - : El límite transversal final del elemento flexible es unido al borde transversal final de la línea.
- `center`
  - : Los límites del elemento flexible son centrados dentro de la línea en su eje transversal. Si el tamaño transversal del elemento es superior al del contenedor, se excederá por igual hacia ambas direcciones.
- `baseline`
  - : Todos los elementos flexibles son ajustados de modo que sus bases estén alineadas. El elemento con la distancia mayor entre su límite transversal inicial y su base es combinado con el borde transversal de la línea.
- `stretch`
  - : Las elementos flexibles son estirados de modo que el tamaño transversal de sus límites sea el mismo de la línea, manteniendo sus restricciones de anchura y altura.

### Sintaxis formal

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando las cajas flexibles CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
