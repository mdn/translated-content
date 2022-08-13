---
title: document.characterSet
slug: Web/API/Document/characterSet
translation_of: Web/API/Document/characterSet
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve la codificación de caracteres (conjunto de caracteres) usado en el documento.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>string</i> = document.characterSet
</pre>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<pre class="eval">&lt;button onclick="alert(document.characterSet);"
&gt;Mostrar conjunto de caracteres&lt;/button&gt;
// devuelve el conjunto de caracteres del documento, por ejemplo "ISO-8859-1 o UTF-8"
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>La codificación de caracteres es el conjunto de caracteres usados para interpretar el documento, el cual puede ser diferente a la codificación especificada por la página (el usuario puede omitir la codificación).</p>

<p>Para una lista completa de juegos/conjuntos de caracteres, visite: <a class="external" href="http://www.iana.org/assignments/character-sets" rel="freelink">http://www.iana.org/assignments/character-sets</a>.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p>DOM Nivel 0. No es parte de ningún estándar.</p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/DOM/document.characterSet", "pl": "pl/DOM/document.characterSet" } ) }}</p>
