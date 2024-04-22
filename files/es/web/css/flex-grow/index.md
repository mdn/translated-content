---
title: flex-grow
slug: Web/CSS/flex-grow
---

{{CSSRef}}

## Resumen

La propiedad **`flex-grow`** de [CSS](/es/docs/Web/CSS) especifica el factor de crecimiento de un elemento flexible (que tiene asignado display:flex), en su dirección principal. El factor de crecimiento especifica qué cantidad del espacio restante dentro del contenedor flexible, debería ocupar el item en cuestión.

La dirección principal puede ser la altura o el ancho del elemento, dependiendo del valor de {{cssxref("flex-direction")}}.

El espacio restante es el tamaño del contenedor flexible menos el tamaño de todos los elementos flexibles juntos. Si todos los ítems dentro del contenedor tienen el mismo factor de crecimiento, todos los elementos reciben la misma cantidad del espacio restante. De lo contrario, el espacio restante se distribuye en función de los diferentes factores de crecimientos de cada item.

{{cssinfo}}

Ver [Usando las cajas flexibles en CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS) para más propiedades e información.

## Sintaxis

```css
/* <number> valores */
flex-grow: 3;
flex-grow: 0.6;

/* Valores globales */
flex-grow: inherit;
flex-grow: initial;
flex-grow: unset;
```

### Valores

- `<number>`
  - : Ver {{cssxref("&lt;number&gt;")}}. Los valores negativos no son válidos.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<h4>This is a Flex-Grow</h4>
<h5>A,B,C and F are flex-grow:1 . D and E are flex-grow:2 .</h5>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

### CSS

```css
#content {
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-items: stretch;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
```

### Resultado

{{EmbedLiveSample('', '700px', '300px')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Usando las cajas flexibles en CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
