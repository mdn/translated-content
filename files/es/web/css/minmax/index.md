---
title: minmax()
slug: Web/CSS/minmax
---

La función **`minmax()`** [en CSS](/es/docs/Web/CSS) define un rango de tamaño mayor o igual que _min_ y menor o igual que _max_. Se emplea con [rejillas CSS](/es/docs/Web/CSS/CSS_Grid_Layout).

```css
/* valores <ancho no-flexible>, <ancho de la banda> */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* valores <ancho fijo>, <ancho de la banda> */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* valores <ancho no-flexible>, <ancho fijo> */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

## Sintáxis

Una función que toma dos parámetros, _min_ y _max_.

Cada parámetro puede ser un valor `<length>`, `<percentage>`, `<flex>` o uno de los valores de las palabras clave `max-content`, `min-content` o `auto`.

Si _max_ < _min_, entonces _max_ es ignorado y se trata a `minmax(min,max)` como _min_. Como un máximo, un valor {{cssxref("flex_value","&lt;flex&gt;")}} establece el factor flex de una banda; no es válido como un mínimo.

### Valores

- {{cssxref("&lt;length&gt;")}}
  - : Una medida no negativa.
- {{cssxref("&lt;percentage&gt;")}}
  - : Un porcentaje no negativo, relativo al tamaño en línea del contenedor de la rejilla en bandas de columna y el tamaño de bloque del contenedor de rejilla en bandas de fila. Si el tamaño del contenedor de la rejilla depende del tamaño de sus bandas, entonces `<percentage>` debe ser tratado como `auto`. El {{glossary("user agent")}} puede ajustar las contribuciones del tamaño implícito de la banda al tamaño del contenedor de rejilla y así incrementar el tamaño final de la banda y así incrementar el tamaño final en la cantidad mínima que resultase al respetar el porcentaje.
- {{cssxref("&lt;flex&gt;")}}
  - : Una dimension no-negativa con la unidad `fr` especificando el factor flex de la banda. Cada banda de tamaño `<flex>` toma una parte del espacio disponible en proporción a su factor flex.
- `max-content`
  - : Representa la mayor contribución max-content de los elementos de rejilla que ocupan la banda.
- `min-content`
  - : Representa la mayor contribución min-content de los elementos de rejilla que ocupan la banda.
- `auto`
  - : Como un máximo, idéntico a `max-content`. Como un mínimo representa el mayor tamaño mínimo (como se especifica en {{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de rejilla que ocupan la banda.

### Sintáxis formal

{{csssyntax}}

### Propiedades CSS

La función `minmax()` puede ser usada dentro de:

- [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
- [grid-template-rows](/es/docs/Web/CSS/grid-template-columns)
- [grid-auto-columns](/es/docs/Web/CSS/grid-auto-columns)
- [grid-auto-rows](/es/docs/Web/CSS/grid-auto-rows)

## Ejemplo

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(max-content, 300px) minmax(200px, 1fr) 150px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>
    Elemento tan ancho como el contenido,<br />
    pero de máximo 300 píxeles.
  </div>
  <div>Elemento con un ancho flexible, pero con un mínimo de 200 píxeles.</div>
  <div>Elemento inflexible de 150 píxeles de ancho.</div>
</div>
```

### Resultado

{{EmbedLiveSample("Example", "100%", 200)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Guía de Grid Layout: _[Conceptos básicos del diseño con rejilla - tamaño de bandas con minmax()](</es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Track_sizing_and_minmax()>)_
- [Rejillas CSS, valores lógicos y modos de escritura](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- Video tutorial: _[Presentando minmax()](http://gridbyexample.com/video/series-minmax/)_

1. [**CSS**](/es/docs/Web/CSS)
2. [**Referencia CSS**](/es/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout)
4. **Guías**

   1. [Conceptos básicos del diseño con rejillas](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   2. [Relación a otros métodos de diseño](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
   3. [Posicionamiento basado en líneas](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
   4. [Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [Diseño usando lineas con nombre](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
   6. [Posicionamiento automático en el diseño con rejillas](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [Alineamiento de cajas en el diseño con rejillas](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [Rejillas, valores lógicos y modos de escritura](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS Grid Layout y la Accesibilidad](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS Grid Layout y una Mejora Progresiva](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [Elaborando diseños comunes utilizando rejillas](/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Propiedades**

   1. [grid](/es/docs/Web/CSS/grid)
   2. [grid-area](/es/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/es/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/es/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/es/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/es/docs/Web/CSS/grid-column)
   7. [grid-column-end](/es/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/es/docs/Web/CSS/grid-column-gap)
   9. [grid-column-start](/es/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/es/docs/Web/CSS/grid-gap)
   11. [grid-row](/es/docs/Web/CSS/grid-row)
   12. [grid-row-end](/es/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/es/docs/Web/CSS/grid-row-gap)
   14. [grid-row-start](/es/docs/Web/CSS/grid-row-start)
   15. [grid-template](/es/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/es/docs/Web/CSS/grid-template-areas)
   17. [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6. **Glosario**

   1. [Rejilla](/es/docs/Glossary/Grid)
   2. [Líneas de rejilla](/es/docs/Glossary/Grid_lines)
   3. [Bandas de rejilla](/es/docs/Glossary/Grid_tracks)
   4. [Celdas de rejilla](/es/docs/Glossary/Grid_cell)
   5. [Áreas de rejilla](/es/docs/Glossary/Grid_areas)
   6. [Canaletes](/es/docs/Glossary/Gutters)
   7. [Eje de rejilla](/es/docs/Glossary/Grid_Axis)
   8. [Fila](/es/docs/Glossary/Grid_rows)
   9. [Columna](/es/docs/Glossary/Grid_column)
