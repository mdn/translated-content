---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Prototipo
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/fill
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/fill
---
<div>{{JSRef}}</div>

<p>El método <code><strong>fill()</strong></code> cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto <code>array.length</code>). Devuelve el arreglo modificado.</p>

<p>{{EmbedInteractiveExample("pages/js/array-fill.html")}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.fill(<var>value</var>[, <var>start<var> = 0[, <var>end</var> = this.length]])</var></var></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>Valor con el que se va a rellenar el arreglo. (Nótese que todos los elementos en el arreglo tendrán este mismo valor).</dd>
 <dt><code>start</code> {{optional_inline}}</dt>
 <dd>Índice inicial, por defecto 0.</dd>
 <dt><code>end</code> {{optional_inline}}</dt>
 <dd>Índice final, por defecto <code>this.length</code>.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>El arreglo modificado, rellenado con <code>valor</code>.</p>

<h2 id="Descripción">Descripción</h2>

<ul>
 <li>Si <code>start</code> es negativo, se interpreta como <code>array.length + start</code>.</li>
 <li>Si <code>end</code> es negativo, se interpreta como <code>array.length + end</code>.</li>
 <li><code>fill</code> es genérico de forma intencional: no requiere que su valor <code>this</code> sea un objeto <code>Array</code>.</li>
 <li><code>fill</code> es un método mutador: modifica el arreglo sobre el que se invoca; no devuelve una copia de éste.</li>
 <li>Si el primer parámetro es un objeto, copia su referencia y rellena el arreglo con referencias a dicho objeto.</li>
</ul>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Pasos 1-2.
      if (this == null) {
        throw new TypeError('esto es nulo o no definido');
      }

      var O = Object(this);

      // Pasos 3-5.
      var len = O.length &gt;&gt;&gt; 0;

      // Pasos 6-7.
      var start = arguments[1];
      var relativeStart = start &gt;&gt; 0;

      // Paso 8.
      var k = relativeStart &lt; 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Pasos 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end &gt;&gt; 0;

      // Paso 11.
      var final = relativeEnd &lt; 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Paso 12.
      while (k &lt; final) {
        O[k] = value;
        k++;
      }

      // Paso 13.
      return O;
    }
  });
}</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.fill', 'Array.prototype.fill')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.fill', 'Array.prototype.fill')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<p>{{Compat("javascript.builtins.Array.fill")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("TypedArray.prototype.fill()")}}</li>
</ul>
