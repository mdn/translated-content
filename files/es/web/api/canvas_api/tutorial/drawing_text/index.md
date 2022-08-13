---
title: Dibujar texto usando canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_text
tags:
  - HTML:Canvas
translation_of: Web/API/Canvas_API/Tutorial/Drawing_text
original_slug: Dibujar_texto_usando_canvas
---
<p>
El elemento <code><a href="es/HTML/Canvas">&lt;canvas&gt;</a></code> permite dibujar texto en él a través de una API experimental de Mozilla.
</p>
<h3 id="API" name="API"> API </h3>
<pre class="eval">attribute DOMString mozTextStyle;
void mozDrawText(in DOMString textToDraw);
float mozMeasureText(in DOMString textToMeasure);
void mozPathText(in DOMString textToPath);
void mozTextAlongPath(in DOMString textToDraw, in boolean stroke);
</pre>
<h3 id="Notas" name="Notas"> Notas </h3>
<ul><li> El tipo de letra predeterminado es sans-serif 12pt.
</li><li> Estas extensiones de texto no están aún estandarizadas por WHATWG.
</li><li> No necesitas un contexto especial para usarlas; el contexto 2D funciona bien.
</li><li> Todos los dibujos se realizan usando la transformación actual.
</li><li> Revisa el {{ Bug(339553) }} si quieres leer más sobre las implementaciones específicas.
</li></ul>
<h3 id="Demostraciones" name="Demostraciones"> Demostraciones </h3>
<p>Mira algunos ejemplos <a class="link-https" href="https://bugzilla.mozilla.org/attachment.cgi?id=273497">aquí</a>, <a class="link-https" href="https://bugzilla.mozilla.org/attachment.cgi?id=273498">aquí</a>, y <a class="link-https" href="https://bugzilla.mozilla.org/attachment.cgi?id=273499">aquí</a>.
</p>
<h3 id="Cambiar_el_tipo_de_letra_actual" name="Cambiar_el_tipo_de_letra_actual"> Cambiar el tipo de letra actual </h3>
<p>El atributo <code>mozTextStyle</code> contiene el estilo de texto actual. Usa la misma sintaxis que el especificado para las <a href="es/CSS/font">tipografías CSS</a>.
</p><p>Ej:
</p>
<pre class="eval">ctx.mozTextStyle = "20pt Arial"
</pre>
<h3 id="Dibujar_texto" name="Dibujar_texto"> Dibujar texto </h3>
<p>Dibujar es muy sencillo. <code>mozDrawText</code> usa el estilo de texto actual, cualquiera que sea éste. Se usa el color de relleno del contexto como color del texto.
</p>
<pre class="eval">ctx.translate(10, 50);
ctx.fillStyle = "Red";
ctx.mozDrawText("Sample String");
</pre>
<h3 id="Medir_texto" name="Medir_texto"> Medir texto </h3>
<p>A veces es útil saber qué tan ancho es un trozo de texto en particular (para centrarlo en una ventana, por ejemplo).
</p>
<pre class="eval">var text = "Sample String";
var width = ctx.canvas.width;
var len = ctx.mozMeasureText(text);
ctx.translate(len/2, 0);
ctx.mozDrawText(text);
</pre>
<h3 id="Interacci.C3.B3n_texto.2Ftrazo" name="Interacci.C3.B3n_texto.2Ftrazo"> Interacción texto/trazo </h3>
<p>Si quieres tachar un texto, <code>mozDrawText</code> no te lo permite. En cambio, <code>mozPathText</code> agrega el tachado de texto al trazo actual.
</p>
<pre class="eval">ctx.fillStyle = "green";
ctx.strokeStyle = "black";
ctx.mozPathText("Sample String");
ctx.fill()
ctx.stroke()
</pre>
<p>Supongamos ahora que quieres agregar un texto que se acomode a un trazo que dibujaste (una línea curva o algo parecido) es donde aparece <code>mozTextAlongPath</code>. Al contrario de otras funciones de texto, <code>mozTextAlongPath</code> necesita dos argumentos: el texto y qué se quiere hacer con él. <code>mozTextAlongPath</code> aproxima el trazo actual como una serie de segmentos de línea y ubica cada carácter encima de ese trazo. Los caracteres no son cambiados de tamaño o transformados de acuerdo a la curvatura de la base; toman la orientación del trazo a la mitad del carácter.
</p><p>Una vez que <code>mozTextAlongPath</code> sabe dónde está el carácter, busca el segundo parámetro para decidir qué hacer con él. Si el segundo parámetro es <code>false</code>, entonces dibuja el carácter como lo haría <code>mozDrawText</code>. Si es <code>true</code>, agrega el carácter al trazo actual, como lo hace <code>mozPathText</code>. Esto puede usarse para crear efectos únicos.
</p><p><br>
</p><p><br>
</p>
<div class="noinclude">
</div>
{{ languages( { "en": "en/Drawing_text_using_a_canvas", "fr": "fr/Dessin_de_texte_avec_canvas", "ja": "ja/Drawing_text_using_a_canvas", "pl": "pl/Rysowanie_tekstu_przy_u\u017cyciu_canvas" } ) }}
