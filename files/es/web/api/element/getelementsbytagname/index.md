---
title: element.getElementsByTagName
slug: Web/API/Element/getElementsByTagName
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Element/getElementsByTagName
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve una lista de elementos que tienen un <a href="es/DOM/element.tagName">tag name</a> determinado. Se explora el árbol por debajo del elemento dado, excluyendo el propio elemento.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><em>elements</em> =<em>element</em>.getElementsByTagName(<em>tagName</em>)
</pre>

<ul>
 <li><code>elements</code> es un <code>NodeList</code> del elemento encontrado en el orden en que aparece en el árbol.</li>
 <li><code>element</code> es el elemento a partir del cual debe empezar la búsqueda. Recuerda que sólo se buscan los elementos descendentes del elemento dado, sin incluir el propio elemento.</li>
 <li><code>tagName</code> es el nombre que se busca. La cadena especial <code>"*"</code> representa todos los elementos.</li>
</ul>

<div class="note">
<p>En Firefox 2 (Gecko 1.8.1) y anteriores, este método no funcionaba correctamente si el árbol contenía algún elemento con etiqueta de nombre conteniendo espacios. (Ver {{ Bug(206053) }} para más detalles).</p>

<p>Es recomendable usar <a href="es/DOM/document.getElementsByTagNameNS">DOM:document.getElementsByTagNameNS</a> cuando se manejan documentos con "multi-namespace".</p>
</div>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<pre>// comprueba la alineación de las celdas en una tabla.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
for (var i = 0; i &lt; cells.length; i++) {
    status = cells[i].getAttribute("status");
    if ( status == "open") {
        // grab the data
    }
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p><code>element.getElementsByTagName</code> es similar a <a href="es/DOM/document.getElementsByTagName">document.getElementsByTagName</a>, excepto por que su búsqueda está restringida a los elementos que descienden del elemento especificado.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1938918D">DOM Level 2 Core: Element.getElementsByTagName </a></p>
