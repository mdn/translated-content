---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Prototipo
  - Referencia
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/includes
---
<div>{{JSRef}}</div>

<p>El método <code><strong>includes()</strong></code> determina si una matriz incluye un determinado elemento, devuelve <code>true</code> o <code>false</code> según corresponda.</p>

<p>{{EmbedInteractiveExample("pages/js/array-includes.html")}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre><var>arr</var>.includes(<var>searchElement[</var>, <var>fromIndex]</var>)</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>valueToFind</code></dt>
 <dd>
 <p>El valor a buscar.</p>

 <div class="blockIndicator note">
 <p><strong>Nota: </strong>Al comparar cadenas de texto y caracteres, <code>includes()</code> <strong>distingue mayúsculas y minúsculas</strong>.</p>
 </div>
 </dd>
 <dt><code>fromIndex</code> {{optional_inline}}</dt>
 <dd>Posición en la matriz en la cuál se debe comenzar a buscar <code>valueToFind</code>; el primer caracter a buscar se encuentra en <code>fromIndex</code>. Un valor negativo inicia la búsqueda desde array.length + fromIndex en adelante. El valor por defecto es 0.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un {{jsxref ("Boolean")}} que es <code>true</code> si el valor <code>valueToFind</code> se encuentra dentro de la matriz (o la parte de la matriz indicada por el índice <code>fromIndex</code>, si se especifica). Todos los valores de cero se consideran iguales independientemente del signo (es decir, -0 se considera igual a 0 y +0), pero <code>false</code> no se considera igual a 0.</p>

<div class="note">
<p><strong>Note:</strong> Técnicamente hablando, <code>include()</code> usa el algoritmo <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality">sameValueZero</a></code> para determinar si se encuentra el elemento dado</p>
</div>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
</pre>

<h3 id="fromIndex_es_mayor_o_igual_que_la_longitud_de_la_matriz"><code>fromIndex</code> es mayor o igual que la longitud de la matriz</h3>

<p>Si <code>fromIndex</code> es mayor o igual que la longitud de la matriz, se devuelve <code>false</code>. No se buscará en la matriz.</p>

<pre class="brush: js">var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false</pre>

<h3 id="El_índice_calculado_es_menor_que_0">El índice calculado es menor que 0</h3>

<p>Si <code>fromIndex</code> es negativo, el índice calculado se calcula para usarse como una posición en la matriz en la cual comenzar a buscar <code>searchElement</code>. Si el índice calculado es menor que 0, se buscará la matriz completa.</p>

<pre class="brush: js">// la longitud de la matriz es 3
// fromIndex es -100
// el índice calculado es 3 + (-100) = -97

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true</pre>

<h3 id="includes()_utilizado_como_método_genérico"><code>includes()</code> utilizado como método genérico</h3>

<p>El método <code>includes()</code> es intencionalmente genérico. No requiere que este valor sea un objeto Array, por lo que se puede aplicar a otros tipos de objetos (por ejemplo, objetos tipo array). El siguiente ejemplo ilustra el método <code>includes()</code> llamado en el objeto de argumentos de la función.</p>

<pre class="brush: js">(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" es null o no está definido');
      }

      // 1. Dejar que O sea ? ToObject(this value).
      var o = Object(this);

      // 2. Dejar que len sea ? ToLength(? Get(O, "length")).
      var len = o.length &gt;&gt;&gt; 0;

      // 3. Si len es 0, devuelve false.
      if (len === 0) {
        return false;
      }

      // 4. Dejar que n sea ? ToInteger(fromIndex).
      //    (Si fromIndex no está definido, este paso produce el valor 0.)
      var n = fromIndex | 0;

      // 5. Si n ≥ 0, entonces
      //  a. Dejar que k sea n.
      // 6. Else n &lt; 0,
      //  a. Dejar que k sea len + n.
      //  b. Si k &lt; 0, Dejar que k sea 0.
      var k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' &amp;&amp; typeof y === 'number' &amp;&amp; isNaN(x) &amp;&amp; isNaN(y));
      }

      // 7. Repite, mientras k &lt; len
      while (k &lt; len) {
        // a. Dejar que elementK sea el resultado de ? Get(O, ! ToString(k)).
        // b. Si SameValueZero(searchElement, elementK) es true, devuelve true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Incrementa k por 1.
        k++;
      }

      // 8. Devuelve false
      return false;
    }
  });
}</pre>

<p>Si necesita admitir motores de JavaScript realmente obsoletos que no son compatibles con <code><a href="/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>, es mejor no rellenar los métodos <code>Array.prototype</code>, ya que no puede hacerlos no enumerables.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
  <tr>
   <td>{{SpecName('ES7', '#sec-array.prototype.includes', 'Array.prototype.includes')}}</td>
   <td>{{Spec2('ES7')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.includes', 'Array.prototype.includes')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Array.includes")}}</p>
</div>

<div id="compat-mobile"></div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
</ul>
