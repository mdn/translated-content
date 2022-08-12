---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - Experimental
  - JavaScript
  - Method
  - Prototype
  - flat
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
---
<div>{{JSRef}} {{SeeCompatTable}}</div>

<p>O método <code><strong>flat()</strong></code> cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade<em> </em>especificada.</p>

<div>{{EmbedInteractiveExample("pages/js/array-flat.html")}}</div>


<h2 id="Sintaxe">Sintaxe</h2>

<pre class="brush: js notranslate">
  flat()
  flat(depth)
</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>depth</code> {{optional_inline}}</dt>
 <dd>O nível de profundidade especifíca o quão profundo um array aninhando deve ser achatado. O padrão é 1.</dd>
</dl>

<h3 id="Retorno">Retorno</h3>

<p>Um novo array com os elementos sub-array concatenados nele.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Achatando_arrays_aninhados">Achatando arrays aninhados</h3>

<pre class="brush: js notranslate">
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8]
</pre>

<h3 id="Achatando_e_buracos_em_array">Achatando e buracos em array</h3>

<p>o método flat remove espaços vazios do array:</p>

<pre class="brush: js notranslate">
var arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
</pre>

<div class="line"></div>

<h2 id="Alternativa">Alternativa</h2>

<h3 id="reduce_e_concat"><code>reduce</code> e <code>concat</code></h3>

<pre class="brush: js notranslate">
var arr = [1, 2, [3, 4]];

// Achatar array de nível único
arr.flat();
// É equivalente à
arr.reduce((acc, val) =&gt; acc.concat(val), []);
// [1, 2, 3, 4]

// Ou com sintaxe de decomposição
const flattened = (arr) =&gt; [].concat(...arr);
</pre>

<h3 id="reduce_concat_isarray_recursividade"><code>reduce</code> + <code>concat</code> + <code>isArray</code> + recursividade</h3>

<pre class="brush: js notranslate">
var arr = [1, 2, [3, 4, [5, 6]]];

// Para achatamentos mais profundos, use recursividade com reduce e concat
function flatDeep(arr, d = 1) {
   return d &gt; 0 ? arr.reduce((acc, val) =&gt; acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentários</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flat"><code>Array.prototype.flat</code> proposal</a></td>
   <td>Draft</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.Array.flat")}}</p>
</div>

<h2 id="Veja_Também">Veja Também</h2>

<ul>
 <li>{{jsxref("Array.prototype.flatMap()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
