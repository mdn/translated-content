---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Prototipo
  - Referencia
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/find
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/find
---
<div>{{JSRef}}</div>

<p>El método <code><strong>find()</strong></code> devuelve el <strong>valor</strong> del <strong>primer elemento</strong> del array que cumple la función de prueba proporcionada.</p>

<div>{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}</div>



<ul>
 <li>Si necesitas el <strong>índice</strong> del elemento encontrado en el array, utiliza {{jsxref("Array.findIndex", "findIndex()")}}.</li>
 <li>Si necesitas encontrar el <strong>índice de un elemento</strong>, {{jsxref("Array.prototype.indexOf()")}}. (Es similar a {{jsxref("Array.findIndex", "findIndex()")}}, pero comprueba la igualdad de cada elemento con el valor en lugar de usar una función de prueba.)</li>
 <li>Si necesitas encontrar si un valor <strong>existe</strong> en un array, utiliza {{jsxref("Array.prototype.includes()")}}.</li>
 <li>Si necesitas encontrar si algún elemento cumple la función de prueba proporcionada, usa {{jsxref("Array.prototype.some()")}}.</li>
</ul>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.find(<var>callback(element[, index[, array]])</var>[, <var>thisArg</var>])</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Función que se ejecuta sobre cada valor en el array, tomando tres argumentos:
 <dl>
  <dt><code>element</code></dt>
  <dd>El elemento actual que se está procesando en el array.</dd>
  <dt><code>index</code> {{optional_inline}}</dt>
  <dd>El índice (posición) del elemento actual que se está procesando en el array.</dd>
  <dt><code>array</code> {{optional_inline}}</dt>
  <dd>El array desde el que se llama al método <code>find</code>.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code> {{optional_inline}}</dt>
 <dd>Objeto a usar como <code><a href="/es/docs/Web/JavaScript/Referencia/Operadores/this">this</a></code> cuando se ejecuta <code>callback</code>.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>El <strong>valor</strong> del <strong>primer elemento</strong> del array que cumple la función de prueba proporcionada; de lo contrario, devuelve {{jsxref("undefined")}}.</p>

<h2 id="Descripción">Descripción</h2>

<p>El método <code>find</code> ejecuta la función <code>callback</code> una vez por cada índice del array hasta que encuentre uno en el que el <code>callback</code> devuelva un valor <a href="/es/docs/Glossary/Truthy">verdadero</a>. Si es así, <code>find</code> devuelve inmediatamente el valor del elemento. En caso contrario, <code>find</code> devuelve {{jsxref("undefined")}}.</p>

<p><code>callback</code> se invoca con tres argumentos: el valor del elemento, el índice del elemento y el objeto <code>Array</code> que está siendo recorrido.</p>

<p>Si un parámetro <code>thisArg</code> es proporcionado al método <code>find</code>, este será utilizado como <code>this</code> para cada invocación del callback. Si no se proporciona el parámetro, entonces se utiliza {{jsxref("undefined")}}.</p>

<p>El método <code>find</code> no transforma el array desde el cual es llamado, pero la función proporcionada en <code>callback</code> sí. En ese caso, los elementos procesados por <code>find</code> son establecidos <em>antes</em> de la primera invocación de <code>callback</code>. Por lo tanto:</p>

<ul>
 <li><code>callback</code> no visitará ningún elemento añadido al array después de que comience la llamada a <code>find</code>.</li>
 <li>Si un elemento existente no visitado del array es modificado por <code>callback</code>, su valor que se pasa al <code>callback</code> que lo visita será el valor en el momento en que <code>find</code> visita ese índice del elemento.</li>
 <li>Los elementos que sean {{jsxref("delete", "deleted")}} (eliminados) aún se visitan.</li>
</ul>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Encontrar_un_objeto_en_un_array_por_una_de_sus_propiedades">Encontrar un objeto en un array por una de sus propiedades</h3>

<pre class="brush: js">const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

function esCereza(fruta) {
    return fruta.nombre === 'cerezas';
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }</pre>

<h4 id="Utilizando_funciones_flecha_y_destructuring">Utilizando funciones flecha y destructuring</h4>

<pre class="brush: js">const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

const resultado = inventario.find( fruta =&gt; fruta.nombre === 'cerezas' );

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }</pre>

<h3 id="Encontrar_un_número_primo_en_un_array">Encontrar un número primo en un array</h3>

<p>El siguiente ejemplo encuentra un elemento en un array que sea un número primo (o devuelve {{jsxref("undefined")}} si no hay un número primo).</p>

<pre class="brush: js">function isPrime(element, index, array) {
  let start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, no encontrado
console.log([4, 5, 8, 12].find(isPrime)); // 5
</pre>

<p>Los siguientes ejemplos muestran cómo elementos no existentes o eliminados son visitados y el valor pasado a <code>callback</code> es su valor cuando son visitados.</p>

<pre class="brush: js">// Declarar un array sin elementos en los índices 2, 3 y 4
const array = [0,1,,,,5,6];

// Muestra todos los índices, no sólo aquellos que tienen valores asignados
array.find(function(value, index) {
  console.log('Visited index ' + index + ' with value ' + value);
});

// Mostrar todos los índices, incluyendo los eliminados
array.find(function(value, index) {

  // Eliminar el elemento 5 en la primera iteración
  if (index == 0) {
    console.log('Deleting array[5] with value ' + array[5]);
    delete array[5];
  }
  // El elemento 5 se visita aun habiendo sido eliminado
  console.log('Visited index ' + index + ' with value ' + value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Este método ha sido añadido a la espeficicación ECMAScript 2015 y puede no estar disponible en todas las implementaciones de JavaScript aún. Sin embargo, puedes utilizar el siguiente polyfill de <code>Array.prototype.find</code>:</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
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
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
</pre>

<p>Si necesitas dar soporte a motores de JavaScript realmente obsoletos que no soportan <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>, es mejor no utilizar el polyfill para los métodos <code>Array.prototype</code>, ya que no podrás hacerlos no enumerables.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.find', 'Array.prototype.find')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Array.find")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.findIndex()")}} – encuentra y devuelve un índice</li>
 <li>{{jsxref("Array.prototype.includes()")}} – comprueba que un valor existe en el array</li>
 <li>{{jsxref("Array.prototype.filter()")}} – elimina todos los elementos que no coincidan</li>
 <li>{{jsxref("Array.prototype.every()")}} – comprueba todos los elementos</li>
 <li>{{jsxref("Array.prototype.some()")}} – comprueba hasta que un elemento coincide</li>
</ul>
