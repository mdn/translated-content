---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
tags:
  - Array
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/reduceRight
---
<div>{{JSRef("Objetos_globales", "Array")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>Aplica una función simultáneamente contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un único valor.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval"><i>array</i>.reduceRight(
<i>funcion</i>[,
<i>valorInicial</i>])
</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Función a ejecutar para cada valor del array.</dd>
 <dt><code>initialValue</code></dt>
 <dd>Objeto a usar como primer argumento en la primera llamada de la <code>funcion</code>.</dd>
</dl>

<h3 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h3>

<p><code>reduceRight</code> ejecuta la <code>funcion</code> una vez para cada elemento presente en el array, excluyendo los huecos del mismo, recibiendo cuatro argumentos: el valor inicial (o valor de la llamada previa de <code>funcion</code>), el valor del elemento actual, el índice actual y el array sobre el que ocurre la iteración.</p>

<p>La llamada a la <code>funcion</code> de reduceRight sería similar a esto:</p>

<pre class="brush: js">.reduceRight(function(valorPrevio, valorActual, indice, array){
  // ...
})
</pre>

<p>La primera vez que se llama a la función, el <code>valorPrevio</code> y el <code>valorActual</code> puede ser uno de los dos valores. Si se incluye un <code>valorInicial</code> en la llamada a <code>reduceRight</code>, entonces el <code>valorPrevio</code> será igual al <code>valorInicial</code> y el <code>valorActual</code> será igual al último valor del array. Si no se incluye ningún <code>valorInicial</code>, entonces el <code>valorPrevio</code> será igual al último valor del array y el <code>valorActual</code> será igual al penúltimo valor.</p>

<p>Algún ejemplo de la ejecución de la función paso a paso sería similar a esto:</p>

<pre class="brush: js">[0,1,2,3,4].reduceRight(function(valorPrevio, valorActual, indice, array){
  return valorPrevio + valorActual;
});

// First call
valorPrevio = 4, valorActual = 3, indice = 3

// Second call
valorPrevio = 7, valorActual = 2, indice = 2

// Third call
valorPrevio = 9, valorActual = 1, indice = 1

// Fourth call
valorPrevio = 10, valorActual = 0, indice = 0

// el array sobre el que se llama a reduceRight siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 10
</pre>

<p>Y si proporcionas un <code>valorInicial</code>, el resultado sería como este:</p>

<pre class="brush: js">[0,1,2,3,4].reduceRight(function(valorPrevio, valorActual, indice, array){
  return valorPrevio + currentValue;
}, 10);

// Primera llamada
valorPrevio = 10, valorActual = 4, indice = 4

// Segunda llamada
valorPrevio = 14, valorActual = 3, indice = 3

// Tercera llamada
valorPrevio = 17, valorActual = 2, indice = 2

// Cuarta llamada
valorPrevio = 19, valorActual = 1, indice = 1

// Quinta llamada
valorPrevio = 20, valorActual = 0, indice = 0

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
</pre>

<h2 id="Compatibilidad" name="Compatibilidad">Compatibilidad</h2>

<p><code>reduceRight</code> es una extensión de JavaScript al estándar ECMA-262; como tal puede que no esté presente en otras implementaciones del estándar. Puedes trabajar con ésto insertando el siguiente código al comienzo de tus scripts, permitiendo el uso de <code>reduceRight</code> en implementaciones de ECMA-262 que no lo implementan de modo nativo. Este algoritmo es exactamente el mismo usando en Firefox y SpiderMonkey.</p>

<pre class="brush: js">if (!Array.prototype.reduceRight)
{
  Array.prototype.reduceRight = function(fun /*, inicial*/)
  {
    var longitud = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    // no se devuelve ningún valor si no hay valor inicial y el array está vacío
    if (longitud == 0 &amp;&amp; arguments.length == 1)
      throw new TypeError();

    var indice = longitud - 1;
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
          rv = this[indice--];
          break;
        }

        // si el array no contiene valores, no existe valor incial a devolver
        if (--indice &lt; 0)
          throw new TypeError();
      }
      while (true);
    }

    for (; indice &gt;= 0; indice--)
    {
      if (indice in this)
        rv = fun.call(null, rv, this[indice], indice, this);
    }

    return rv;
  };
}
</pre>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplos:_Resumir_todos_los_valores_de_un_array" name="Ejemplos:_Resumir_todos_los_valores_de_un_array">Ejemplos: Resumir todos los valores de un array</h3>

<pre class="brush: js">var total = [0, 1, 2, 3].reduceRight(function(a, b) { return a + b; });
// total == 6
</pre>

<h3 id="Ejemplo:_Integrar_un_array_a_partir_de_varios_arrays" name="Ejemplo:_Integrar_un_array_a_partir_de_varios_arrays">Ejemplo: Integrar un array a partir de varios arrays</h3>

<pre class="brush: js">var integrado = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
  return a.concat(b);
}, []);
// integrado es [4, 5, 2, 3, 0, 1]
</pre>

<h2 id="V.C3.A9ase_tambi.C3.A9n" name="V.C3.A9ase_tambi.C3.A9n">Véase también</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
