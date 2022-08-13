---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Referencia
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/indexOf
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
---
<div>{{JSRef}}</div>

<p>El método <strong>indexOf()</strong> retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.</p>

<div class="note">
<p><strong>Nota:</strong> Para el método String, ver {{jsxref("String.prototype.indexOf()")}}.</p>
</div>

<h2 id="Syntax" name="Syntax">Sintaxis</h2>

<pre class="syntaxbox"><code><em>array</em>.indexOf(<em>searchElement</em>[, <em>fromIndex</em>])</code></pre>

<h3 id="Parameters" name="Parameters">Parámetros</h3>

<dl>
 <dt><code>searchElement</code></dt>
 <dd>Elemento a encontrar en el array.</dd>
 <dt><code>fromIndex</code> {{optional_inline}}</dt>
 <dd>Indica el índice por el que se comienza la búsqueda. Por defecto es 0, por lo que se busca en todo el array. Si el índice es mayor o igual a la longitud del array, devuelve -1, ya que no se buscaría en el array. Si el valor es negativo, se toma restando posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental. Si el índice calculado es menor de 0, la búsqueda se realizará por todo el array.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>El primer índice del elemento en la matriz; -1 si no se encuentra.</p>

<h2 id="Description" name="Description">Descripción</h2>

<p><code>indexOf()</code> compara <code>searchElement</code> con los elementos del array usando <a href="/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators#Using_the_Equality_Operators" title="JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">igualdad estricta</a> (el mismo método que cuando se usa ===, o el operador igualdad-triple).</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usando_indexOf()">Usando <code>indexOf()</code></h3>

<p>El siguiente ejemplo usa <code>indexof()</code> para localizar valores en un array </p>

<pre class="brush: js">var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0</pre>

<h3 id="Encontrar_todas_las_apariciones_de_un_elemento">Encontrar todas las apariciones de un elemento</h3>

<pre class="brush: js">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]</pre>

<h3 id="Encontrar_si_un_elemento_existe_en_la_matriz_o_no_y_actualizar_la_matriz">Encontrar si un elemento existe en la matriz o no y actualizar la matriz</h3>

<pre class="brush: js">function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('La nueva colección de vegetales es: ' + veggies);
    } else if (veggies.indexOf(veggie) &gt; -1) {
        console.log(veggie + ' ya existe en la colección de verduras.');
    }
}

var veggies = ['patata', 'tomate', 'chiles', 'pimientoverde'];

updateVegetablesCollection(veggies, 'espinaca');
// La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
updateVegetablesCollection(veggies, 'espinaca');
// La espinaca ya existe en la colección de verduras.</pre>

<p> </p>

<h2 id="Compatibility" name="Compatibility">Polyfill</h2>

<p><code>indexOf()</code> se agregó al estándar ECMA-262 en la 5<sup>a</sup> edición; por tanto no está implementado en todos los navegadores. Puedes hacerlo funcionar insertando el siguiente código al comienzo de tus scripts, permitiendo usar  <code>indexOf()</code> en implementaciones que no lo soporten de forma nativa. Este algoritmo es exáctamente el especificado en ECMA-262, 5ª edición, suponiendo que {{jsxref("Global_Objects/TypeError", "TypeError")}} y {{jsxref("Math.abs()")}} tienen sus valores originales.</p>


<pre class="brush: js">if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function indexOf(member, startFrom) {
    /*
    En el modo no estricto, si la variable `this` es null o indefinida, entonces se establece
    en el objeto ventana. De lo contrario, `this` se convierte automáticamente en un objeto.
    En modo estricto, si la variable `this` es nula o indefinida, se lanza `TypeError`.
    */
    if (this == null) {
      throw new TypeError("Array.prototype.indexOf() - no se puede convertir `" + this + "` en objeto");
    }

    var
      index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
      that = this instanceof Object ? this : new Object(this),
      length = isFinite(that.length) ? Math.floor(that.length) : 0;

    if (index &gt;= length) {
      return -1;
    }

    if (index &lt; 0) {
      index = Math.max(length + index, 0);
    }

    if (member === undefined) {
      /*
        Dado que `member` no está definido, las claves que no existan tendrán el valor de `same`
        como `member` y, por lo tanto, es necesario verificarlas.
      */
      do {
        if (index in that &amp;&amp; that[index] === undefined) {
          return index;
        }
      } while (++index &lt; length);
    } else {
      do {
        if (that[index] === member) {
          return index;
        }
      } while (++index &lt; length);
    }

    return -1;
  };
}</pre>

<p>Sin embargo, si está más interesado en todos los pequeños trozos técnicos definidos por el estándar ECMA, y está menos preocupado por el rendimiento o la concisión, entonces usted puede encontrar esta polyfill más descriptivo que sea más útil.</p>

<pre class="brush: js">// Pasos de producción de ECMA-262, Edición 5, 15.4.4.14
// Referencia: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Dejar que `o` sea el resultado de llamar a ToObject
    //    pasando este valor como argumento.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Dejar que `lenValue` sea el resultado de llamar al método interno
    //    de `o` con el argumento "length".
    // 3. Dejar que len sea ToUint32(lenValue).
    var len = o.length &gt;&gt;&gt; 0;

    // 4. Si `len` es 0, devolver -1.
    if (len === 0) {
      return -1;
    }

    // 5. Si se pasó el argumento `fromIndex`, deje que `n` sea
    //    ToInteger(fromIndex); si no, que `n` sea 0.
    var n = fromIndex | 0;

    // 6. Si n &gt;= len, devolver -1.
    if (n &gt;= len) {
      return -1;
    }

    // 7. Si n &gt;= 0, entonces deja que `k` sea `n`.
    // 8. Si no, n&lt;0, deja que `k` sea `len - abs(n)`.
    //    Si `k` es menor que 0, entonces deja que `k` sea 0.
    k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

    // 9. Repite, mientras k &lt; len
    while (k &lt; len) {
      // a. Dejar que `Pk` sea ToString(k).
      //   Esto está implícito para los operandos LHS del operador in
      // b. Dejar que kPresent sea el resultado de llamar al método
      //    interno `HasProperty` de `o` con el argumento `Pk`.
      //   Este paso se puede combinar con `c`
      // c. Si kPresent es verdadero, entonces
      //    i.  Dejar que `elementK` sea el resultado de llamar al método
      //        interno de `o` con el argumento ToString(k).
      //   ii.  Deje que `same` sea el resultado de aplicar el
      //        Algoritmo de comparación de igualdad estricta a
      //        searchElement y elementK.
      //  iii.  Si `same` es true, devuelve `k`.
      if (k in o &amp;&amp; o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table>
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.14', 'Array.prototype.indexOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definición inicial. Implementado en JavaScript 1.6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("javascript.builtins.Array.indexOf")}}</p>

<h2 id="Notas_de_compatibilidad">Notas de compatibilidad</h2>

<ul>
 <li>Comenzando con Firefox 47 {{geckoRelease(47)}}, este método ya no devolverá <code>-0</code>. Por ejemplo, <code>[0] .indexOf (0, -0)</code> siempre devolverá <code>+0</code> ({{bug(1242043)}}).</li>
</ul>

<div id="compat-mobile"> </div>

<h2 id="See_also" name="See_also">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
</ul>
