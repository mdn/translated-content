---
title: Usando gradientes con CSS
slug: Web/CSS/CSS_Images/Using_CSS_gradients
translation_of: Web/CSS/CSS_Images/Using_CSS_gradients
original_slug: CSS/Using_CSS_gradients
---
[CSS3](/es/docs/CSS/CSS3) posee soporte para nuevos tipos de _gradientes_ en las propiedades CSS. Usarlos en un segundo plano, permite mostrar transiciones suaves entre dos o más colores especificados, evitando así el uso de imágenes para estos efectos, lo que reduce el tiempo de descarga y el uso de ancho de banda. Además, debido a que el gradiente es generado por el navegador, los objetos degradados se ven mejor cuando se hace un acercamiento, y el ajuste de diseño es mucho más flexible.

Los navegadores soportan dos tipos de gradientes: _lineal_, definido con la función _linear-gradient_, y _radial_, definido con _radial-gradient_.

## Gradientes lineales

Para crear un gradiente lineal, se establece un punto de partida y una dirección (indicada por un ángulo) a lo largo de la cual se aplica el efecto. Usted también puede definir **paradas de color**. las paradas de color son los colores que usted desea que Gecko renderise con suaves transiciones entre ellos, y usted puede específicar al menos dos de ellas, pero puede específicar más para crear efectos de gradientes más complejos.

### Gradientes lineales simples

Aquí está un gradiente lineal que inicia en el centro (horizontalmente) y arriba (verticalmente), e inicia en azul, transicionando a blanco.

| Captura de pantalla                                  | Demo en vivo |
| ---------------------------------------------------- | ------------ |
| ![](/@api/deki/files/3950/=basic_linear_bluetop.png) |              |

```css
/* La sintaxis vieja, obsoleta, pero todavía necesaria, con prefijo, para Opera y navegadores basados en WebKit-based */
background: -prefix-linear-gradient(top, blue, white);

/* La nueva sintaxis necesaria para navegadores apegados al estandar (IE 10 y Firefox 10 en adelante), sin prefijo */
background: linear-gradient(to bottom, blue, white);
```

### Cambiando el mismo gradiente para correr de izquierda a derecha:

| Captura de pantalla                                                            | Demo en vivo |
| ------------------------------------------------------------------------------ | ------------ |
| ![basic_linear_blueleft.png](/@api/deki/files/3951/=basic_linear_blueleft.png) |              |

```css
/* la vieja sintaxis, obsoleta, pero todavía necesaria, prefijada, para Opera y Navegadores basados en Webkit */
background: -prefix-linear-gradient(left, blue, white);

/* La nueva sintaxis necesaria para navegadores apegados al estandar (IE 10 y Firefox 10 en adelante), sin prefijo */
background: linear-gradient(to right, blue, white);
```

Usted puede hace el gradiente sea generado diagonalmente mediante la especificación de la posición de inicio vertical y horizontal. Por ejemplo:

| Captura de pantalla                                                                  | Demo en vivo |
| ------------------------------------------------------------------------------------ | ------------ |
| ![basic_linear_bluetopleft.png](/@api/deki/files/3952/=basic_linear_bluetopleft.png) |              |

```css
/* la vieja sintaxis, obsoleta, pero todavía necesaria, prefijada, para Opera y Navegadores basados en Webkit */
background: -prefix-linear-gradient(left top, blue, white);

/* La nueva sintaxis necesaria para navegadores apegados al estandar (IE 10 y Firefox 10 en adelante), sin prefijo */
background: linear-gradient(to bottom right, blue, white);
```

### Usando Angulos

Si usted no específica un ángulo, uno es determinado automáticamente basado en la dirección dada. Si usted desea más control sobre la dirección del gradiente, usted necesita establecer el ángulo específicamente.

Por ejemplo, aquí hay dos gradientes, el primero con una dirección hacia la derecha, y el segundo tiene un ángulo de 70 grados.

![linear_gradient_angle.png](/@api/deki/files/3953/=linear_gradient_angle.png)

El de la derecha usa un CSS Como este:

```css
background: linear-gradient(70deg, black, white);
```

