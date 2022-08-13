---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
tags:
  - ECMAScript 2015
  - JavaScript
  - Referencia
  - Vector
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/from
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/from
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Array.from()</strong></code> crea una nueva instancia de <code>Array</code> a partir de un objeto iterable.</p>

<p>{{EmbedInteractiveExample("pages/js/array-from.html")}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code>Array.from(arrayLike[, mapFn[, thisArg]])
</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>arrayLike</code></dt>
 <dd>Objeto iterable para convertirlo en un array.</dd>
 <dt><code>mapFn</code>{{Optional_inline}}</dt>
 <dd>Función de mapa para llamar a cada elemento de la matriz.</dd>
 <dt><code>thisArg</code>{{Optional_inline}}</dt>
 <dd>Valor para usar como <code>this</code> al ejecutar <code>mapFn</code>.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Una nueva instancia de {{jsxref("Array")}}.</p>

<h2 id="Descripción">Descripción</h2>

<p><code>Array.from()</code> permite crear <code>Arrays</code> de:</p>

<ul>
 <li>Objetos array-like (objetos con propiedad <code>length</code> o elementos indexados).</li>
 <li><a href="/es/docs/Web/JavaScript/Referencia/Iteration_protocols">Objetos iterables</a> (objetos de los cuales se pueden obtener sus elementos como {{jsxref("Map")}} y {{jsxref("Set")}}).</li>
</ul>

<p><code>Array.from()</code> tiene un parámetro opcional <code>mapFn</code>, que te permite ejecutar una función {{jsxref("Array.prototype.map", "map")}}  a cada elemento del array (o a la subclase del objeto) que se ha creado. Para aclararlo, <code>Array.from(obj, mapFn, thisArg)</code> es igual que <code>Array.from(obj).map(mapFn, thisArg)</code>, excepto en que éste no crea un array intermedio. Esto es importante para ciertas subclases de array, <a href="/es/docs/Web/JavaScript/Vectores_tipados">vectores tipados</a>, ya que el vector intermedio necesitaría tener valores truncados para trabajar con el tipo adecuado.</p>

<p>La propiedad <code>length</code> del método <code>from()</code> es 1.</p>

<p>En ES2015, la sintaxis de clase permite la subclasificación de clases integradas y definidas por el usuario; como resultado, los métodos estáticos como <code>Array.from</code> son "heredados" por subclases de <code>Array</code> y crean nuevas instancias de la subclase, no <code>Array</code>.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Array_desde_un_String">Array desde un <code>String</code></h3>

<pre class="brush: js">Array.from('foo');
// [ "f", "o", "o" ]</pre>

<h3 id="Array_desde_un_Set">Array desde un <code>Set</code></h3>

<pre class="brush: js">const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]</pre>

<h3 id="Array_desde_un_Map">Array desde un <code>Map</code></h3>

<pre class="brush: js">const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
</pre>

<h3 id="Array_desde_un_objeto_Array-like_(argumentos)">Array desde un objeto Array-like (argumentos)</h3>

<pre class="brush: js">function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]</pre>

<h3 id="Usando_una_función_de_flecha_y_Array.from">Usando una función de flecha y <code>Array.from</code></h3>

<pre class="brush: js">// Usando una función de flecha como función
// para manipular los elementos
Array.from([1, 2, 3], x =&gt; x + x);
// [2, 4, 6]


// Generar secuencia de números
// Puesto que el array se inicializa con `undefined` en cada posición,
// el valor de `v` a continuación será `undefined`
Array.from({length: 5}, (v, i) =&gt; i);
// [0, 1, 2, 3, 4]
</pre>

<h3 id="Generador_de_secuencia_(rango)">Generador de secuencia (rango)</h3>

<pre class="brush: js">// Función generadora de secuencia (comúnmente llamado "rango", ej. Clojure, PHP, etc.)
const range = (start, stop, step) =&gt; Array.from({ length: (stop - start) / step + 1}, (_, i) =&gt; start + (i * step));

// Genera un rango de números entre 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Genera un rango de números entre 1..10 con saltos de 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generar el abecedario utilizando Array.from haciendo uso de que se ordena como secuencia
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =&gt; String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p><code>Array.from</code> fue añadido en el estándar ECMA-262 en la 6ta edición (ES2015); así que no puede estar presente en otras implementaciones del estándar. Puedes usarlo insertando este código al comienzo de sus scripts, permitiendo el uso de <code>Array.from</code> en implementaciones que no lo soportan. Este algoritmo es el mismo especificado en ECMA-262, 6ta edición, suponiendo que <code>Object</code> y <code>TypeError</code> tengan sus valores originales y <code>callback.call</code> evalúa el valor original de {{jsxref("Function.prototype.call")}}. Adicionalmente, ya que verdaderos iterables pueden no ser polyficados, esta implementación no soporta iterables genéricos como definidos en la 6ta edición de ECMA-262.</p>

<pre class="brush: js">// Pasos de producción de ECMA-262, Edición 6, 22.1.2.1
// Referencia: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number &gt; 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // La propiedad length del método from es 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Deje a C ser el este valor.
      var C = this;

      // 2. Deje que los elementos sean ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. Retornar IfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requiere un objeto array-like - not null or undefined");
      }

      // 4. Si mapfn no está definida, entonces deja que sea false.
      var mapFn = arguments.length &gt; 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. si no
        // 5. a If IsCallable(mapfn) es false, lanza una excepción TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: si hay mapFn, el segundo argumento debe ser una función');
        }

        // 5. b. Si thisArg se suministró, deje que T sea thisArg; si no, deje que T esté indefinido.
        if (arguments.length &gt; 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k &lt; len… (also steps a - h)
      var kValue;
      while (k &lt; len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
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
   <td>{{SpecName('ES6', '#sec-array.from', 'Array.from')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.from', 'Array.from')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Array.from")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("TypedArray.from()")}}</li>
</ul>
