---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)</pre>

<h2 id="Tipo_de_erro">Tipo de erro</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>O nome de uma variável está faltando. Isto é provavelmente devido a um erro de sintaxe no seu código. Provavelmente uma vírgula está errada em algum lugar. Totalmente compreensível! Nomear as coisas é tão difícil.</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Falta_um_nome_de_variável">Falta um nome de variável</h3>

<pre class="brush: js example-bad">var = "foo";
</pre>

<p>É difícil chegar com bons nomes de variáveis. Nós todos estivemos lá.</p>

<pre class="brush: js example-good">var ohGodWhy = "foo";</pre>

<h3 id="Palavras-chave_reservadas_não_podem_ser_nomes_de_variáveis">Palavras-chave reservadas não podem ser nomes de variáveis</h3>

<p>Existem alguns nomes de variáveis ​​que são palavras-chave resevadas. Você não pode usar isso. Desculpa :(</p>

<pre class="brush: js example-bad">var debugger = "whoop";
// SyntaxError: missing variable name
</pre>

<h3 id="Declarando_múltiplas_variáveis">Declarando múltiplas variáveis</h3>

<p>Preste especial atenção às vírgulas ao declarar múltiplas variáveis. Existe um excesso de vírgula? Você acidentalmente adicionou vírgulas em vez de ponto e vírgula?</p>

<pre class="brush: js example-bad">var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
</pre>

<p>A versão corrigida:</p>

<pre class="brush: js example-good">var x, y = "foo";
var x = "foo";

var first = document.getElementById('one');
var second = document.getElementById('two');</pre>

<h3 id="Arrays">Arrays</h3>

<p>{{jsxref("Array")}} literais em JavaScript precisam de colchetes ao redor dos valores. Isso não funcionará:</p>

<pre class="brush: js example-bad">var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
</pre>

<p>Isso seria correto:</p>

<pre class="brush: js example-good">var arr = [1,2,3,4,5];</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>Bons nomes de variáveis</li>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
 <li>Declarações de variáveis ​​no Guia JavaScript</li>
</ul>
