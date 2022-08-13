---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/Reduce
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Prototype
  - Reduce
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Reduce
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/reduce
---
<div>{{JSRef}}</div>

<p>El método <code><strong>reduce()</strong></code> ejecuta una función <strong>reductora</strong> sobre cada elemento de un array, devolviendo como resultado un único valor.</p>

<div>{{EmbedInteractiveExample("pages/js/array-reduce.html")}}</div>

<p>La función <strong>reductora</strong> recibe cuatro argumentos:</p>

<ol>
 <li>Acumulador (<code><em>acc</em></code>)</li>
 <li>Valor Actual (<code><em>cur</em></code>)</li>
 <li>Índice Actual (<em><code>idx</code></em>)</li>
 <li>Array (<em><code>src</code></em>)</li>
</ol>

<p>El valor devuelto de la función <strong>reductora</strong> se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])</var></pre>

<h3 id="Parámetros" name="Parámetros">Parámetros</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Función a ejecutar sobre cada elemento del array (excepto para el primero, si no se proporciona <code>valorInicial</code>), que recibe cuatro parámetros:
 <dl>
  <dt><code>acumulador</code></dt>
  <dd>El acumulador acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el <code>valorInicial</code>, si se proveyó. (Ver a continuación).</dd>
  <dt><code>valorActual</code></dt>
  <dd>El elemento actual que está siendo procesado en el array.</dd>
  <dt><code>índice</code> {{optional_inline}}</dt>
  <dd>El índice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee <code>valorInicial</code>. En caso contrario, comienza desde el índice 1.</dd>
  <dt><code>array</code> {{optional_inline}}</dt>
  <dd>El array sobre el cual se llamó el método <code>reduce()</code>.</dd>
 </dl>
 </dd>
 <dt><code>valorInicial</code> {{optional_inline}}</dt>
 <dd>Un valor a usar como primer argumento en la primera llamada de la función <em><code>callback</code></em>. Si no se proporciona el <em><code>valorInicial</code></em>, el primer elemento del array será utilizado y saltado. Llamando a <code>reduce()</code> sobre un array vacío sin un <em><code>valorInicial</code></em> lanzará un {{jsxref("TypeError")}}.</dd>
</dl>

<h2 id="Descripción" name="Descripción">Descripción</h2>

<p>El método <code>reduce()</code> ejecuta <code>callback</code> una vez por cada elemento presente en el array, excluyendo los huecos del mismo, recibe cuatro argumentos:</p>

<ul>
 <li><code>valorAnterior</code></li>
 <li><code>valorActual</code></li>
 <li><code>indiceActual</code></li>
 <li><code>array</code></li>
</ul>

<p>La primera vez que se llama la función, <code>valorAnterior</code> y <code>valorActual</code> pueden tener uno de dos valores. Si se proveyó un <code>valorInicial</code> al llamar a <code>reduce</code>, entonces <code>valorAnterior</code> será igual al <code>valorInicial</code> y <code>valorActual</code> será igual al primer elemento del array. Si no se proveyó un <code>valorInicial</code>, entonces <code>valorAnterior</code> será igual al primer valor en el <code>array</code> y <code>valorActual</code> será el segundo.</p>

<p>Si el <code>array</code> está vacío y no se proveyó un <code>valorInicial</code> lanzará un {{jsxref("Global_Objects/TypeError", "TypeError")}}. Si el <code>array</code> tiene un sólo elemento (sin importar la posición) y no se proveyó un <code>valorInicial</code>, o si se proveyó un <code>valorInicial</code> pero el arreglo está vacío, se retornará ese único valor sin llamar a la <code>función</code>.</p>

<p>Suponga que ocurre el siguiente uso de <code>reduce</code>:</p>

<pre class="brush: js">[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
});

// Primera llamada
valorAnterior = 0, valorActual = 1, indice = 1

// Segunda llamada
valorAnterior = 1, valorActual = 2, indice = 2

// Tercera llamada
valorAnterior = 3, valorActual = 3, indice = 3

// Cuarta llamada
valorAnterior = 6, valorActual = 4, indice = 4

// el <code>array</code> sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 10
</pre>

<p>Y si proporcionas un <code>valorInicial</code>, el resultado sería como este:</p>

<pre class="brush: js">[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
}, 10);

// Primera llamada
valorAnterior = 10, valorActual = 0, indice = 0

// Segunda llamada
valorAnterior = 10, valorActual = 1, indice = 1

// Tercera llamada
valorAnterior = 11, valorActual = 2, indice = 2

// Cuarta llamada
valorAnterior = 13, valorActual = 3, indice = 3

// Quinta llamada
valorAnterior = 16, valorActual = 4, indice = 4

// el <code>array</code> sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
</pre>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<div class="note">
<p><strong>Polyfill</strong> se refiere a unas líneas de código o un plugin que permite "tener"  (en realidad se simulan de alguna otra manera) las nuevas funcionalidades   de HTML5 en aquellos navegadores que nativamente no lo soportan. Consigue que, en adelante, el código sea transparente para el programador, como si el navegador soportase la funcionalidad nativamente.</p>
</div>

<p><code>reduce</code> es una extensión de JavaScript al estándar ECMA-262; como tal puede que no esté presente en otras implementaciones del estándar. Puedes trabajar con ésto insertando el siguiente código al comienzo de tus scripts, permitiendo el uso de <code>reduce</code> en implementaciones de ECMA-262 que no lo implementan de modo nativo. Este algoritmo es exactamente el mismo usando en Firefox y SpiderMonkey.</p>

<pre class="brush: js">if (!Array.prototype.reduce)
{
  Array.prototype.reduce = function(fun /*, inicial*/)
  {
    var longitud = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    // no se devuelve ningún valor si no hay valor inicial y el array está vacío
    if (longitud == 0 &amp;&amp; arguments.length == 1)
      throw new TypeError();

    var indice = 0;
    if (arguments.length &gt;= 2)
    {
      var rv = arguments[1];
    }
    else
    {
      do
      {
        if (indice in this)
        {
          rv = this[indice++];
          break;
        }

        // si el array no contiene valores, no existe valor inicial a devolver
        if (++indice &gt;= longitud)
          throw new TypeError();
      }
      while (true);
    }

    for (; indice &lt; longitud; indice++)
    {
      if (indice in this)
        rv = fun.call(null, rv, this[indice], indice, this);
    }

    return rv;
  };
}
</pre>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo_Resumir_todos_los_valores_de_un_array" name="Ejemplo:_Resumir_todos_los_valores_de_un_array">Ejemplo: Sumar todos los valores de un <code>array</code></h3>

<pre class="brush: js">var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
// total == 6
</pre>

<h3 id="Ejemplo_Integrar_un_array_a_partir_de_varios_arrays" name="Ejemplo:_Integrar_un_array_a_partir_de_varios_arrays">Ejemplo: Integrar un <code>array</code> a partir de varios <code>arrays</code></h3>

<pre class="brush: js">var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
  return a.concat(b);
});
// integrado es [0, 1, 2, 3, 4, 5]
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.reduce', 'Array.prototype.reduce()')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.reduce")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
</ul>
