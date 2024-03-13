---
title: "-moz-box-pack"
slug: Web/CSS/box-pack
---

{{CSSRef}}

> **Advertencia:** Esta propiedad es parte del módulo estándar original para el diseño de las cajas CSS Flexible que fue sustituida por un nuevo estándar.

Ver [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) para más información.

## Resumen

Las propiedades [CSS](/es/docs/Web/CSS)`-moz-box-pack` y `-webkit-box-pack` especifican cómo una `-moz-box` o un `-webkit-box` empaquetan o disponen su contenido en la dirección de su diseño o esquema. El efecto de esto sólo es visible si hay expacio extra en la caja. Ver [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#Flexible_box_properties) para más información sobre las propiedades de los elementos flexbox.

La dirección del esquema o diseño (layout) depende de la orientación del elemento: vertical o horizontal.

{{cssinfo}}

## Síntaxis

```css
/* Valores de palabras clave */
-moz-box-pack: start;
-moz-box-pack: center;
-moz-box-pack: end;
-moz-box-pack: justify;

/* Valores gloables */
-moz-box-pack: inherit;
-moz-box-pack: initial;
-moz-box-pack: unset;
```

### Valores

- `start`
  - : La caja empaqueta o muestra el contenido al principio dejando el espacio libre que hubiera al final.
- `center`
  - : La caja empaqueta o muestra el contenido en el centro dejando el espacio libre que hubiera dividido de igual manera entre el inicio y el final.
- `end`
  - : La caja empaqueta o muestra el contenido al final dejando el espacio libre que hubiera al principio.
- `justify`
  - : El espacio se divide de igual manera entre los diferentes hijos sin dejar nada del espacio libre ni antes del primer hijo ni después del último. Si sólo hay un hijo el comportamiento es como si fuera `start`.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
div.example {
  border-style: solid;

  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  /* Hace esta caja más alta que los hijos para que haya hueco suficiente
     para el empaquetado en la caja */
  height: 300px;
  /* Hace la caja lo suficientemente ancha para mostrar los contenidos
     centrados horizontalmente */
  width: 300px;

  /* Los hijos deberían estar orientados verticalmente */
  -moz-box-orient: vertical; /* Mozilla */
  -webkit-box-orient: vertical; /* WebKit */

  /* Alínea los hijos con el centro horizontal de la caja */
  -moz-box-align: center; /* Mozilla */
  -webkit-box-align: center; /* WebKit */

  /* Dispone a los hijos en el fondo de la caja */
  -moz-box-pack: end; /* Mozilla */
  -webkit-box-pack: end; /* WebKit */
}

div.example p {
  /* hace los hijos más estrechos que el padra para que
     haya espacio suficiente para el box-align */
  width: 200px;
}
```

```html
<div class="example">
  <p>
    Será el segundo empezando desde el fondo de div.example y centrado
    horizontalmente.
  </p>
  <p>Estaré en el fondo de div.example y centrado horizontalmente.</p>
</div>
```

{{EmbedLiveSample('Examples', 310, 310)}}

## Notas

EL borde de la caja que será tomado como _start_ para el empqeutado dependerá de la orientación y dirección de la caja:

|                | **Normal** | **Reverse** |
| -------------- | ---------- | ----------- |
| **Horizontal** | left       | right       |
| **Vertical**   | top        | bottom      |

El borde opuesto a start será el considerado como _end_.

Si el empaquetado se establece usando el atributo `pack` del elemento el estilo es ignorado.

## Especificaciones

Esta propiedad es no estándar aunque una propiedad similar apareción en [draft of CSS3 Flexbox](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/), que a su vez ha sido sustituida para nuevas versiones de la especificación.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("box-orient")}}, {{cssxref("box-direction")}}, {{cssxref("box-align")}}
