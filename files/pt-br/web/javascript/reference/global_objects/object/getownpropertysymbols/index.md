---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---
<div>{{JSRef}}</div>

<p>O <code><strong>Object.getOwnPropertySymbols()</strong></code> método retorna uma array com todas propriedades de símbolo encontradas diretamente em um determinado objeto dado.</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="brush: js notranslate"><code>Object.getOwnPropertySymbols(<var>obj</var>)</code></pre>

<h3 id="Parâmetro"><span><span>Parâmetro</span></span></h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>O objeto pelo qual as propriedades de símbolos são retornas.</dd>
</dl>

<h3 id="Valor_retornado">Valor retornado</h3>

<p>Uma array com todas as propriedades de símbolos encontradas diretamente pelo o objeto dado.</p>

<h2 id="Descrição">Descrição</h2>

<p>Similar do {{jsxref("Object.getOwnPropertyNames()")}}, você pode obter todas as propriedades de símbolo de um objeto dado como um array de símbolos. Lembre que o próprio {{jsxref("Object.getOwnPropertyNames()")}} não contém as propriedades de símbolo de um objeto e somente as propriedades de string.</p>

<p>Como todos os objetos não possuem símbolos próprios inicialmente, o <code>Object.getOwnPropertySymbols()</code> retorna uma array vazia a menos que você tenha definido as propriedades de símbolo do seu objeto .</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_getOwnPropertySymbols">Usando getOwnPropertySymbols</h3>

<pre class="brush: js notranslate">var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // retorno esperado 2
console.log(objectSymbols);        // retorno esperado (2) [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // retorno esperado Symbol(a)
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.getownpropertysymbols', 'Object.getOwnPropertySymbols')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<div>
  <p>{{Compat("javascript.builtins.Object.getOwnPropertySymbols")}}</p>
</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Symbol")}}</li>
</ul>
