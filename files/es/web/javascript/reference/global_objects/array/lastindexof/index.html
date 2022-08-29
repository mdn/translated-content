---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
tags:
  - Array
  - Arreglo
  - ECMAScript 5
  - JavaScript
  - Matriz
  - Prototipo
  - metodo
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/lastIndexOf
---
<div>{{JSRef}}</div>

<p>El método <code><strong>lastIndexOf()</strong></code> devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó <code>-1</code> si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice <code>fromIndex</code>.</p>

<p>{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr.lastIndexOf(searchElement) arr.lastIndexOf(searchElement, fromIndex)</var></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>searchElement</code></dt>
 <dd>Elemento a encontrar en el arreglo.</dd>
 <dt><code>fromIndex</code> {{optional_inline}}</dt>
 <dd>El índice en el que empieza la búsqueda en sentido contrario. Por defecto la longitud del arreglo menos uno (<code>arr.length - 1</code>), es decir, todo el arreglo será recorrido. Si el índice es mayor o igual que la longitud del arreglo, todo el arreglo será recorrido. Si es un valor negatigo, se usará como inicio del desplazamiento el final del arreglo. Darse cuenta que aún cuando el índice es negativo, el arreglo todavía será recorrido desde atrás hacia delante. Si el índice calculado es menor de <code>0</code>, se devolverá <code>-1</code>, es decir, el arreglo no será recorrido.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>El último índice del elemento en el arreglo; <code>-1</code> si no se encuentra.</p>

<h2 id="Descripción">Descripción</h2>

<p><code>lastIndexOf</code> compara <code>searchElement</code> con los elementos del arreglo usando <a href="/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">igualdad estricta</a> (el mismo método es usado para la ===, operador triple igualdad).</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usando_lastIndexOf">Usando <code>lastIndexOf</code></h3>

<p>El siguiente ejemplo usa <code>lastIndexOf</code> para encontrar valores en un arreglo.</p>

<pre class="brush: js">var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
</pre>

<h3 id="Encontrar_todas_las_apariciones_de_un_elemento">Encontrar todas las apariciones de un elemento</h3>

<p>El siguiente ejemplo uses <code>lastIndexOf</code> encuentra todos los índices de un elemento en un arreglo dado, usando {{jsxref("Array.prototype.push", "push")}} añadiéndolos a otro arreglo como elementos encontrados.</p>

<pre class="brush: js">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx &gt; 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]
</pre>

<p>Darse cuenta que en este caso tenemos que tratar <code>idx == 0</code>  de forma separada por que el elemento siempre será encontrado independiemente del valor del parámetro <code>fromIndex</code>  si este es el primer elemento del arreglo. Diferente de como se trata en el método {{jsxref("Array.prototype.indexOf", "indexOf")}}.</p>

<h2 id="Polyfill">Polyfill</h2>

<p><code>lastIndexOf</code> fue añadido al estándar ECMA-262 en la 5ª edición; por tanto puede que no este presente en otras implementaciones del estándar. Puedes solucionarlo escribiendo el siguiente código al principio de tus scripts, pudiendo usar <code>lastIndexOf</code> en implementaciones que no tiene soporte de forma nativa. Este algoritmo es exactamente el especificado en ECMA-262, 5ª edición, suponiendo que {{jsxref("Object")}}, {{jsxref("TypeError")}}, {{jsxref("Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, y {{jsxref("Math.min")}} tienen sus valores originales.</p>

<pre class="brush: js">// Pasos de producción de ECMA-262, Edición 5, 15.4.4.15
// Referencia: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
      t = Object(this),
      len = t.length &gt;&gt;&gt; 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length &gt; 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 &amp;&amp; n != (1 / 0) &amp;&amp; n != -(1 / 0)) {
        n = (n &gt; 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n &gt;= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k &gt;= 0; k--) {
      if (k in t &amp;&amp; t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
</pre>

<p>De nuevo, darse cuenta que esta implementación tiene como objeto la completa compatibilidad con <code>lastIndexOf</code> en Firefox y el motor SpiderMonkey JavaScript, en particular en varios casos que son posiblemente extremos. Si pretendes usar esta funcionalidad en aplicaciones reales, es posible que puedes calcular <code>from</code> con código menos complejo si ignoras estos casos.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.15', 'Array.prototype.lastIndexOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>{{Compat("javascript.builtins.Array.lastIndexOf")}}</div>

<div id="compat-mobile"></div>

<h2 id="Notas_de_compatibilidad">Notas de compatibilidad</h2>

<ul>
 <li>Desde Firefox 47 {{geckoRelease(47)}},  el método ya no devolverá <code>-0</code>. Por ejemplo, <code>[0].lastIndexOf(0, -0)</code> siempre devolverá <code>+0</code> ({{bug(1242043)}}).</li>
</ul>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
 <li>{{jsxref("TypedArray.prototype.lastIndexOf()")}}</li>
</ul>