El ángulo es especificado como un ángulo entre una línea vertical y la línea del gradiente, contando en el sentido horario. En otras palabras, `0deg crea un gradiente vertical desde el fondo hasta el tope, mientras 90deg genera un gradiente horizontal de izquierda a derecha:`

![linear_redangles.png](/files/3811/linear_red_angles.png)

```css
background: linear-gradient(<angle>, red, white);
```

> **Nota:** several browsers implement, prefixed, an older draft of the specification where `0deg` was pointing to the right rather than to the top. Pay attention in the value of the angle when mixing prefixed and standard linear-gradient, some may need to have `90deg` added to the `<angle>`.

### Color stops

Color stops are points along the gradient line that will have a specific color at that location. The location can be specified as either a percentage of the length of the line, or as an absolute length. You may specify as many color stops as you like in order to achieve the desired effect.

If you specify the location as a percentage, `0%` represents the starting point, while `100%` represents the ending point; however, you can use values outside that range if necessary to get the effect you want.

#### Example: Three color stops

This example specifies three color stops:

| Screen Shot                                                              | Live Demo |
| ------------------------------------------------------------------------ | --------- |
| ![linear_colorstops1.png](/@api/deki/files/3955/=linear_colorstops1.png) |           |

```css
/* The old syntax, deprecated, but still needed, prefixed, for Opera and WebKit-based browsers */
background: -prefix-linear-gradient(top, blue, white 80%, orange);

/* The new syntax needed by standard-compliant browsers (IE 10 and Firefox 10 onwards), without prefix */
background: linear-gradient(to bottom, blue, white 80%, orange);
```

Note that the first and last color stops don't specify a location; because of that, values of 0% and 100% are assigned automatically. The middle color stop specifies a location of 80%, putting it most of the way toward the bottom.

#### Example: Evenly spaced color stops

Here's an example using a wide variety of colors, all evenly spaced:

| Screen Shot                                                      | Live Demo |
| ---------------------------------------------------------------- | --------- |
| ![linear_rainbow.png](/@api/deki/files/3956/=linear_rainbow.png) |           |

```css
/* The old syntax, deprecated, but still needed, prefixed, for Opera and WebKit-based browsers */
background: -prefix-linear-gradient(left, red, orange, yellow, green, blue);

/* The new syntax needed by standard-compliant browsers (IE 10 and Firefox 10 onwards), without prefix */
background: linear-gradient(to right, red, orange, yellow, green, blue);
```

Notice that the color stops are automatically spaced evenly when no locations are specified.

### Transparency and gradients

Gradients support transparency. You can use this, for example, when stacking multiple backgrounds, to create fading effects on background images. For example:

![linear_multibg_transparent.png](/@api/deki/files/3957/=linear_multibg_transparent.png)

```css
/* The old syntax, deprecated, but still needed, prefixed, for Opera and WebKit-based browsers */
background: linear-gradient(left, rgba(255,255,255,0), rgba(255,255,255,1)), url(http://foo.com/image.jpg);

/* The new syntax needed by standard-compliant browsers (IE 10 and Firefox 10 onwards), without prefix */
background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1)), url(http://foo.com/image.jpg);
```

The backgrounds are stacked with the first specified background on top, and each successive background farther away. By stacking backgrounds this way, you can create very creative effects as seen above.

## Radial gradients

Radial gradients are specified using the {{ cssxref("radial-gradient") }} functional notation. The syntax is similar to that for linear gradients, except you can specify the gradient's ending shape (whether it should be a circle or ellipse) as well as its size. By default, the ending shape is an ellipse with the same proportions than the container's box.

### Color stops

You specify color stops the same way as for linear gradients. The gradient line extends out from the starting position in all directions.

#### Example: Evenly spaced color stops

By default, as with linear gradients, the color stops are evenly spaced:

| Screen Shot                                                                  | Live Demo |
| ---------------------------------------------------------------------------- | --------- |
| ![radial_gradient_even.png](/@api/deki/files/3958/=radial_gradient_even.png) |           |

