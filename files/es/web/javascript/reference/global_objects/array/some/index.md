---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript5
  - JavaScript
  - Prototipo
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/some
---
<div>{{JSRef}}</div>

<p>El método <code><strong>some()</strong></code> comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.</p>

<div class="note">
<p><strong>Nota</strong>: Este método devuelve <code>false</code> para cualquier condición puesta en un array vacío.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/array-some.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.some(<var>callback(element[, index[, array]])</var>[, <var>thisArg</var>])</pre>

<h3 id="Parámetros" name="Parámetros">Parámetros</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Función que verifica cada elemento, toma tres argumentos:
 <dl>
  <dt><code>element</code></dt>
  <dd>El elemento actual siendo procesado en el array.</dd>
  <dt><code>index</code> {{Optional_inline}}</dt>
  <dd>El índice del elemento del array que se está procesando.</dd>
  <dt><code>array</code> {{Optional_inline}}</dt>
  <dd>El array sobre el que ha sido llamada la función <code>some()</code>.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code> {{Optional_inline}}</dt>
 <dd>Valor a usar como <code>this</code> cuando se ejecute <code>callback</code>.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p><code><strong>true</strong></code> si la función <code>callback</code> devuelve un valor {{Glossary("truthy")}} para cualquier elemento del array; en caso contrario, <code><strong>false</strong></code>.</p>

<h2 id="Descripción" name="Descripción">Descripción</h2>

<p><code>some()</code> ejecuta la función <code>callback</code> una vez por cada elemento presente en el array hasta que encuentre uno donde <code>callback</code> retorna un valor verdadero (true). Si se encuentra dicho elemento, <code>some()</code> retorna <code>true</code> inmediatamente. Si no, <code>some()</code> retorna <code>false</code>. <code>callback</code> es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.</p>

<p><code>callback</code> es invocada con tres argumentos: el valor del elemento, el índice del elemento, y el objeto array sobre el que se itera.</p>

<p>Si se indica un parámetro <code>thisArg</code> a <code>some()</code>, se pasará a <code>callback</code> cuando es invocada, para usar como valor <code>this</code>. Si no, el valor {{jsxref("undefined")}} será pasado para usar como valor <code>this</code>. El valor <code>this</code> value observable por <code>callback</code> se determina de acuerdo a <a href="/en-US/docs/Web/JavaScript/Reference/Operators/this">las reglas habituales para determinar el <code>this</code> visible por una función</a>.</p>

<p><code>some()</code> no modifica el array con el cual fue llamada.</p>

<p>El rango de elementos procesados por <code>some()</code> es configurado antes de la primera invocación de <code>callback</code>. Los elementos anexados al array luego de que comience la llamada a <code>some()</code> no serán visitados por <code>callback</code>. Si un elemento existente y no visitado del array es alterado por <code>callback</code>, su valor pasado al <code>callback</code> será el valor al momento que <code>some()</code> visita el índice del elemento; los elementos borrados no son visitados.</p>

<h2 id="Examples" name="Examples">Ejemplos</h2>

<h3 id="Example:_Testing_size_of_all_array_elements" name="Example:_Testing_size_of_all_array_elements">Verificando el valor de los elementos de un array</h3>

<p>El siguiente ejemplo verifica si algún elemento del array es mayor a 10.</p>

<pre class="brush: js">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
</pre>

<h3 id="Example:_Testing_array_elements_using_arrow_functions" name="Example:_Testing_array_elements_using_arrow_functions">Verificando los elementos de un array usando funciones flecha</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Las funciones flecha (Arrow functions)</a> brindan una sintáxis más corta para el mismo test.</p>

<pre class="brush: js">[2, 5, 8, 1, 4].some(elem =&gt; elem &gt; 10);  // false
[12, 5, 8, 1, 4].some(elem =&gt; elem &gt; 10); // true
</pre>

<h3 id="Comprobando_si_un_elemento_existe_en_un_array">Comprobando si un elemento existe en un array</h3>

<p>Para imitar la función del método <code>includes()</code>, esta función personalizada devuelve <code>true</code> si el elemento existe en el array:</p>

<pre class="brush: js">var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<h3 id="Comprobando_si_un_elemento_existe_en_un_array_con_funciones_flecha">Comprobando si un elemento existe en un array con funciones flecha</h3>

<pre class="brush: js">var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal =&gt; val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<h3 id="Convirtiendo_cualquier_valor_a_Boolean">Convirtiendo cualquier valor a Boolean</h3>

<pre class="brush: js">var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true</pre>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<p><code>some()</code> fue agregado al estándar ECMA-262 en la 5ta edición; por ello, puede no estar presente en todas las implementaciones del estándar. Puedes trabajar sobre esto insertando el siguiente código al comienzo de tus scripts, permitiendo el uso de <code>some()</code> en implementaciones que no tienen soporte nativo. Este algoritmo es exactamente el mismo especificado en ECMA-262, 5ta edición, asumiendo que {{jsxref("Global_Objects/Object", "Object")}} y {{jsxref("Global_Objects/TypeError", "TypeError")}} tienen sus valores originales y que <code>fun.call</code> evalúa el valor original de{{jsxref("Function.prototype.call()")}}.</p>

<pre class="brush: js">// Pasos de producción de ECMA-262, Edición 5, 15.4.4.17
// Referencia: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length &gt;&gt;&gt; 0;

    var thisArg = arguments.length &gt;= 2 ? arguments[1] : void 0;
    for (var i = 0; i &lt; len; i++) {
      if (i in t &amp;&amp; fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
</pre>

<h2 id="Especificaciones" name="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.17', 'Array.prototype.some')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.some', 'Array.prototype.some')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.some', 'Array.prototype.some')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores" name="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.some")}}</p>
</div>

<h2 id="Ver_también" name="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
</ul>
