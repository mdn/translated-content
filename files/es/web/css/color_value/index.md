---
title: <color>
slug: Web/CSS/color_value
---

{{CSSRef}}

## Resumen

El tipo de datos [CSS](/es/docs/Web/CSS) **`<color>`** denota un color en el [sRGB color space](http://en.wikipedia.org/wiki/SRGB). Un color puede ser descrito de cualquiera de las siguiente maneras:

- Usando una _palabra clave_.
- Usando el sistema [RGB cubic-coordinate](http://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) (usando #-hexadecimal o las notaciones funcionales `rgb()` y `rgba()` )
- Usando el sistema [HSL cylindrical-coordinate](http://en.wikipedia.org/wiki/HSL_and_HSV) (usando las notaciones funcionales `hsl()` y `hsla()`)

Hay que destacar que la lista de valores de color aceptados ha ido creciendo conforme la especificación evolucionaba, para acabar con la lista de colores de CSS3.

Asociado con el color en el espacio sRGB, un valor `<color>` también consiste en una coordenada [alpha-channel](http://en.wikipedia.org/wiki/Alpha_compositing) o valor de transparencia, indicando cómo se debe [composite](http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) o mezclar el color con su color de fondo.

Aunque los valores de colores en CSS son definidos de manera precisa existe la posibilidad de que parezcan distintos en dispositivos diferentes. La mayoría de ellos no están calibrados y algunos navegadores no soportan los [color profile](http://en.wikipedia.org/wiki/ICC_profile) de algunos dispositivos de salidas. En esta situación el color puede variar bastante.

> **Nota:** La recomendación [WCAG 2.0](http://www.w3.org/TR/WCAG/#visual-audio-contrast) de la W3C aconseja a los autores web de manera clara que no usen _color_ como el único medido para especificar una información, acción o resultado concreto. Algunos usuarios tienen problemas para diferenciar colores y existe la posibilidad de que la información transmitida no sea captada. Por supuesto esto no impide que se use el color, sólo su uso como único medio para describir alguna información.

## Interpolación

Los valores del tipo de datos CSS `<color>` pueden ser interpolados para lograr animaciones o para crear valores `<gradient>`. En este caso son interpolados en cada uno de sus componentes rojo, verde y azul, conteniendo, cada uno de ellos, un número decimal con coma flotante. Debe tenerse en cuenta que la interpolación del color sucede en el [alpha-premultiplied sRGBA color space](http://www.gimp.org/docs/plug-in/appendix-alpha.html) para evitar que aparezcan grises inesperados. En las animaciones, la velocidad de la interpolación viene determinada por la [timing function](/es/docs/Web/CSS/timing-function) asociada con la animación.

## Valores

Hay varias formas de describir un valor `<color>`.

### Palabras clave de colores

Las palabras clave de colores son identificadores en los que no hay distinción entre mayúsculas y minúsculas y que sirven para representar un color concreto, por ejemplo `red, blue, brown, lightseagreen`. El nombre describe el color aunque es mayormente artificial. La lista de valores válidos cambia un montón de una especificación a otra:

- CSS Nivel 1 sólo acepta 16 colores básicos, los llamados _colores_ _VGA_ ya que son tomados de los colores que son capaces de mostrar las trajetas gráficas [VGA](http://en.wikipedia.org/wiki/VGA).
- CSS Nivel 2 añadió la palabra clave `orange`.
- Desde el principio los navegadores aceptarons otros colores, sobre todo la lista de colores X11 con unas pocas diferencias. ya que, los primeros navegadores, eran en su mayoría aplicaciones X11. SVG 1.0 fué el primer estándar que definió formalmente estas palabras clave. Con frecuencia nos referimos a ello como la lista extendida de colores , los colores X11 o los colores SVG.

Hay algunas advertencias a tener en cuenta al usar las palabras clave relativas a colores:

- A excepción de los 16 colores básicos, que son comunes en HTML, los otros no pueden ser usados en HTML. HTML convertirá estos valores desconocidos usando un algoritmo específico y se obtendrá colores totalmente diferentes. Estas palabras clave deberían sólo usarse en SGV y CSS.
- Colores desconocidos hacen que la propiedad CSS sea declarada inválida. Las propiedades inválidas son ignoradas y , por tanto, el color no tendrá efecto. Esto es un comportamiento diferente al del HTML
- Ninguna palabra clave de color tiene transparencia en CSS, son colores planos y sólidos.
- Algunas referencian el mismo color:

  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- Aunque las palabras clave de colores han sido tomadas de los nombres de colores usuales en X11, el color puede ser ligeramente diferente al color en X11 ya que son adaptados por el fabricante para un hardware específico.

<table>
  <thead>
    <tr>
      <th scope="col">Especificación</th>
      <th scope="col">Color</th>
      <th scope="col">Palabra clave</th>
      <th scope="col">Valor RGB hexadecimal</th>
      <th scope="col">Muestra</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16"><a href="https://www.w3.org/TR/CSS1/">CSS Level 1</a></td>
      <td style="background: #000"></td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="background: #c0c0c0"></td>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="background: #fff"></td>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="background: #800000"></td>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="background: #f00"></td>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="background: #800080"></td>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="background: #f0f"></td>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="background: #008000"></td>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="background: #0f0"></td>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="background: #808000"></td>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="background: #ff0"></td>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="background: #000080"></td>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="background: #00f"></td>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="background: #008080"></td>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/CSS2/">CSS Level 2 (Revision 1)</a></td>
      <td style="background: #ffa500"></td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="128"><a href="https://drafts.csswg.org/css-color-3/">CSS Color Module Level 3</a></td>
      <td style="background: #f0f8ff"></td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="background: #faebd7"></td>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="background: #7fffd4"></td>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="background: #f0ffff"></td>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="background: #f5f5dc"></td>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="background: #ffe4c4"></td>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="background: #ffebcd"></td>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="background: #8a2be2"></td>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="background: #a52a2a"></td>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="background: #deb887"></td>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="background: #5f9ea0"></td>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="background: #7fff00"></td>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="background: #d2691e"></td>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="background: #ff7f50"></td>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="background: #6495ed"></td>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="background: #fff8dc"></td>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="background: #dc143c"></td>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="background: #00008b"></td>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="background: #008b8b"></td>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="background: #b8860b"></td>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="background: #006400"></td>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="background: #bdb76b"></td>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="background: #8b008b"></td>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="background: #556b2f"></td>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="background: #ff8c00"></td>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="background: #9932cc"></td>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="background: #8b0000"></td>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="background: #e9967a"></td>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="background: #8fbc8f"></td>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="background: #483d8b"></td>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="background: #00ced1"></td>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="background: #9400d3"></td>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="background: #ff1493"></td>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="background: #00bfff"></td>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="background: #1e90ff"></td>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="background: #b22222"></td>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="background: #fffaf0"></td>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="background: #228b22"></td>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="background: #dcdcdc"></td>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="background: #f8f8ff"></td>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="background: #ffd700"></td>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="background: #daa520"></td>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="background: #adff2f"></td>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="background: #f0fff0"></td>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="background: #ff69b4"></td>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="background: #cd5c5c"></td>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="background: #4b0082"></td>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="background: #fffff0"></td>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="background: #f0e68c"></td>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="background: #e6e6fa"></td>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="background: #fff0f5"></td>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="background: #7cfc00"></td>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="background: #fffacd"></td>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="background: #add8e6"></td>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="background: #f08080"></td>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="background: #e0ffff"></td>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="background: #fafad2"></td>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="background: #90ee90"></td>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="background: #ffb6c1"></td>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="background: #ffa07a"></td>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="background: #20b2aa"></td>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="background: #87cefa"></td>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="background: #b0c4de"></td>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="background: #ffffe0"></td>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="background: #32cd32"></td>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="background: #faf0e6"></td>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="background: #66cdaa"></td>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="background: #0000cd"></td>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="background: #ba55d3"></td>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="background: #9370db"></td>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="background: #3cb371"></td>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="background: #7b68ee"></td>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="background: #00fa9a"></td>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="background: #48d1cc"></td>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="background: #c71585"></td>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="background: #191970"></td>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="background: #f5fffa"></td>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="background: #ffe4e1"></td>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="background: #ffe4b5"></td>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="background: #ffdead"></td>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="background: #fdf5e6"></td>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="background: #6b8e23"></td>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="background: #ff4500"></td>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="background: #da70d6"></td>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="background: #eee8aa"></td>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #98fb98"></td>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="background: #afeeee"></td>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="background: #db7093"></td>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="background: #ffefd5"></td>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="background: #ffdab9"></td>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="background: #cd853f"></td>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="background: #ffc0cb"></td>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="background: #dda0dd"></td>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="background: #b0e0e6"></td>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="background: #bc8f8f"></td>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="background: #4169e1"></td>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="background: #8b4513"></td>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="background: #fa8072"></td>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="background: #f4a460"></td>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="background: #2e8b57"></td>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="background: #fff5ee"></td>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="background: #a0522d"></td>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="background: #87ceeb"></td>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="background: #6a5acd"></td>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="background: #fffafa"></td>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="background: #00ff7f"></td>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="background: #4682b4"></td>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="background: #d2b48c"></td>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="background: #d8bfd8"></td>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="background: #ff6347"></td>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="background: #40e0d0"></td>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="background: #ee82ee"></td>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="background: #f5deb3"></td>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="background: #f5f5f5"></td>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="background: #9acd32"></td>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td><a href="https://drafts.csswg.org/css-color/">CSS Color Module Level 4</a></td>
      <td style="background: #639"></td>
      <td style="text-align: center"><code>rebeccapurple</code></td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

El color `rebeccapurple` es equivalente al color `#639`, y se puede encontrar información adicional sobre por qué fue introducidoa en el blog Codepen blog en un post realizado por Trezy "[Honoring a Great Man](http://codepen.io/trezy/blog/honoring-a-great-man)."

### `Palabra clave transparent`

La palaba `transparent` representa un color totalmente transparente, es decir, el color que veremos será el colore de fondo. Técnicamente es un color negro con un valor mínimo en el canal alfa y la manera de representarlo es `rgba(0,0,0,0)`.

> **Nota:**
> La palabra clave `transparent` no fue un color en CSS hasta CSS Nivel 2 (Revisión 1). Podía ser usada en lugar de un valor \<color> regular en dos propiedades CSS: {{Cssxref("background")}} y {{Cssxref("border")}}. En esencia fue añadida para permitir sobreescribir valores sólidos heredados.
>
> Con el soporte de la opacidad que nos proporcionan los [alpha channels](http://en.wikipedia.org/wiki/Alpha_compositing), `transparent` fue redefinido como un color verdadero más en CSS Nivel 3 permitiendo su use en cualquier sitio donde de requiera un valor `<color>` , como la propiedad {{Cssxref("color")}}.

### `Palabra clave currentColor`

La palabra clave `currentColor` representa el valor calculado para la la propiedad del elemento {{Cssxref("color")}} . Permite hacer que las propiedades de color sean heredadas por los elementos hijo, que no lo hacen por defecto.

También puede ser usada en propiedades que heredan el valor calculado de la propiedad del elemento {{Cssxref("color")}}, en este caso, será equivalente a la plabara clave `inherit` en estos elementos, si es que la hubiera.

#### Ejemplo

El color de la una line (un div relleno de color) se adapta al color de su propiedad {Cssxref("color")}} , heredada de su padre.

##### Live example 1

```html
<div style="color:darkred">
  EL color de este texto es el mismo que el de la línea
  <div style="background:currentcolor; height:1px"></div>
  Algo más de texto
</div>
```

{{EmbedLiveSample('Live_example_1')}}

##### Live example 2

```html
<div style="color:blue; border-bottom: 1px dashed currentcolor;">
  El color de este texto es el mimso que el color de la línea:
  <div style="background:currentcolor; height:1px"></div>
  Algo más de texto.
</div>
```

{{EmbedLiveSample('Live_example_2')}}

### `rgb()`

Los colores puede ser definidos usando el modelo RGB (rojo-verde-azul) de dos maneras:ways:

- Notación Hexadecimal `#RRGGBB` ay `#RGB`

  - : &#x20;

    - "`#`", seguido de seis caracteres hexadecimales (0-9, A-F).
    - "`#`", seguido de tres caracteres hexadecimales (0-9, A-F).

    La notación de tres dígitos (`#RGB`) y la de seis (`#RRGGBB`) son iguales.
    Por ejemplo, `#f03` y `#ff0033` representan el mismo color.

- Notación funcional `rgb(R,G,B)`
  - : "`rgb`", seguido por tres valores {{cssxref("&lt;integer&gt;")}} o tres {{cssxref("&lt;percentage&gt;")}} values.
    El número entero 255 representa el 100%, y F o FF en notación hexadecimal.

```
/* Todos estos ejemplos son el mismo color RGB: */

 #f03
 #F03
 #ff0033
 #FF0033
 rgb(255,0,51)
 rgb(255, 0, 51)
 rgb(255, 0, 51.2) /* ¡ERROR! No uses número decimales , usa enteros*/
 rgb(100%,0%,20%)
 rgb(100%, 0%, 20%)
 rgb(100%, 0, 20%) /* ¡ERROR! No mezcles notaciones de enteros y de porcentajes*/
```

### `hsl()`

Los colores también puede ser definidos usando el modelo tono (hue) - saturación (saturation) - brillo (lightness) (HSL) con la notación funcional hsl(). La ventaja del modelo HSL sobre el modelo RGB es que es mucho más intuitivo: puedes adivinar los colores que tú quieres y luego modificarlos. Es también más fácil crear conjuntos de colores (manteniendo el tono (hue) igual y modificando el brillo y la saturación.

**El tono (Hue)** se representa como un ángulo del círculo de color (por así decir, el arco iris representado en un círculo). El ángulo se proporciona como un {{cssxref("&lt;number&gt;")}} sin unidades. Por definición **rojo=0=360**, y los demas colores están dispersos por el círculo, **verde=120**, **azul=240**, etc. Al ser un ánguilo implítamente -120=240 y 480=120.

La saturación y el brillo son representados por porcentajes.
`100%` es **saturacion** completa, y `0%` es una sombra de gris..
`100%` **brillo** es blanco, `0%` negro, y `50%` es brillo "normal".

```css
hsl(0,  100%,50%)    /* red */
hsl(30, 100%,50%)
hsl(60, 100%,50%)
hsl(90, 100%,50%)
hsl(120,100%,50%)    /* green */
hsl(150,100%,50%)
hsl(180,100%,50%)
hsl(210,100%,50%)
hsl(240,100%,50%)    /* blue */
hsl(270,100%,50%)
hsl(300,100%,50%)
hsl(330,100%,50%)
hsl(360,100%,50%)    /* red */

hsl(120,100%,25%)    /* dark green */
hsl(120,100%,50%)    /* green */
hsl(120,100%,75%)    /* light green */

hsl(120,100%,50%)    /* green */
hsl(120, 67%,50%)
hsl(120, 33%,50%)
hsl(120,  0%,50%)

hsl(120, 60%,70%)    /* pastel green */
```

### `rgba()`

Podemos definir los colores con el modelo Rojo (red) - Verde (green) - Azul (blue) - alpha (RGBa) usando la notación funcional `rgba()`. RGBa amplia el modelo RGA añadiendo un canal alfa, permitiendo de esta manera especificar la opacidad de un color.
**a** representa opacidad: 0=transparente; 1=opaco;

```css
rgba(255,0,0,0.1)    /* 10% opaque red */
rgba(255,0,0,0.4)    /* 40% opaque red */
rgba(255,0,0,0.7)    /* 70% opaque red */
rgba(255,0,0,  1)    /* full opaque red */
```

### `hsla()`

Podemos definir los colores usando el modelo saturación tono (hue) - (saturation) - brillo (lightness) (HSLa) usando lla notación funcional `hsla()`. HSLa amplía el modelo HSL incluyendo el canal alfa, permitiendo de esta manera especificar la opacidad de un color.
**a** es la opacidad: 0=transparente; 1=opaco;

```css
hsla(240,100%,50%,0.05)   /* 5% opaque blue */
hsla(240,100%,50%, 0.4)   /* 40% opaque blue */
hsla(240,100%,50%, 0.7)   /* 70% opaque blue */
hsla(240,100%,50%,   1)   /* full opaque blue */
```

### Colores de Sistema

No todos los colores de sistema son soportados por todos los sistemas. {{deprecated_inline}} para usar en páginas web públicas..

- ActiveBorder
  - : Borde de la ventana activa
- ActiveCaption
  - : Título de la ventana activa. Deb usarse con `CaptionText` como color de fondo
- AppWorkspace
  - : Color de fondo para el interfaz de múltiples documentos.
- Background
  - : Fondo de escritorio.
- ButtonFace
  - : Color de fondo frontal para elementos 3-D que parecen 3-D debido a una capa del borde próximo. Debe usar con el color de frente `ButtonText` .
- ButtonHighlight
  - : The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- ButtonShadow
  - : The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- ButtonText
  - : Text on push buttons. Should be used with the `ButtonFace` or `ThreeDFace` background color.
- CaptionText
  - : Text in caption, size box, and scrollbar arrow box. Should be used with the `ActiveCaption` background color.
- GrayText
  - : Gris para el texto deshabilitado:
- Highlight
  - : Elemento(s) seleccionados en un control. Debe ser usado con el color de frente `HighlightText.`
- HighlightText
  - : Texto de los elemento(s) seleccionados en un control. Debe usar con el color de fondo `Highlight`.
- InactiveBorder
  - : Borde de ventana inactivo.
- InactiveCaption
  - : Inactive window caption. Should be used with the `InactiveCaptionText` foreground color.
- InactiveCaptionText
  - : Color of text in an inactive caption. Should be used with the `InactiveCaption` background color.
- InfoBackground
  - : Color de foBackground color for tooltip controls. Should be used with the `InfoText` foreground color.
- InfoText
  - : Text color for tooltip controls. Should be used with the `InfoBackground` background color.
- Menu
  - : Fondo del menú. Debe ser usado Menu background. Should be used with the `MenuText` or `-moz-MenuBarText` foreground color.
- MenuText
  - : Texto en el menú. Debe ser usado Text in menus. Should be used with the `Menu` background color.
- Scrollbar
  - : Color de fondo para las barras de scroll.
- ThreeDDarkShadow
  - : The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDFace
  - : The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the `ButtonText` foreground color.
- ThreeDHighlight
  - : The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two
    concentric layers of surrounding border.
- ThreeDLightShadow
  - : The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two
    concentric layers of surrounding border.
- ThreeDShadow
  - : The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- Window
  - : Fondo de las ventanas. Debe usarse con el color de frente `WindowText`.
- WindowFrame
  - : Marco de ventana
- WindowText
  - : Texto en las ventanas.Debe usarse con el color de fono de ventana.

### Extensiones de Mozilla al Sistema de Colores

- \-moz-ButtonDefault
  - : The border color that goes around buttons that represent the default action for a dialog box.
- \-moz-ButtonHoverFace
  - : The background color of a button that the mouse pointer is over (which would be `ThreeDFace` or `ButtonFace` when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverText` foreground color.
- \-moz-ButtonHoverText
  - : The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverFace background` color.
- \-moz-CellHighlight
  - : Background color for selected item in a tree widget. Should be used with the `-moz-CellHighlightText` foreground color. See also `-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : Text color for a selected item in a tree. Should be used with the `-moz-CellHighlight background` color. See also `-moz-html-CellHighlightText`.
- \-moz-Combobox
  - : Background color for combo-boxes. Should be used with the `-moz-ComboboxText` foreground color. In versions prior to 1.9.2, use `-moz-Field` instead.
- \-moz-ComboboxText
  - : Text color for combo-boxes. Should be used with the `-moz-Combobox` background color. In versions prior to 1.9.2, use `-moz-FieldText` instead.
- \-moz-Dialog
  - : Color de fondo para cuadros de diálogo. Debe usarse con el color de frente `-moz-DialogText`
- \-moz-DialogText
  - : Text color for dialog boxes. Should be used with the `-moz-Dialog` background color.
- \-moz-dragtargetzone

  \-moz-EvenTreeRow

  - : Background color for even-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-OddTreeRow`.

- \-moz-Field
  - : Text field background color. Should be used with the `-moz-FieldText` foreground color.
- \-moz-FieldText
  - : Text field text color. Should be used with the `-moz-Field`, `-moz-EvenTreeRow`, or `-moz-OddTreeRow` background color.
- \-moz-html-CellHighlight
  - : Background color for highlighted item in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlightText` foreground color. Prior to Gecko 1.9, use `-moz-CellHighlight`.
- \-moz-html-CellHighlightText
  - : Text color for highlighted items in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlight` background color. Prior to Gecko 1.9, use `-moz-CellHighlightText`.
- \-moz-mac-accentdarkestshadow

  \-moz-mac-accentdarkshadow

  \-moz-mac-accentface

  \-moz-mac-accentlightesthighlight

  \-moz-mac-accentlightshadow

  \-moz-mac-accentregularhighlight

  \-moz-mac-accentregularshadow

  \-moz-mac-chrome-active

  \-moz-mac-chrome-inactive

  \-moz-mac-focusring

  \-moz-mac-menuselect

  \-moz-mac-menushadow

  \-moz-mac-menutextselect

  \-moz-MenuHover

  - : Background color for hovered menu items. Often similar to `Highlight`. Should be used with the `-moz-MenuHoverText` or `-moz-MenuBarHoverText` foreground color.

- \-moz-MenuHoverText
  - : Text color for hovered menu items. Often similar to `HighlightText`. Should be used with the `-moz-MenuHover` background color.
- \-moz-MenuBarText
  - : Text color in menu bars. Often similar to `MenuText`. Should be used on top of `Menu` background.
- \-moz-MenuBarHoverText
  - : Color for hovered text in menu bars. Often similar to `-moz-MenuHoverText`. Should be used on top of `-moz-MenuHover` background.
- \-moz-nativehyperlinktext
  - : Default platform hyperlink color.
- \-moz-OddTreeRow
  - : Background color for odd-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-EvenTreeRow`.
- \-moz-win-communicationstext
  - : Should be used for text in objects with `{{cssxref("-moz-appearance")}}: -moz-win-communications-toolbox;`.
- \-moz-win-mediatext
  - : Should be used for text in objects with `{{cssxref("-moz-appearance")}}: -moz-win-media-toolbox`.

### Extensiones de Mozilla a las Preferencias de Color

- \-moz-activehyperlinktext
  - : Preferencias de usuario para el color de texto de los enlaces activos. Debe ser usado con el color de fondo por defecto del documento.
- \-moz-default-background-color
  - : Preferencias de usuario para el color de fondo del documento.
- \-moz-default-color
  - : Preferencias de usuario para el color del texto.
- \-moz-hyperlinktext
  - : Preferencias de usuario para el color del texto de los enlaces sin visitar. Debe ser usado con el color de fondo por defecto del documento.
- \-moz-visitedhyperlinktext
  - : Preferencias de usuario para el color del texto de los enlaces ya visitados. Debe ser usado con el color de fondo por defecto del documento.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- La propiedad {{Cssxref("opacity")}} , que permite definir la transparencia a nivel de elemento.
- Las propiedades {{Cssxref("color")}}, {{Cssxref("background-color")}}, {{Cssxref("border-color")}}, {{Cssxref("outline-color")}}, {{Cssxref("text-shadow")}}, {{Cssxref("box-shadow")}}.
