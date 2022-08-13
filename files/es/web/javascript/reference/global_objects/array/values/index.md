---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
tags:
  - Array
  - ECMAScript 2015
  - Iterador
  - JavaScript
  - Prototipo
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Array/values
original_slug: Web/JavaScript/Referencia/Objetos_globales/Array/values
---
<div>{{JSRef}}</div>

<p>El método <strong><code>values()</code></strong> devuelve un nuevo objeto <strong><code>Array Iterator</code></strong> que contiene los valores para cada índice del array.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> a <span class="operator token">=</span> <span class="punctuation token">[</span><span class="string token">'w'</span><span class="punctuation token">,</span> <span class="string token">'y'</span><span class="punctuation token">,</span> <span class="string token">'k'</span><span class="punctuation token">,</span> <span class="string token">'o'</span><span class="punctuation token">,</span> <span class="string token">'p'</span><span class="punctuation token">]</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> iterator <span class="operator token">=</span> a<span class="punctuation token">.</span><span class="function token">values</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>iterator<span class="punctuation token">.</span><span class="function token">next</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">.</span>value<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// w </span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>iterator<span class="punctuation token">.</span><span class="function token">next</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">.</span>value<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// y </span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>iterator<span class="punctuation token">.</span><span class="function token">next</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">.</span>value<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// k </span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>iterator<span class="punctuation token">.</span><span class="function token">next</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">.</span>value<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// o </span>
console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>iterator<span class="punctuation token">.</span><span class="function token">next</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">.</span>value<span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="comment token">// p</span></code>
</pre>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>arr</var>.values()
</pre>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un nuevo objeto {{jsxref("Array")}} iterator.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Iteración_usando_un_bucle_for...of">Iteración usando un bucle <code>for...of</code></h3>

<pre class="brush: js">var arr = ['w', 'y', 'k', 'o', 'p'];
var iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
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
   <td>{{SpecName('ES2015', '#sec-array.prototype.values', 'Array.prototype.values')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definición inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.values', 'Array.prototype.values')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>{{Compat("javascript.builtins.Array.values")}}</div>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("Array.prototype.keys()")}}</li>
 <li>{{jsxref("Array.prototype.entries()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
</ul>
