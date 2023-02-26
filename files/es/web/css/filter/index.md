---
title: filter
slug: Web/CSS/filter
---

{{SeeCompatTable}}{{CSSRef}}

## Resumen

La propiedad CSS **`filter`** dota de efectos gráficos como el desenfoque o cambio de color en la representación antes de que se muestre el elemento. Los filtros se utilizan comúnmente para ajustar la representación de imágenes, fondos o bordes.

Hay varias funciones Incluidas en el estándar CSS que logran efectos predefinidos. También puede hacer referencia a un filtro especificado en SVG con una URL a un [filtro de un elemento SVG](/es/docs/Web/SVG/Element/filter).

> **Nota:** Versiones anteriores (4.0 hasta 9.0) del navegador Internet Explorer de Windows admiten una propiedad ["filter"](<https://msdn.microsoft.com/es-es/library/ms532853(v=vs.85).aspx>) no incluida en el estándar que ha quedado en desuso.

{{cssinfo}}

## Sintaxis

```css
filter: url("filters.svg#filter-id");
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Apply multiple filters */
filter: contrast(175%) brightness(3%);

/* Global values */
filter: inherit;
filter: initial;
filter: unset;
```

Con una función, use el siguiente código:

```
filter: <filter-function> [<filter-function>]* | none
```

Para referenciar a al valor {{SVGElement("filter")}} de un elemento SVG, use el siguiente código:

```
filter: url(file.svg#filter-element-id)
```

### Interpolación

Si ambos filtros tienen una lista de funciones con la misma longitud y sin {{cssxref("&lt;url&gt;")}}, cada una de las funciones de filtro es interpolada, de acuerdo a sus reglas específicas. Si tienen longitudes diferentes, las funciones equivalentes que falten de la lista más larga se añaden al final de la lista más corta, usando sus valores lagunares, y después todas las funciones son interpoladas de acuerdo a sus reglas específicas. Si un filtro es 'none', es reemplazado por la lista de funciones de filtro del otro, usando los valores predeterminados para cada función, y después todos los filtros son interpolados de acuerdo a su regla específica. De otra forma, se usa interpolación discreta.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

Ejemplos del uso de las funciones predefinidas se muestran a continuación. Ver cada función. Ver cada función para un ejemplo específico.

```css
.mydiv { filter: grayscale(50%) }

/* funcion del blanco y negro "grayscale" al 50% y un desenfoque "blur" de 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```

Ejemplos del uso de la función con el recurso SVG se muestran a continuación.

```css
.target { filter: url(#c1); }

.mydiv { filter: url(commonfilters.xml#large-blur) }
```

## Funciones

Para utilizar la propiedad CSS `filter`, hay que especificar un valor para una de las siguientes funciones. Si el valor no es válido, la función se ejecutará de la misma manera que si se le aplicara "none". Las funciones que toman un valor en procentaje (como en el 34%) también aceptan el valor expresado como decimal (como en 0.34 ó .34).

### `url()`

La función url() toma la dirección de un archivo XML que especifica un filtro SVG, y puede incluir un ancla para un elemento de filtro especifico.

```css
filter: url(resources.svg#c1)
```

### `blur()`

Aplica un desenfoque Gaussiano a la imagen. El valor de 'radio' define el valor de la desviación estándar de la función de desenfoque Gaussiano o el número de píxeles que se mezclan entre sí, por lo que un valor mayor creará un mayor desenfoque. El valor lagunar de interpolación (es decir, si no se proporciona ningún parametro) es `0`. El parámetro se especifica como una longitud de CSS, pero no acepta porcentajes.

```css
filter: blur(5px)
```

```html hidden
  <table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg id="img3" viewbox="0 0 233 176">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%" >
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>
  <image xlink:href="/files/3710/Test_Form_2.jpeg" filter="url(#svgBlur)" x="5%" y="5%" width="212px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3711/Test_Form_2_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:blur(5px);
  -webkit-filter:blur(5px);
  -o-filter:blur(5px);
  -ms-filter:blur(5px);
  filter:blur(5px); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  height: 100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
  </filter>
</svg>
```

{{EmbedLiveSample('blur_example','100%','236px','')}}

### `brightness()`

Se aplica una multiplicación lineal a la imagen, haciendo que parezca más o menos brillante. Un valor de `0%` convertirá la imagen completamente a negro. Un valor de `100%` no producirá ningún cambio en la imagen. Otros valores causarán una multiplicación lineal en el efecto. Los valores de una cantidad superior al `100%` aumentarán el brillo de la imagen. El valor lagunar (si no se especifica ningún valor) es `1` (equivalente a `100%`).

```css
filter: brightness(0.5)
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="[amount]"/>
        <feFuncG type="linear" slope="[amount]"/>
        <feFuncB type="linear" slope="[amount]"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form.jpg" id="img1" class="internal default" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><img alt="Test_Form.jpg" id="img2" class="internal default" src="/files/3708/Test_Form.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 286 217">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="2"/>
        <feFuncG type="linear" slope="2"/>
        <feFuncB type="linear" slope="2"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="/files/3708/Test_Form.jpg" filter="url(#brightness)" width="286px" height="217px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3709/Test_Form_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:brightness(2);
  -webkit-filter:brightness(2);
  -o-filter:brightness(2);
  -ms-filter:brightness(2);
  filter:brightness(2); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  height:100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('brightness_example','100%','231px','')}}

### `contrast()`

Ajusta el contraste del elemento. Un valor superior a `0%` creará una imagen completamente gris. Un valor de `100%` deja al elemento sin cambios. Valores superiores a `100%` son permitidos, dando como resultado mayor contraste. El valor lagunar de interpolación (si no se especifica ningún valor) es `1` (equivalente a `100%`).

```css
filter: contrast(200%)
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_3.jpeg" id="img1" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_3.jpg" id="img2" class="internal default" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 240 151">
 <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="/files/3712/Test_Form_3.jpeg" filter="url(#contrast)" width="240px" height="151px" />
</svg><div></td>
      <td><img alt="Test_Form_s.jpg" id="img4" class="internal default" src="/files/3713/Test_Form_3_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:contrast(200%);
  -webkit-filter:contrast(200%);
  -o-filter:contrast(200%);
  -ms-filter:contrast(200%);
  filter:contrast(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('contrast_example','100%','203px','')}}

