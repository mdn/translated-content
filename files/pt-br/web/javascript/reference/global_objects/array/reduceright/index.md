---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
---
<div>{{JSRef("Global_Objects", "Array")}}</div>

<h2 id="Summary" name="Summary">Sumário</h2>

<p>O método <code><strong>reduceRight()</strong></code> aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox"><code><var>arr</var>.reduceRight(<var>callback</var>[, <var>initialValue</var>])</code></pre>

<h3 id="Parameters" name="Parameters">Parâmetros</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Função para executar em cada valor do array, recebendo quatro argumentos:
 <dl>
  <dt><code>previousValue</code></dt>
  <dd>O valor anteriormente retornado na ultima invocação do callback, ou o <code>initialValue</code>, se este for o recebido. (Ver abaixo.)</dd>
  <dt><code>currentValue</code></dt>
  <dd>O valor atualmente sendo processado no array.</dd>
  <dt><code>index</code></dt>
  <dd>O índice do valor atualmente sendo processado no array.</dd>
  <dt><code>array</code></dt>
  <dd>O array que foi chamado para ser reduzido.</dd>
 </dl>
 </dd>
 <dt><code>initialValue</code></dt>
 <dd>Opcional. Objeto para ser usado como argumento inicial da primeria chamada do callback.</dd>
</dl>

<h2 id="Description" name="Description">Descrição</h2>

<p><code>reduceRight</code> executa a função callback uma vez para cada elemento presente no array, excluindo buracos no array, recebendo quatro argumentos: o valor inicial (ou o valor da chamada anterior do callback), o valor do elemento atual, o índice do elemento atual, e o array onde a operação está acontecendo.</p>

<p>A chamada ao callback reduceRight <font face="Consolas, Liberation Mono, Courier, monospace">irá parecer com uma chamada assim</font>:</p>

<pre class="brush: js">array.reduceRight(function(previousValue, currentValue, index, array) {
  // ...
});
</pre>

<p>A primeira vez que a função é chamada, o <code>previousValue</code> e o <code>currentValue</code> podem ser um de dois valores. Se um <code>initialValue</code> foi recebido na chamada do <code>reduceRight</code>, então o <code>previousValue</code> sera iqual ao <code>initialValue</code> e o <code>currentValue</code> será igual ao ultimo valor no array. Se o <code>initialValue</code> não foi recebido, então o <code>previousValue será igual ao ultimo valor no array e o </code><code>currentValue</code> será igual ao penultimo valor no array.</p>

<p>Se o array é vazio e nenhum <code>initialValue </code>foi recebido, {{jsxref("Global_Objects/TypeError", "TypeError")}} será lançado. Se o array somente tem um elemento (independentemente da posição dele) e o <code>initialValue </code>não foi recebido, ou se o <code>initialValue</code> foi recebido mas o array é vazio, o valor em si será retornado sem chamar o <code>callback</code>.</p>

<p>Alguns exemplos de execuções da função e como será parecida a chamada:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
</pre>

<p>O callback será invocado quatro vezes, com os argumentos e valores de retornos em cada chamada será como o seguinte:</p>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col"><code>previousValue</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Primeira chamada</th>
   <td><code>4</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>7</code></td>
  </tr>
  <tr>
   <th scope="row">Segunda chamada</th>
   <td><code>7</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>9</code></td>
  </tr>
  <tr>
   <th scope="row">Terceira chamada</th>
   <td><code>9</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th scope="row">Quarta chamada</th>
   <td><code>10</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>10</code></td>
  </tr>
 </tbody>
</table>

<p>O valor retornado pelo <code>reduceRight</code> será o valor retornado pela ultima chamada ao callback(<code>10</code>).</p>

<p>E se você também passou um <code>initialValue</code>, o resultado irá ser como a seguir:</p>

<pre class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);
</pre>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col"><code>previousValue</code></th>
   <th scope="col"><code>currentValue</code></th>
   <th scope="col"><code>index</code></th>
   <th scope="col"><code>array</code></th>
   <th scope="col">return value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Primeira chamada</th>
   <td><code>10</code></td>
   <td><code>4</code></td>
   <td><code>4</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>14</code></td>
  </tr>
  <tr>
   <th scope="row">Segunda chamada</th>
   <td><code>14</code></td>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>17</code></td>
  </tr>
  <tr>
   <th scope="row">Terceira chamada</th>
   <td><code>17</code></td>
   <td><code>2</code></td>
   <td><code>2</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>19</code></td>
  </tr>
  <tr>
   <th scope="row">Quarta chamada</th>
   <td><code>19</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
  <tr>
   <th scope="row">Quinta chamada</th>
   <td><code>20</code></td>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>[0, 1, 2, 3, 4]</code></td>
   <td><code>20</code></td>
  </tr>
 </tbody>
</table>

<p>O valor retornado pelo <code>reduceRight</code> desta vez será, obviamente, <code>20</code>.</p>

<h2 id="Examples" name="Examples">Exemplos</h2>

<h3 id="Example_Sum_up_all_values_within_an_array" name="Example:_Sum_up_all_values_within_an_array">Exemplo: Somando todos os valores presente em um array</h3>

<pre class="brush: js">var total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// total == 6
</pre>

<h3 id="Example_Flatten_an_array_of_arrays" name="Example:_Flatten_an_array_of_arrays">Exemplo: Juntando um array de arrays</h3>

<pre class="brush: js">var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
</pre>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<p><code>reduceRight</code> foi adicionado no padrão ECMA-262 em sua Quinta edição; sendo assim pode não estar presente em todas as implementações deste padrão. Você pode contornar isso adicionando o seguinte codigo ao inicio do seu script, adicionando a possibilidade de uso do <code>reduceRight</code> em implementações que não o suportam nativamente.</p>

<pre class="brush: js">// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined' );
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length &gt;&gt;&gt; 0, k = len - 1, value;
    if (arguments.length &gt;= 2) {
      value = arguments[1];
    } else {
      while (k &gt;= 0 &amp;&amp; !(k in t)) {
        k--;
      }
      if (k &lt; 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k &gt;= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
</pre>

<h2 id="Specifications" name="Specifications">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.22', 'Array.prototype.reduceRight')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definição inicial. Implementado em JavaScript 1.8.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidade com os navegadores</h2>

<div>{{Compat("javascript.builtins.Array.reduceRight")}}</div>

<h2 id="See_also" name="See_also">Ver também</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
</ul>
