---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/of
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/of
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Array.of()</strong></code> crea una nueva instancia <code>Array</code> con un número variable de elementos pasados como argumento, independientemente del número o del tipo.</p>

<p>La diferencia entre <code><strong>Array.of()</strong></code> y el constructor <code><strong>Array</strong></code> reside en como maneja los parámetros de tipo entero: <code><strong>Array.of(7)</strong></code> crea un array con un solo elemento, <code>7</code>, mientras que <code><strong>Array(7)</strong></code> crea un array vacío con una propiedad <code>length</code> de 7 (<strong>Nota:</strong> esto implica un array de 7 ranuras vacías, no ranuras con valores <code>undefined</code>).</p>

<pre class="brush: js">Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]</pre>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">Array.of(<var>elemento0</var>[, <var>elemento1</var>[, ...[, <var>elementoN</var>]]])</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>elemento<em>N</em></code></dt>
 <dd>Valores con los que se creará el Array en su respectivo indice.</dd>
 <dt>
 <h3 id="Valor_de_retorno">Valor de retorno</h3>
 </dt>
 <dd>Una nueva instancia de {{jsxref("Array")}}.</dd>
</dl>

<h2 id="Descripción">Descripción</h2>

<p>Esta función es parte del estándar ECMAScript 2015. Para obtener más información, consulte <a href="https://gist.github.com/rwaldron/1074126"><code>Array.of</code> y <code>Array.from</code> proposal</a> y <a href="https://gist.github.com/rwaldron/3186576"><code>Array.of</code> polyfill</a>.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Escribiendo el siguiente código antes que cualquier otro, podemos emular la funcionalidad de <code>Array.of()</code> si es que ésta no está disponible de forma nativa.</p>

<pre class="brush: js">if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
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
   <td>{{SpecName('ES2015', '#sec-array.of', 'Array.of')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.of', 'Array.of')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.of")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
 <li>{{jsxref("TypedArray.of()")}}</li>
</ul>