### `drop-shadow()`

Aplica un efecto de sombra a la imagen. Una sombra es realmente una versión desenfocada y separada de la máscara alfa de la imagen, dibujada en un color particular, debajo de la misma. La función acepta un parámetro de tipo \<shadow> (definido en CSS3 Backgrounds), con la excepción de que la palabra clave ‘inset’ no está permitida. Esta función es similar a la propiedad {{cssxref("box-shadow")}}, más establecida; la diferencia es que con filtros, algunos navegadores proveen aceleración de hardware para mayor rendimiento. Los valores para el parámetro `<shadow>` son los siguientes:

- `<offset-x>` `<offset-y>` (requerido)
  - : Son dos valores {{cssxref("&lt;length&gt;")}} para establecer la posición de la sobra respecto a la imagen. `<offset-x>` especifica la distancia horizontal. Valores negativos establecen la sombra a la izquierda del elemento. `<offset-y>` especifica la distancia vertical. Valores negativos establecen la sombra arriba del elemento. Véase {{cssxref("&lt;length&gt;")}} para unidades posibles.
    Si ambos valores son `0`, la sombra será colocada detrás del elemento (y puede generar un efecto de desenfoque si se establecen `<blur-radius>` y/o `<spread-radius>`).
- `<blur-radius>` (opcional)
  - : Es un tercer valor {{cssxref("&lt;length&gt;")}}. Mientras mayor sea el valor, mayor será el desenfoque, por lo que la sombra se vuelve más grande y clara. No se permiten valores negativos. Si no es especificado, su valor predeterminado será `0` (el borde de la sombra es nítido).
- `<spread-radius>` (opcional)
  - : Es el cuarto valor {{cssxref("&lt;length&gt;")}}. Valores positivos harán que la sombra se expanda, y valores negativos harán que la sombra se contraiga. Si no se especifica, su valor predeterminado será `0` (la sombra tendrá el mismo tamaño del elemento).
    Nota: Webkit, y tal vez otros navegadores, no soportan este cuarto valor; si se incluye, no se aplicará el filtro.
- `<color>` (opcional)
  - : Véanse los valores {{cssxref("&lt;color&gt;")}} para las opciones posibles de palabras clave y notaciones. Si no se especifica, el color depende del navegador. En Gecko (Firefox), Presto (Opera) y Trident (Internet Explorer), se usa el valor de la propiedad {{cssxref("color")}}. Por otro lado, la sombra en WebKit es transparente, y por lo tanto, es inútil si se omite `<color>`.

