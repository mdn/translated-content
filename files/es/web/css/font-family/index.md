---
title: font-family
slug: Web/CSS/font-family
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/font-family
---
<p>{{CSSRef}}</p>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>La propiedad <code>font-family</code> define una lista de fuentes o familias de fuentes, con un orden de prioridad, para utilizar en un elemento seleccionado. A diferencia de la mayoría de las propiedades CSS, los valores se separan con comas (",") para indicar que son valores alternativos.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">font-family: &lt;familia o nombre genérico&gt; [, &lt;familia o nombre genérico&gt;]* | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>&lt;nombre de familia o genérico&gt;</dt>
 <dd>puede ser un <code>&lt;nombre de familia&gt;</code> o un <code>&lt;nombre genérico&gt;</code></dd>
 <dt>nombre de familia </dt>
 <dd>El nombre de la familia de la fuente. Por ejemplo, 'Times' y 'Helvética' son nombres de familia. Los nombres de familia que contengan espacios, deben escribirse entre comillas (por ejemplo: "Times New Roman").</dd>
 <dt>nombre genérico </dt>
 <dd>Se han definido los siguientes nombres genéricos: <code>serif, sans-serif, cursive, fantasy, monospace</code>. Los nombres genéricos son palabras claves y no deben ponerse entre comillas.</dd>
</dl>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<p><a href="/samples/cssref/font-family.html">Ver El Ejemplo Vivo</a></p>

<pre>body { font-family: "Gill Sans Extrabold", Helvetica, sans-serif }

.receipt { font-family: Courier, "Lucida Console", monospace }
</pre>

<h2 id="Notas" name="Notas">Notas</h2>

<p>Un nombre genérico debería ser siempre el último de la lista en una propiedad <code>font-family</code>.</p>

<p>La propiedad <code>font-family</code> especifica una lista de fuentes, desde la prioridad más alta a la más baja. La selección de fuentes <strong>no se detiene</strong> en la primera de la lista que está en el equipo del usuario. Por el contrario la selección de fuentes se realiza<em>carácter a carácter</em>, por lo que, si una fuente seleccionada no tiene el carácter que se quiere mostrar, se recurre a la siguiente.</p>

<p>Cuando una fuente no está disponible en algún {{ Cssxref("font-style", "estilo de fuente") }}, {{ Cssxref("font-variant", "variantes de fuente") }}, o {{ Cssxref("font-size", "tamaño de fuente") }}, estas propiedades pueden influir en la elección de la fuente.</p>

<h2 id="Especificaciones" name="Especificaciones">Especificaciones</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#font-family">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/fonts.html#font-family-prop">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/2002/WD-css3-fonts-20020802/#font-family-prop">CSS 3</a></li>
</ul>

<h2 id="Compatibilidades" name="Compatibilidades">Compatibilidades</h2>

<p>TBD (La mejor manera centralizada en un único cuadro de compatibilidad.)</p>
