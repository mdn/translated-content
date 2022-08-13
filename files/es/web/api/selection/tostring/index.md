---
title: toString
slug: Web/API/Selection/toString
tags:
  - páginas_a_traducir
translation_of: Web/API/Selection/toString
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve una cadena de caracteres (texto), la cual es representada por el objeto de selección, es decir, el texto seleccionado.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>string</i> =
<i>sel</i>.toString()
</pre>

<ul>
 <li><code>string</code> es la representación del texto de selección.</li>
</ul>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<p>Ninguno.</p>

<h3 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h3>

<p>Este método devuelve el texto seleccionado.</p>

<p>En <a href="es/JavaScript">JavaScript</a>, este método es llamado automáticamente cuando una función, a la cual es pasado como parámetro el objeto de selección, requiere una cadena de caracteres (texto):</p>

<pre class="eval">alert(window.getSelection()) // Lo que se llama.
alert(window.getSelection().toString())  // Lo que está siendo efectivamente llamado.
</pre>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<ul>
 <li><a href="es/Core_JavaScript_1.5_Reference/Objects/Object/toString">Object.toString</a></li>
</ul>

<p> </p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/DOM/Selection/toString", "fr": "fr/DOM/Selection/toString", "it": "it/DOM/Selection/toString", "pl": "pl/DOM/Selection/toString" } ) }}</p>