```css
filter: drop-shadow(16px 16px 10px black)
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/>
    <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/>
    <feFlood flood-color="[color]"/>
    <feComposite in2="offsetblur" operator="in"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</svg>
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_4.jpeg" id="img1" class="internal default" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4.jpg" id="img2" class="internal default" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 239 187">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
    <feOffset dx="16" dy="16"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
 </filter>
 <image xlink:href="/files/3714/Test_Form_4.jpeg" filter="url(#drop-shadow)" width="213px" height="161px" />
</svg><div></td>
      <td><img alt="Test_Form_4_s.jpg" id="img4" class="internal default" src="/files/3715/Test_Form_4_s.jpg" style="width: 100%;" /></td>
    </tr>
    <tr>
      <td><img alt="Test_Form_4 distorded border - Original image" id="img11" class="internal default" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td><img alt="Test_Form_4 distorded border - Live example" id="img12" class="internal default" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /></td>
      <td>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" id="img13" viewbox="0 0 239 187">
            <filter id="drop-shadow2">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
              <feOffset dx="8" dy="10"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <image xlink:href="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" filter="url(#drop-shadow2)" width="213px" height="161px" />
          </svg>
        <div>
      </td>
      <td><img alt="Test_Form_4 distorded border drop shadow - Static example" id="img14" class="internal default" src="/files/8469/Test_Form_4_irregular-shape_opacity-gradient_drop-shadow.png" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(16px 16px 10px black);
  -webkit-filter: drop-shadow(16px 16px 10px black);
  -o-filter: drop-shadow(16px 16px 10px black);
  -ms-filter: drop-shadow(16px 16px 10px black);
  filter: drop-shadow(16px 16px 10px black);
}
#img12 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -webkit-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -o-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -ms-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
#irregular-shape {
  width: 64%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3, #img13 {
  height:100%;
}
```

{{EmbedLiveSample('shadow_example','100%','300px','')}}

### `grayscale()`

Convierte la imagen a escala de grises. El valor del parámetro define la proporción de la conversión. Un valor de `100%` es completamente a escala de grises. Un valor de `0%` deja la imagen sin cambios. Valores entre `0%` y `100%` son múltiplos lineales de este efecto. Si el parámetro no es incluido, se usa el valor de `0`.

```css
filter: grayscale(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_5.jpeg" id="img1" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_5.jpg" id="img2" class="internal default" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 184">
 <filter id="grayscale">
    <feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/>
  </filter>
  <image xlink:href="/files/3716/Test_Form_5.jpeg" filter="url(#grayscale)" width="276px" height="184px" />
</svg><div></td>
      <td><img alt="Test_Form_5_s.jpg" id="img4" class="internal default" src="/files/3717/Test_Form_5_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:grayscale(100%);
  -webkit-filter:grayscale(100%);
  -o-filter:grayscale(100%);
  -ms-filter:grayscale(100%);
  filter:grayscale(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('grayscale_example','100%','209px','')}}

### `hue-rotate()`

Aplica una rotación de tono (matiz) al elemento. El valor del ángulo define el número de grados al rededor del círculo de colores al que se ajustarán los colores de la imagen. Un valor de `0deg` deja la imagen sin cambios. Si el parámetro del ángulo no es especiicado, se usa valor de `0deg`. Aunque no hay valor máximo, el efecto de valores encima de `360deg` da la vuelta al círculo de colores.

```css
filter: hue-rotate(90deg)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_6.jpeg" id="img1" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_6.jpg" id="img2" class="internal default" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190">
 <filter id="hue-rotate">
    <feColorMatrix type="hueRotate"
               values="90"/>
  </filter>
  <image xlink:href="/files/3718/Test_Form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" />
</svg><div></td>
      <td><img alt="Test_Form_6_s.jpg" id="img4" class="internal default" src="/files/3719/Test_Form_6_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
  -o-filter:hue-rotate(90deg);
  -ms-filter:hue-rotate(90deg);
  filter:hue-rotate(90deg); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

```html
<svg height="0" xmlns="http://www.w3.org/2000/svg">
  <filter id="svgHueRotate" >
    <feColorMatrix type="hueRotate" values="[angle]" />
  <filter />
</svg>
```

{{EmbedLiveSample('huerotate_example','100%','221px','')}}

### `invert()`

Invierte los colores de la imagen. El parámetro define la proporción de la conversión. Un valor de `100%` invierte completamente la imagen. Un valor de `0%` deja a la imagen sin cambios. Valores entre `0%` y `100%` son múltiplos lineales del efecto. Si el parámetro no es especificado, se usa un valor de `0`.

