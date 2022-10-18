---
title: background-position
slug: Web/CSS/background-position
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/background-position
---
<p>{{ PreviousNext("CSS:background-image", "CSS:background-repeat") }}</p>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p><code>background-position</code> define la posición inicial de la imagen de fondo especificada.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: 0% 0%</li>
 <li>Se aplica a: todos los elementos</li>
 <li>{{ Cssxref("inheritance", "Herencia") }}: no</li>
 <li>Porcentajes: se refiere al tamaño de la caja misma</li>
 <li>Medio: {{ Cssxref("Media:Visual", "visual") }}</li>
 <li>{{ Cssxref("computed value", "Valor calculada") }}: para &lt;length&gt; el valor absoluto, para otros un porcentaje.</li>
</ul>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">background-position: [ &lt;percentage&gt; | &lt;length&gt; | left | center | right  ]
                     [ &lt;percentage&gt; | &lt;length&gt; | top  | center | bottom ] ? ;
</pre>

<pre class="eval">background-position: [ top | center | bottom ];
</pre>

<pre class="eval">background-position: inherit;
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>{{ Cssxref("porcentaje") }} &lt;percentage&gt;</dt>
 <dd>Con el par de valores '0% 0%', la esquina izquierda de la imagen es alineada con la esquina izquierda del borde del espaciado de la caja. Un valor '100% 100%' pone la esquina inferior de la imagen en la esquina inferior del área de espaciado. Con un valor '14% 84%', el punto a 14% a la derecha y 84% abajo de la imagen es colocado en el punto al 14% derecha y 84% abajo del área de espaciado.</dd>
 <dt>{{ Cssxref("length") }} &lt;length&gt;</dt>
 <dd>con un valor '2cm 1cm', la esquina superior izquierda de la imagen es colocada a 2 cm a la derecha y a 1cm debajo de la esquina superior izquierda del área de espaciado.</dd>
 <dt>top left y left top</dt>
 <dd>Es igual a '0% 0%'.</dd>
 <dt>top, top center y center top</dt>
 <dd>Es igual a '50% 0%'.</dd>
 <dt>right top y top right</dt>
 <dd>Es igual a '100% 0%'.</dd>
 <dt>left, left center y center left</dt>
 <dd>Es igual a '0% 50%'.</dd>
 <dt>center and center center</dt>
 <dd>Es igual a '50% 50%'.</dd>
 <dt>right, right center y center right</dt>
 <dd>Es igual a '100% 50%'.</dd>
 <dt>bottom left y left bottom</dt>
 <dd>Es igual a '0% 100%'.</dd>
 <dt>bottom, bottom center y center bottom</dt>
 <dd>Es igual a '50% 100%'.</dd>
 <dt>bottom right y right bottom</dt>
 <dd>Es igual a '100% 100%'.</dd>
</dl>

<p>Si solo se especifica un valor, se entenderá que es la posición horizontal con la vertical al 50%. De otra manera el primer valor especifica la posición horizontal. Se admiten valores negativos y combinaciones de palabras claves, largos (<small>lenght</small>) o porcentajes, pero en el caso de mezclar las palabras claves con otros valores, '<strong>left' y 'right'</strong> solo se utilizarán como primer valor y '<strong>top' y 'bottom'</strong> como segundo.</p>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<pre>.exampleone {
	background-image: url("logo.png");
	background-position: top center;
}

.exampletwo {
	background-image: url("logo.png");
	background-position: 25% 75%;
}

.examplethree {
	background-image: url("logo.png");
	background-position: 2cm bottom;
}

.examplefour {
	background-image: url("logo.png");
	background-position: center 10%;
}

.examplefive {
	background-image: url("logo.png");
	background-position: 2cm 50%;
}

</pre>

<h2 id="Especificaciones" name="Especificaciones">Especificaciones</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#background-position">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/colors.html#propdef-background-position">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/2005/WD-css3-background-20050216/#background-position">CSS 3</a></li>
</ul>

<h3 id="Compatibilidad" name="Compatibilidad">Compatibilidad</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Navegador</th>
   <th>Versión mínima</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>4</td>
  </tr>
  <tr>
   <td>Firefox</td>
   <td>1</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>6</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>3.5</td>
  </tr>
 </tbody>
</table>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}</p>