```css
background: radial-gradient(red, yellow, rgb(30, 144, 255));
```

#### Example: Explicitly spaced color stops

Here we specify specific locations for the color stops:

| Screen Shot                                                                      | Live Demo |
| -------------------------------------------------------------------------------- | --------- |
| ![radial_gradient_varied.png](/@api/deki/files/3959/=radial_gradient_varied.png) |           |

```css
background: radial-gradient(red 5%, yellow 25%, #1E90FF 50%);
```

### Size

This is one of the areas in which radial gradients differ from linear gradients. You can provide a size value that specifies the point that defines the size of the circle or ellipse. See [this description of the size constants](/es/docs/CSS/radial-gradient#Size_constants) for specifics.

#### Example: closest-side for ellipses

This ellipse uses the `closest-side` size value, which means the size is set by the distance from the starting point (the center) to the closest side of the enclosing box.

| Screen Shot                                                                  | Live Demo |
| ---------------------------------------------------------------------------- | --------- |
| ![radial_ellipse_size1.png](/@api/deki/files/3960/=radial_ellipse_size1.png) |           |

```css
background: radial-gradient(ellipse closest-side, red, yellow 10%, #1E90FF 50%, white);
```

#### Example: farthest-corner for ellipses

This example is similar to the previous one, except that its size is specified as `farthest-corner`, which sets the size of the gradient by the distance from the starting point to the farthest corner of the enclosing box from the starting point.

| Screen Shot                                                                  | Live Demo |
| ---------------------------------------------------------------------------- | --------- |
| ![radial_ellipse_size2.png](/@api/deki/files/3961/=radial_ellipse_size2.png) |           |

```css
background: radial-gradient(ellipse farthest-corner, red, yellow 10%, #1E90FF 50%, white);
```

#### Example: closest-side for circles

This example uses `closest-side`, which determines the circle's size as the distance between the start point (the center) and the closest side.

| Screen Shot                                                                | Live Demo |
| -------------------------------------------------------------------------- | --------- |
| ![radial_circle_size1.png](/@api/deki/files/3962/=radial_circle_size1.png) |           |

```css
background: radial-gradient(circle closest-side, red, yellow 10%, #1E90FF 50%, white);
```

Here, the circle's radius is half the height of the box, since the top and bottom edges are equidistant from the start point and are closer than the left and right edges.

## Repeating gradients

The {{ cssxref("linear-gradient") }} and {{ cssxref("radial-gradient") }} properties don't support automatically repeating the color stops. However, the {{ cssxref("repeating-linear-gradient") }} and {{ cssxref("repeating-radial-gradient") }} properties are available to offer this functionality.

### Examples: Repeating linear gradient

This example uses {{ cssxref("repeating-linear-gradient") }} to create a gradient:

| Screen Shot                                                                            | Live Demo |
| -------------------------------------------------------------------------------------- | --------- |
| ![repeating_linear_gradient.png](/@api/deki/files/3964/=repeating_linear_gradient.png) |           |

```css
background: repeating-linear-gradient(-45deg, red, red 5px, white 5px, white 10px);
```

Another example using the {{ cssxref("repeating-linear-gradient") }} property.

[![repeat_background_gradient_checked.png](/@api/deki/files/6192/=repeat_background_gradient_checked.png?size=thumb)](/@api/deki/files/6192/=repeat_background_gradient_checked.png)

```css
background-color: #000;
background-image: repeating-linear-gradient(90deg, transparent, transparent 50px,
      rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px, transparent 56px, transparent 63px,
      rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px, transparent 69px, transparent 116px,
      rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px, transparent 56px, transparent 63px, rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px, transparent 69px, transparent 116px, rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px),
repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px),
repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px);
```

### Example: Repeating radial gradient

This example uses {{ cssxref("repeating-radial-gradient") }} to create a gradient:

| Screen Shot                                                                            | Live Demo |
| -------------------------------------------------------------------------------------- | --------- |
| ![repeating_radial_gradient.png](/@api/deki/files/3965/=repeating_radial_gradient.png) |           |

```css
background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
```

## See also

- Gradient-related reference articles: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}.
