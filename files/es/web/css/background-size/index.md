---
title: background-size
slug: Web/CSS/background-size
---

{{ CSSRef() }}

## Resumen

La propiedad CSS **`background-size`** especifica el tamaño de las imágenes de fondo.

> **Nota:** Si el valor de esta propiedad no se encuentra en una propiedad abreviada {{ cssxref("background") }} esta es aplicada para los elementos después de la propiedad CSS `background-size`, el valor de esta propiedad se restablece a su valor inicial de la propiedad abreviada.

{{cssinfo}}

## Sintaxis

```
background-size:  background-size[ background-size]*
```

donde **:**

- _**background-size**_

  - : Es una de las palabras claves:

    - **`contain`**
      Escala la imagen al mayor tamaño posible sin recortarla ni estirarla.
    - **`cover`**
      Escala la imagen al mayor tamaño posible sin estirarla. Si las proporciones de la imagen difieren de las del elemento, es recortada vertical u horizontalmente para que no quede un espacio vacío.

    O bien, uno o dos de los siguientes valores, que denota el tamaño horizontal y el tamaño vertical respectivamente (si sólo es especificado uno, el valor predeterminado para el segundo es auto):

    - Un valor {{cssxref("&lt;percentage&gt;")}} que escala la imagen de fondo en la dimensión correspondiente al porcentaje especificado del área de posicionamiento de fondo, que viene el valor determinado {{ cssxref("background-origin") }}. El área de posicionamiento del fondo es, por defecto, el área que contiene el contenido de la caja y su relleno, el área también se puede cambiar a simplemente el contenido o el área que contiene bordes, el relleno y contenido. Si el fondo de {{cssxref("background-attachment", "attachment")}} es fija, el área de posicionamiento del fondo es más bien toda el área de la ventana del navegador, sin incluir el área cubierta por las barras de desplazamiento si están presentes. Porcentajes negativos no son permitidos.
    - Un valor {{cssxref("&lt;length&gt;")}} que escala la imagen de fondo a la longitud especificada en la dimensión correspondiente. Longitudes negativas no están permitidos.
    - La palabra clave auto que escala el fondo de la imagen en la dirección correspondiente de modo que su proporción escencial se mantiene.

La interpretación de los valores posibles depende de las dimensiones propias de la imagen (ancho y alto) y proporción propia (relación entre la anchura y altura). Una imagen de mapa de bits siempre tiene dimensiones propias y una proporción propia. Una imagen del vector puede tener ambas dimensiones propias (y por lo tanto debe tener una proporción propia). También puede tener una o ningúna dimensiones propias, y en cualquier caso se podría o no tener una proporción propia. Los gradientes son tratados como imágenes sin dimensiones propias o proporción propia.

Este comportamiento ha cambiado en Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5). Antes de esto, los gradientes se tratan como imágenes sin dimensiones propias, con una proporción propia idéntica al área de posicionamiento de fondo.

Las imágenes de fondo generados a partir de elementos con {{ cssxref("-moz-element") }} (que en realidad coincide con un elemento) se tratan actualmente como las imágenes con las dimensiones del elemento, o de la zona de posicionamiento de fondo si el elemento es SVG, con la proporción propia correspondiente.

> **Nota:** El comportamiento de los `<degradados>` cambió en Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5). Anteriormente se trataban como imágenes sin dimensiones intrínsecas, pero con proporciones intrínsecas idénticas a las del área de posicionamiento del fondo.

El tamaño representado de la imagen de fondo se calcula como sigue:

- Si ambos componentes de `background-size` se especifican y no son auto:
  - : La imagen de fondo representa al tamaño especificado.
- si el `background-size` es `contain` o `cover`:
  - : La imagen es renderizada, preservando su proporción propia, en el tamaño mayor contenido dentro de, o cubriendo, el área de posicionamiento de fondo. Si la imagen no tiene una proporción propia, entonces se representa al tamaño de la zona de posicionamiento de fondo.
- Si el `background-size` es `auto` o `auto auto`:
  - : Si la imagen tiene dos dimensiones propias, se representa en ese tamaño. Si no tiene dimensiones propias y no proporción propia, se representa en el tamaño del área de posicionamiento de fondo. Si no tiene dimensiones, pero tiene una proporción, se representa como si se hubiera especificado contener en su lugar. Si la imagen tiene una dimensión propia y una proporción, ha rendido en el tamaño determinado por esa única dimensión y la proporción. Si la imagen tiene una dimensión propia pero proporción no, se representa utilizando la dimensión propia y la dimensión correspondiente del área de posicionamiento de fondo.
- Si el background-size tiene un `auto` componente y un non-`auto` componente:
  - : Si la imagen tiene una proporción propia, entonces hacen uso de la dimensión especificada, y calcula la otra dimensión de la dimensión especificada y la proporción propia. Si la imagen no tiene una parte propia, utilice la dimensión especificada para esa dimensión. Por la otra dimensión, utilice la imagen de dimensión propia correspondiente, si es que existe. Si no hay ninguna dimensión propia tal, el uso de la dimensión correspondiente del área de posicionamiento de fondo.

Tenga en cuenta que los antecedentes de tamaño de imágenes vectoriales que carecen de dimensiones propias o la proporción no se ha aplicado plenamente en todos los navegadores. Tenga cuidado con confiar en el comportamiento descrito anteriormente, y la prueba en varios navegadores (incluyendo específicamente las versiones de Firefox 7 o anterior y Firefox 8 o superior) para asegurarse de versiones diferentes son aceptables.

## Ejemplos

Esta demostración de backround-size: cover y esta demostración de background-size: contain están destinados a ser abiertos en nuevas ventanas para que pueda ver cómo contain y cover comportarse cuando las dimensiones del área de posicionamiento de fondo variar. Esta serie de demostraciones de cómo funciona el background-size e interactúa con otras propiedades de background-\* debe casi cubrir el suelo restante en el uso de background-size solo y en combinación con otras propiedades.

## Notas

Si especifíca un degradado como fondo y tiene especificado un background-size para ir con ella, es mejor no especificar un tamaño que utilice un solo componente auto, o es especificado usando solo un valor de anchura (por ejemplo, background-size: 50%). Renderizado de gradientes en tales casos cambiaron en Firefox 8, y en la actualidad es generalmente inconsistente en todos los navegadores, que no todo implementa el renderizadando en total conformidad con la especificación CSS3 background-size y con la especificación de valores de imagen CSS3 gradiente.

```css
.bar {
  width: 50px;
  height: 100px;
  background-image: gradient(...);

  /* NO RECOMENDADO */
  background-size: 25px;
  background-size: 50%;
  background-size: auto 50px;
  background-size: auto 50%;

  /* OKAY */
  background-size: 25px 50px;
  background-size: 50% 50%;
}
```

Tenga en cuenta que particularmente no es recomendado usar una dimensión de píxeles y una dimensión auto con degradado, porque es imposible replicar el renderizado en las versiones de Firefox anteriores a 8, y en los navegadores que no implementaron el renderizado de Firefox 8, sin saber el tamaño exacto del elemento cuyo fondo se ha especificado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [CSS Reference](/es/docs/CSS/CSS_Reference)
- [Multiple backgrounds](/es/docs/CSS/Multiple_backgrounds)
- [Scaling background images](/es/docs/CSS/Scaling_background_images)
