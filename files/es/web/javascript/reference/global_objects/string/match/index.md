---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - JavaScript
  - Method
  - Prototype
  - RegExp
  - Regular Expressions
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/match
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/match
---
<p>{{JSRef("Objetos_globales", "String")}}</p>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>El método <strong><code>match()</code></strong> se usa para obtener todas las ocurrencias de una <em>expresión regular</em> dentro de una <em>cadena</em>.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>cadena</em>.match(<em>regexp</em>)</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt><code>regexp</code></dt>
 <dd>Un objeto <a href="/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp"> expresión regular</a>. Si se pasa un objeto <code>obj</code> que no es expresión regular, se convierte implícitamente a RegExp usando <code>new RegExp(obj)</code>.</dd>
</dl>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p>Si la expresión regular no incluye el flag <code>g</code>, devuelve el mismo resultado que {{jsxref("Regexp.exec()")}}.</p>

<p>Si la expresión regular incluye el flag <code>g</code>, el método devuelve un {{jsxref("Array")}} que contiene todos los emparejamientos.</p>

<h3 id="Notas" name="Notas">Notas</h3>

<ul>
 <li>Si necesita conocer si una cadena se empareja con una expresión regular <code>regexp</code>, use {{jsxref("Regexp.test()")}}.</li>
 <li>Si sólo quiere el primer emparejamiento hallado, podría querer usar {{jsxref("Regexp.exec()")}} a cambio.</li>
</ul>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo:_Usando_match" name="Ejemplo:_Usando_match">Ejemplo: Usando <code>match</code></h3>

<p>En el siguiente ejemplo, se usa <code>match</code> para hallar "<code>Capítulo</code>" seguido de 1 o más caracteres numéricos seguidos de un punto decimal y caracteres numéricos cero o más veces. La expresión regular incluye el flag <code>i</code> por lo que las mayúsculas serán ignoradas.</p>

<pre class="brush: js">cadena = "Para más información, vea Capítulo 3.4.5.1";
expresion = /(capítulo \d+(\.\d)*)/i;
hallado = cadena.match(expresion);
console.log(hallado);
</pre>

<p>Esto devuelve un array que contiene Capítulo 3.4.5.1,Capítulo 3.4.5.1,.1</p>

<p>"<code>Capítulo 3.4.5.1</code>" es el primer emparejamiento y el primer valor referenciado por <code>(Chapter \d+(\.\d)*)</code>.</p>

<p>"<code>.1</code>" es el segundo valor referenciado por <code>(\.\d)</code>.</p>

<h3 id="Ejemplo:_Usando_los_flags_global_e_ignorar_may.C3.BAsculas_con_match" name="Ejemplo:_Usando_los_flags_global_e_ignorar_may.C3.BAsculas_con_match">Ejemplo: Usando los flags global e ignorar mayúsculas con <code>match</code></h3>

<p>El siguiente ejemplo demuestra el uso de los flags global e ignorar mayúsculas con <code>match</code>. Todas las letras de A hasta E y de a hasta e son devueltas, en su propio elemento dentro del array.</p>

<pre class="brush: js">var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var expresion = /[A-E]/gi;
var array_emparejamientos = cadena.match(expresion);
console.log(array_emparejamientos);
</pre>

<p><code>array_emparejamientos</code> será <code>{{ mediawiki.external('\'A\', \'B\', \'C\', \'D\', \'E\', \'a\', \'b\', \'c\', \'d\', \'e\'') }}</code></p>

<h2 id="Vea_También">Vea También</h2>

<ul>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
