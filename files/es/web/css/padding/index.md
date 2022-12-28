---
title: padding
slug: Web/CSS/padding
---

{{CSSRef}}

## Resumen

La propiedad CSS **`padding`** establece el espacio de relleno requerido por todos los lados de un elemento. El [área de padding](/en/CSS/box_model#padding) es el espacio entre el contenido del elemento y su borde (`border`). No se permiten valores negativos.

La propiedad padding es un atajo para evitar la asignación de cada lado por separado (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`).

{{EmbedInteractiveExample("pages/css/padding.html")}}

> **Nota:** Padding crea espacio extra dentro de un elemento. En contraste, `margin` crea espacio extra _alrededor_ de un elemento.

{{cssinfo}}

## Sintaxis

```
Sintaxis formal: {{csssyntax("padding")}}
```

### Valores

Esta propiedad puede ser especificada utilizando uno, dos, tres o cuatro de los siguientes valores:

- `<length>`
  - : Especifica un ancho fijo no negativo. Ver más detalles {{ cssxref("&lt;length&gt;") }} .
- `<percentage>`
  - : Con respecto a la anchura("width") del bloque que lo contiene.

<!---->

- **Uno:** un valor unico se aplica a los 4 lados.
- **Dos:** el primer valor se aplica a **arriba y abajo**, el segundo valor se aplica a **derecha e izquierda**.
- **Tres:** el primer valor se aplica a **arriba**, el segundo valor a **derecha e izquierda** y el tercer valor se aplica a **abajo** del elemento.
- **Cuatro:** el primer valor se aplica a **arriba**, el segundo valor se aplica a la **derecha**, el tercer valor se aplica a **abajo** y el cuarto valor se aplica a la **izquierda**.

### Ejemplos

```css
/* aplica 5% de padding en todos los lados*/
 padding: 5%;
```

```css
 /* aplica 10px de padding en todos los lados */
 padding: 10px;
```

```css
/* Vertical | Horizontal */
 padding: 10px 20px;
```

```css
/* Arriba | Horizontal | Abajo */
 padding: 10px 3% 20px;
```

```css
/* Arriba | Derecha | Abajo | Izquierda */
 padding: 1em 3px 30px 5px;
```

```html hidden
<p style="padding: 5% 1em; border: outset currentColor;">border:outset; padding:5% 1em;</p>
```

{{EmbedLiveSample}}

## Ver ejemplo

HTML

```html
<h4>¡Hola Mundo!</h4>
<h3>El padding es diferente en esta linea.</h3>
```

CSS

```css
h4{
  background-color: green;
  padding: 50px 20px 20px 50px;
}

h3{
  background-color: blue;
  padding: 400px 50px 50px 400px;
}
```

{{ EmbedLiveSample('Live_Sample', 'Live Sample Link', 300) }}

## Especificaciones

{{Specifications}}

## Compatibilidad en navegadores

{{Compat("css.properties.padding")}}

## Ver también

- [CSS Box Model](/en/CSS/box_model)
