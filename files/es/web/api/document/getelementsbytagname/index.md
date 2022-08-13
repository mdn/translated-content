---
title: document.getElementsByTagName
slug: Web/API/Document/getElementsByTagName
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Document/getElementsByTagName
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><em>elements</em> = document.getElementsByTagName(<em>name</em>)
</pre>

<ul>
 <li><code>elements</code> es una lista 'viva' (<code>NodeList</code>) de los elementos encontrados en el orden en que han aparecido en el árbol.</li>
 <li><code>name</code> es una cadena que representa el nombre de los elementos. La cadena especial "*" representa a todos los elementos.</li>
</ul>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<p>En el siguiente ejemplo, <code>getElementsByTagName</code> empieza por el elemento padre y busca hacia abajo recurrentemente a lo largo de todo el DOM por ese elemento padre, buscando por hijos que cumplan con el criterio: nombre = <code>name</code>.</p>

<p>Ten en cuenta que cuando el nodo en el que se invoca <code>getElementsByTagName</code>, no es el nodo <code>document</code>, en realidad se está usando el método <a href="es/DOM/element.getElementsByTagName">element.getElementsByTagName</a>.</p>

<pre>&lt;html&gt;

&lt;head&gt;
&lt;title&gt;ejemplo de getElementsByTagName&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function getAllParaElems()
{
  var allParas = document.getElementsByTagName("p");

  var num = allParas.length;

  alert("Hay " + num + " &lt;p&gt; elementos en este documento");
}


function div1ParaElems()
{
  var div1 = document.getElementById("div1")
  var div1Paras = div1.getElementsByTagName("p");

  var num = div1Paras.length;

  alert("Hay " + num + " &lt;p&gt; elementos en el elemento div1");
}


function div2ParaElems()
{
  var div2 = document.getElementById("div2")
  var div2Paras = div2.getElementsByTagName("p");

  var num = div2Paras.length;

  alert("Hay " + num + " &lt;p&gt; elementos en el elemento div2");
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body style="border: solid green 3px"&gt;
&lt;p&gt;Algo de texto&lt;/p&gt;
&lt;p&gt;Algo de texto&lt;/p&gt;

  &lt;div id="div1" style="border: solid blue 3px"&gt;
    &lt;p&gt;Algo de texto en div1&lt;/p&gt;
    &lt;p&gt;Algo de texto en div1&lt;/p&gt;
    &lt;p&gt;Algo de texto en div1&lt;/p&gt;

    &lt;div id="div2" style="border: solid red 3px"&gt;
    &lt;p&gt;Algo de texto en div2&lt;/p&gt;
    &lt;p&gt;Algo de texto en div2&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;p&gt;Algo de texto&lt;/p&gt;
&lt;p&gt;Algo de texto&lt;/p&gt;

&lt;button onclick="getAllParaElems();"&gt;
 muestra todos los elementos p en el documento&lt;/button&gt;&lt;br /&gt;

&lt;button onclick="div1ParaElems();"&gt;
 muestra todos los elementos p en div1&lt;/button&gt;&lt;br /&gt;

&lt;button onclick="div2ParaElems();"&gt;
 muestra todos los elementos p en div2&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C9094">DOM Level 2 Core: Document.getElementsByTagName</a></p>
