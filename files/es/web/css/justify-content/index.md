---
title: justify-content
slug: Web/CSS/justify-content
---

{{CSSRef}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`justify-content`** define cómo el navegador distribuye el espacio entre y alrededor de los items flex, a lo largo del eje principal de su contenedor.

El alineamiento se produce luego de que las longitudes y márgenes automáticos son aplicados, lo que significa que, si existe al menos un elemento flexible con {{cssxref("flex-grow")}} diferente a 0, no tendrá efecto ya que no habrá espacio disponible.

> [!NOTE]
> No se debe asumir que esta propiedad sólo se aplicará a contenedores flex en el futuro y por lo tanto no ocultarla simplemente estableciendo otro valor para {{cssxref("display")}}. El CSSWG está trabajano para [extender su uso a cualquier elemento en bloque](https://dev.w3.org/csswg/css3-align/#justify-content). La especificación preliminar se encuentra en una etapa muy temprana y aún no está implementada.

{{cssinfo}}

Véase [Using CSS flexible boxes](/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) para más propiedades e información.

## Sintaxis

```css
/* Alinear items flex desde el comienzo */
justify-content: flex-start;

/* Alinear items desde el final */
justify-content: flex-end;

/* Alinear items en el centro */
justify-content: center;

/* Distribuir items uniformemente
El primer item al inicio, el último al final */
justify-content: space-between;

/* Distribuir items uniformemente
Los items tienen el mismo espacio a su alrededor */
justify-content: space-around;

/* Valores globales */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

### Valores

- `flex-start`
  - : Los items flex se colocan comenzando desde el **comienzo principal**. El margen del primer item es alineado al ras con el borde del comienzo principal de la línea y cada item siguiente es alineado al ras con el precedente.
- `flex-end`
  - : Los items flex se colocan comenzando desde el **final principal**. El margen del último item es alineado al ras con el borde del final principal de la línea y cada item precedente es alineado al ras con el siguiente.
- `center`
  - : Los items flex son colocados hacia el centro de la línea. Los items flex se alinean al ras entre sí y en torno al centro de la línea. El espacio entre el borde del comienzo principal de la línea y el primer item es el mismo que el espacio entre el borde del final principal y el último item de la línea.
- `space-between`
  - : Los items flex se distribuyen uniformemente sobre la línea. El espaciamiento se hace de tal manera que el espacio adyacente entre dos items es el mismo. El borde del comienzo principal y el borde del final principal se alinean al ras con el borde del primer y último item respectivamente.
- `space-around`
  - : Los items flex se alinean uniformemente de tal manera que el espacio entre dos items adyacentes es el mismo. El espacio vacío anterior al primer item y posterior al último item equivale a la mitad del espacio entre dos items adyacentes.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Contenido HTML

```html
<div id="container">
  <p>justify-content: flex-start</p>
  <div id="flex-start">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: flex-end</p>
  <div id="flex-end">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: center</p>
  <div id="center">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: space-between</p>
  <div id="space-between">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: space-around</p>
  <div id="space-around">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

### CSS

```css
#container > div {
  display: flex;
  font-family: "Courier New", "Lucida Console", monospace;
}

#container > div > div {
  width: 50px;
  height: 50px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}

#flex-start {
  justify-content: flex-start;
}

#center {
  justify-content: center;
}

#flex-end {
  justify-content: flex-end;
}

#space-between {
  justify-content: space-between;
}

#space-around {
  justify-content: space-around;
}
```

Resultados en:

{{ EmbedLiveSample('Ejemplos', 600, 550) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Using CSS flexible boxes](/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
