---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Protitipo
  - Referencia
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/findIndex
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/findIndex
---
<div>{{JSRef}}</div>

<p>El método <code><strong>findIndex()</strong></code> devuelve el <strong>índice</strong> del <strong>primer elemento</strong> de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.</p>

<div>{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}</div>

<p>Vea también el método {{jsxref("Array.find", "find()")}}, que devuelve el <strong>valor </strong>de un elemento encontrado en el array en lugar de su índice.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.findIndex(<var>callback</var>( <var>element</var>[, <var>index</var>[, <var>array</var>]] )[, <var>thisArg</var>])
</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>
 <p>Función a ejecutar en cada uno de los valores del array hasta que devuelve <code>true</code>, indicando que el elemento que la cumple fue encontrado.</p>

 <p>Recibe tres argumentos:</p>

 <dl>
  <dt><code><var>element</var></code></dt>
  <dd>El elemento actual siendo procesado en el array.</dd>
  <dt><code><var>index</var></code> {{optional_inline}}</dt>
  <dd>El índice del elemento actual que está siendo procesado en el array.</dd>
  <dt><code><var>array</var></code> {{optional_inline}}</dt>
  <dd>El array <code>findIndex()</code> de donde fue llamado.</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd>Objeto opcional para usar como <code>this</code> cuando se ejecuta el <code><var>callback</var></code>.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un índice en el array si un elemento pasa la prueba; en caso contrario, <code>-1</code>.</p>

<h2 id="Descripción">Descripción</h2>

<p>El método <code>findIndex()</code> ejecuta la función de <em><code>callback</code></em> una vez por cada índice del array hasta que encuentre uno donde <em><code>callback</code></em> devuelva un valor verdadero (eso es, un valor que <a href="/en-US/docs/Glossary/Type_Conversion">fuerza</a> un <code>true</code>).</p>

<p>Si dicho elemento es encontrado, <code>findIndex()</code> inmediatamente devuelve el índice del elemento. Si la función <em><code>callback</code></em> nunca devuelve un valor verdadero (o el tamaño del array es 0), <code>findIndex</code> devuelve <code>-1</code>.</p>

<div class="blockIndicator note">
<p><strong>Alerta de Edge Case:</strong> A diferencia de otros métodos de arrays como {{jsxref("Array.some()")}}, <code><var>callback</var></code> se ejecuta incluso en índices sin valores asignados.</p>
</div>

<p><em><code>callback</code></em> se invoca con tres argumentos:</p>

<ol>
 <li>El valor del elemento</li>
 <li>El índice del elemento</li>
 <li>El Array que será recorrido.</li>
</ol>

<p>Si el parámetro <code>thisArg</code> es provisto a findIndex, entonces será usado como el this para cada invocación del <code>callback</code>. Si no es provisto, entonces {{jsxref("undefined")}} será utilizado. </p>

<p>El rango de elementos procesados por <code>findIndex()</code> se establece antes de la primera invocación de la función <em><code>callback</code></em>. Los elementos añadidos al array después de que la llamada a <code>findIndex()</code> comience no serán visitados por el <code>callback</code>. Si un elemento existente que no ha sido visitado en el array es modificado por el <em><code>callback</code></em>, el valor pasado al <em><code>callback</code></em> que lo visite será el valor en el momento en que <code>findIndex()</code> visite el índice del elemento.</p>

<p>Los elementos <a href="/es/docs/Web/JavaScript/Referencia/Operadores/delete">eliminados</a> aún son visitados.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Encontrar_el_índice_de_un_número_primo_en_un_array">Encontrar el índice de un número primo en un array</h3>

<p>El siguiente ejemplo encuentra el índice de un elemento en el array que sea número primo (o devuelve <code>-1</code> si no hay ningún número primo).</p>

<pre class="brush: js">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start &lt; 1) {
      return false;
    } else {
      start++;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
</pre>

<h3 id="Encontrar_un_índice_utilizando_funciones_flecha">Encontrar un índice utilizando funciones flecha</h3>

<p>El siguiente ejemplo encuentra el índice de una fruta utilizando funciones flecha.</p>

<pre class="brush: js">const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit =&gt; fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}
</pre>

<p>Si necesita soporte para motores de JavaScript obsoletos que no soportan <code><a href="/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty">Object.defineProperty</a></code> es mejor no emplear polyfills para métodos <code>Array.prototype</code>, ya que no puede hacerlos no-enumerables.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.findindex', 'Array.prototype.findIndex')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Array.findIndex")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
</ul>
