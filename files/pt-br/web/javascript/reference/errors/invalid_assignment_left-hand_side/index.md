---
title: 'ReferenceError: invalid assignment left-hand side'
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
translation_of: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">ReferenceError: invalid assignment left-hand side
</pre>

<h2 id="Tipo_do_erro">Tipo do erro</h2>

<p>{{jsxref("ReferenceError")}}.</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>Ouve uma declaração inesperada em algum lugar. Isso pode ocorrer devido a uma confusão entre um  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">Operador de atribuição</a> e um <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">Operador de comparação</a>, por exemplo. Enquanto um <code>"="</code> define uma variavel, <code>"=="</code> ou <code>"==="</code> são usados para fazer uma comparação entre valores.</p>

<h2 id="Exemplos"> Exemplos</h2>

<pre class="brush: js example-bad">if (Math.PI = 3 || Math.PI = 4) {
  console.log('de modo algum!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Olá, '
+= 'sou eu '
+= 'que você está procurando?';
// ReferenceError: invalid assignment left-hand side
</pre>

<p>Na declaração <code>if</code> você deve usar um operador de comparação ("=="), e para a  atribuição da string, apenas o operador mais ("+") é necessario</p>

<pre class="brush: js example-good">if (Math.PI == 3 || Math.PI == 4) {
  console.log('de modo algum!');
}

var str = 'Olá, '
+ 'do '
+ 'outro lado!';
</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li> <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">Operadores de atribuição</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">Operadores de comparação</a></li>
</ul>
