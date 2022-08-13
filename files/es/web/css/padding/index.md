---
title: padding
slug: Web/CSS/padding
tags:
  - Propiedades CSS
translation_of: Web/CSS/padding
---
{{CSSRef}}

## Resumen

La propiedad CSS **`padding`** establece el espacio de relleno requerido por todos los lados de un elemento. El [área de padding](/en/CSS/box_model#padding "http://developer.mozilla.org/en/CSS/Box_model#padding") es el espacio entre el contenido del elemento y su borde (`border`). No se permiten valores negativos.

La propiedad padding es un atajo para evitar la asignación de cada lado por separado (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`).

{{EmbedInteractiveExample("pages/css/padding.html")}}

> **Nota:** Padding crea espacio extra dentro de un elemento. En contraste, `margin` crea espacio extra _alrededor_ de un elemento.

{{cssinfo}}

## Sintaxis

    Sintaxis formal: {{csssyntax("padding")}}

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
 padding: 5%;               /* aplica 5% de padding en todos los lados*/
```

```css
 padding: 10px;              /* aplica 10px de padding en todos los lados */
```

```css
 padding: 10px 20px;         /*  arriba y abajo, 10px de padding */
                             /* izquierda y derecha, 20px de padding */
```

```css
 padding: 10px 3% 20px;      /*  arriba, 10px de padding          */
                             /*  izquierda y derecha, 3% de padding */
                             /*  bottom, 20px padding       */
```

```css
 padding: 1em 3px 30px 5px;  /*  arriba    1em  padding  */
                             /*  derecha  3px  padding  */
                             /*  abajo 30px padding  */
                             /*  izquierda   5px  padding
                 /* en dirección de las agujas del reloj */
```

border:outset; padding:5% 1em;

## Ver ejemplo

### HTML

```html
<h4>¡Hola Mundo!</h4>
<h3>El padding es diferente en esta linea.</h3>
```

### CSS

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

| Especificación                                                                           | Estado                           | Comentario          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding') }}                 | {{ Spec2('CSS3 Box') }} | Sin cambio.         |
| {{ SpecName('CSS2.1', 'box.html#propdef-padding', 'padding-top') }} | {{ Spec2('CSS2.1') }}     | Sin cambio.         |
| {{ Specname('CSS1', '#padding', 'padding') }}                             | {{ Spec2('CSS1') }}         | Definición inicial. |

## Compatibilidad en navegadores

{{Compat("css.properties.padding")}}

## Ver también

- [CSS Box Model](/en/CSS/box_model "en/CSS/box model")
