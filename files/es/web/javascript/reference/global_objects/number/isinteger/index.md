---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
tags:
  - JavaScript
  - Number
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isInteger
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/isInteger
---
<div>{{JSRef}}</div>

<p>El método <strong><code>Number.isInteger()</code></strong> determina si el valor pasado es de tipo entero.</p>

<div>{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code>Number.isInteger(valor)</code></pre>

<h3 id="Parámetros" name="Parámetros">Parámetros</h3>

<dl>
 <dt><code>valor</code></dt>
 <dd>El valor a ser probado si es un entero.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un {{jsxref("Boolean")}} indicando si el valor dado es un entero o no.</p>

<h2 id="Descripción">Descripción </h2>

<p>Si el valor seleccionado es un entero, devuelve <code>true</code>, de lo contrario <code>false</code>. Si el valor es {{jsxref("NaN")}} o infinito, devuelve <code>false</code>.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &amp;&amp;
    isFinite(value) &amp;&amp;
    Math.floor(value) === value;
};
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number.isinteger', 'Number.isInteger')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.isinteger', 'Number.isInteger')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatitibilidad_con_navegadores">Compatitibilidad con navegadores</h2>

<p>{{Compat("javascript.builtins.Number.isInteger")}}</p>

<h2 id="Ver también" name="Ver también">Ver también</h2>

<ul>
 <li>El objeto {{jsxref("Number")}} al que pertenece.</li>
</ul>
