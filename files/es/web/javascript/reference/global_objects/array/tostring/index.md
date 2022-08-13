---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/toString
---
<div>{{JSRef}}</div>

<p>El método <code><strong>toString()</strong></code> devuelve una cadena de caracteres representando el array especificado y sus elementos.</p>

<p>{{EmbedInteractiveExample("pages/js/array-tostring.html")}}</p>

<h2 id="Sintaxis">Sintaxis </h2>

<pre class="syntaxbox"><code><var>arr</var>.toString()</code></pre>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Una cadena de caracteres representando los elementos del array.</p>

<h2 id="Descripción">Descripción</h2>

<p>El objeto {{jsxref("Array")}} sustituye al método <code>toString</code> de {{jsxref("Object")}}. Para los objetos <code>Array</code>, el método <code>toString</code> une el array y devuelve una cadena de caracteres que contiene cada elemento del array separado por comas.</p>

<p>JavaScript llama al método <code>toString</code> automáticamente cuando un array va a ser representado como un valor de texto o cuando se referencia a un array en una concatenación de caracteres.</p>

<h3 id="Semántica_de_ECMAScript_5">Semántica de ECMAScript 5 </h3>

<p>Desde JavaScript 1.8.5 (Firefox 4), y consistente con la 5ª edición de semántica de ECMAScript, el método <code>toString()</code> es genérico y puede ser usado con cualquier objeto. {{jsxref("Object.prototype.toString()")}} será llamado y devolverá el valor resultante.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.2', 'Array.prototype.toString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.tostring', 'Array.prototype.toString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.tostring', 'Array.prototype.toString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Array.toString")}}</p>
</div>&gt;

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("Array.prototype.join()")}}</li>
 <li>{{jsxref("Object.prototype.toSource()")}}</li>
</ul>
