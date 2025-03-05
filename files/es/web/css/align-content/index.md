---
title: align-content
slug: Web/CSS/align-content
---

{{CSSRef}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) `align-content` ajusta las líneas dentro de un contenedor flex cuando hay espacio extra en el eje transversal.

Esta propiedad no tiene efecto en cajas flexibles de una sola línea.

{{cssinfo}}

Vea [Usando las cajas flexibles CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS) para más propiedades e información.

## Sintaxis

```css
/* Ajusta las líneas desde el inicio del eje transversal */
align-content: flex-start;

/* Ajusta las líneas desde el final del eje transversal */
align-content: flex-end;

/* Ajusta las líneas al rededor del centro del eje transversal */
align-content: center;

/* Distribuye las líneas a lo largo del eje transversal, de principio a fin */
align-content: space-between;

/* Distribuye las líneas a lo largo del eje transversal, igualmente espaciados */
align-content: space-around;

/* Estira las líneas para que ocupen el eje transversal completo */
align-content: stretch;

/* Valores globales */
align-content: inherit;
align-content: initial;
align-content: unset;
```

### Valores

- `flex-start`
  - : Las líneas son ajustadas a partir del inicio del eje transversal. El borde transversal de inicio de la primera línea y el del contenedor flexible quedan unidos. Cada línea siguiente es unida a su predecesora.
- `flex-end`
  - : Las líneas son ajustadas a partir del final del eje transversal. El borde transversal final de la última línea y el del contenedor flexible quedan unidos. Cada línea que precede es unida a la línea siguiente.
- `center`
  - : Las líneas son ajustadas hacia el centro del contenedor flexible. Las líneas son unidas entre sí, y centradas dentro del contenedor. El espacio entre el borde transversal de inicio y la primera línea, y el que hay entre el borde transversal final y la última línea es el mismo.
- `space-between`
  - : Las líneas son distribuidas de manera uniforme en el contenedor flexible. El espaciado se hace de modo que la separación entre cualquier par de elementos adyacentes sea el mismo. Los bordes transversales de inicio y de fin del contenedor son unidos a los bordes de la primera y última línea, respectivamente.
- `space-around`
  - : Las líneas son distribuidas uniformemente de modo que el espacio entre cualquier par de elementos adyacentes sea el mismo. El espacio vacío antes de la primera línea y el espacio después de la última es igual a la mitad del espacio entre cualquier par de líneas adyacentes.
- `stretch`
  - : Las líneas son estiradas para usar el espacio sobrante. El espacio libre en el contenedor es dividido por igual entre todas las líneas.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

**HTML:**

```html
<div id="container">
  <p>align-content: flex-start</p>
  <div id="flex-start">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: center</p>
  <div id="center">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: flex-end</p>
  <div id="flex-end">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: space-between</p>
  <div id="space-between">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: space-around</p>
  <div id="space-around">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>align-content: stretch</p>
  <div id="stretch">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

**CSS:**

```css
#container > div {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  width: 140px;
  height: 140px;
  background: linear-gradient(-45deg, #78ff8c, #b4ffc8);
}

#container > div > div {
  margin: 2px;
  width: 30px;
  min-height: 30px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}

#flex-start {
  -webkit-align-content: flex-start;
  align-content: flex-start;
}

#center {
  -webkit-align-content: center;
  align-content: center;
}

#flex-end {
  -webkit-align-content: flex-end;
  align-content: flex-end;
}

#space-between {
  -webkit-align-content: space-between;
  align-content: space-between;
}

#space-around {
  -webkit-align-content: space-around;
  align-content: space-around;
}

#stretch {
  -webkit-align-content: stretch;
  align-content: stretch;
}
```

Su resultado es:

{{ EmbedLiveSample('Examples', 600, 550) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando las cajas flexibles CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