```css
filter: invert(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_7.jpeg" id="img1" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_7.jpg" id="img2" class="internal default" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 183 276">
 <filter id="invert">
    <feComponentTransfer>
        <feFuncR type="table" tableValues="1 0"/>
        <feFuncG type="table" tableValues="1 0"/>
        <feFuncB type="table" tableValues="1 0"/>
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3720/Test_Form_7.jpeg" filter="url(#invert)" width="183px" height="276px" />
</svg><div></td>
      <td><img alt="Test_Form_7_s.jpg" id="img4" class="internal default" src="/files/3721/Test_Form_7_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: invert(100%);
  -webkit-filter: invert(100%);
  -o-filter: invert(100%);
  -ms-filter: invert(100%);
  filter: invert(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('invert_example','100%','407px','')}}

### `opacity()`

Aplica transparencia a la imagen. El valor del parámetro define la proporción de la conversión. Un valor de `0%` es completamente transparente. Un valor de `100%` deja la imagen sin cambios. Valores entre `0%` y `100%` son múltiplos lineales del efecto. Esto es equivalente a multiplicar las muestras de la imagen por el valor indicado. Si el parámetro no es especificado, se usa un valor de `1`. Esta función es similar a la propiedad {{cssxref("opacity")}}, más establecida; la diferencia es que con filtros, algunos navegadores proveen aceleración de hardware para mayor rendimiento.

```css
filter: opacity(50%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_14.jpeg" id="img1" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_14.jpg" id="img2" class="internal default" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183">
 <filter id="opacity">
    <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5">
    </feComponentTransfer>
 </filter>
 <image xlink:href="/files/3725/Test_Form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" />
</svg><div></td>
      <td><img alt="Test_Form_14_s.jpg" id="img4" class="internal default" src="/files/3726/Test_Form_14_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: opacity(50%);
  -webkit-filter: opacity(50%);
  -o-filter: opacity(50%);
  -ms-filter: opacity(50%);
  filter: opacity(50%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('opacity_example','100%','210px','')}}

### `saturate()`

Aplica saturación a la imagen. El valor del parámetro define la proporción de la conversión. Un valor de `0%` es completamente sin saturación. Un valor de `100%` deja la imagen sin cambios. Otros valores son múltiplos lineales del efecto. Valores por encima de `100%` son permitidos, dando resultados de sobresaturación. Si no se especifica el parámetro, se usa el valor de `1`.

```css
filter: saturate(200%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_9.jpeg" id="img1" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_9.jpg" id="img2" class="internal default" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239">
 <filter id="saturate">
    <feColorMatrix type="saturate"
               values="2"/>
 </filter>
 <image xlink:href="/files/3722/Test_Form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" />
</svg><div></td>
      <td><img alt="Test_Form_9_s.jpg" id="img4" class="internal default" src="/files/3724/Test_Form_9_s.jpeg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: saturate(200%);
  -webkit-filter: saturate(200%);
  -o-filter: saturate(200%);
  -ms-filter: saturate(200%);
  filter: saturate(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('saturate_example','100%','332px','')}}

### `sepia()`

Convierte la imagen a sepia. El valor del parámetro define la proporción de la conversión. Un valor de `100%` es completamente sepia. Un valor de `0%` deja la imagen sin cambios. Valores entre `0%` y `100%` son múltiplos lineales del efecto. Si no se especifica el parámetro, se usa el valor de `0`.

```css
filter: sepia(100%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">SVG Equivalent</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_12.jpeg" id="img1" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_12.jpg" id="img2" class="internal default" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 259 194">
 <filter id="sepia">
    <feColorMatrix type="matrix"
               values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/>
 </filter>
 <image xlink:href="/files/3727/Test_Form_12.jpeg" filter="url(#sepia)" width="259px" height="194px" />
</svg><div></td>
      <td><img alt="Test_Form_12_s.jpg" id="img4" class="internal default" src="/files/3728/Test_Form_12_s.jpg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: sepia(100%);
  -webkit-filter: sepia(100%);
  -o-filter: sepia(100%);
  -ms-filter: sepia(100%);
  filter: sepia(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('sepia_example','100%','229px','')}}

## Combinando funciones

Se puede combinar cualquier número de funciones para manipular la representación de la imagen. Los siguientes ejemplos aumentan el contraste y brillo de la imagen.

```css
filter: contrast(175%) brightness(3%)
```

```html hidden
<table class="standard-table">
  <thead>
    <tr>
      <th align="left" scope="col">Original image</th>
      <th align="left" scope="col">Live example</th>
      <th align="left" scope="col">Static example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Test_Form_8.jpeg" id="img1" class="internal default" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_8.jpg" id="img2" class="internal default" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /></td>
      <td><img alt="Test_Form_8_s.jpg" id="img4" class="internal default" src="/files/3730/Test_Form_8_s.jpeg" style="width: 100%;" /></td>
    </tr>
  </tbody>
</table>
```

```css hidden
html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: contrast(175%) brightness(103%);
  -webkit-filter: contrast(175%) brightness(103%);
  -o-filter: contrast(175%) brightness(103%);
  -ms-filter: contrast(175%) brightness(103%);
  filter: contrast(175%) brightness(103%);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
```

{{EmbedLiveSample('combination_example','100%','209px','')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Aplicando efectos de SVG a contenido HTML](/es/docs/Applying_SVG_effects_to_HTML_content)
- La propiedad {{ Cssxref("mask") }}
- [SVG](/es/docs/SVG)
- [Entendiendo los filtros CSS](http://www.html5rocks.com/en/tutorials/filters/understanding-css/), artículo en inglés de HTML5Rocks!
