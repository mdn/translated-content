---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - JavaScript
  - Variable declaration
  - Variables
translation_of: Web/JavaScript/Reference/Statements/let
---
<div>
<div>{{jsSidebar("Statements")}}</div>
</div>

<p>Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<p>Definição <code>let</code>:</p>

<pre class="syntaxbox">let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];</pre>

<p>Expressão <code>let</code>:</p>

<pre class="syntaxbox">let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;</pre>

<p>Instrução <code>let</code>:</p>

<pre class="syntaxbox">let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) statement;</pre>

<h3 id="Parameters" name="Parameters">Parâmetros</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Parameter</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>var1</code>, <code>var2</code>, …, <code>varN</code></td>
   <td>Nome da variável. Pode ser qualquer identificador válido.</td>
  </tr>
  <tr>
   <td><code>value1</code>, <code>value2</code>, …, <code>valueN</code></td>
   <td>Valor inicial da variável. Pode ser qualquer expressão válida.</td>
  </tr>
  <tr>
   <td><code>expression</code></td>
   <td>Qualquer <a href="/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Expressions" title="JavaScript/Guide/Expressions and Operators#Expressions">expressão</a> válida.</td>
  </tr>
  <tr>
   <td><code>statement</code></td>
   <td>Qualquer <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements" title="JavaScript/Reference/Statements">instrução</a> válida.</td>
  </tr>
 </tbody>
</table>

<h2 id="Description" name="Description">Descrição</h2>

<p><code>let</code> permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword <a href="/en-US/docs/JavaScript/Reference/Statements/var" title="JavaScript/Reference/Statements/var"><code>var</code></a>, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.</p>

<div class="note">
<p><span style="color: #333333;"><strong>Nota do tradutor:</strong></span> o trecho acima: "independentemente do escopo de bloco", na verdade, significa dizer que variáveis declaradas dentro de blocos internos da função, por exemplo, são vinculadas no escopo da função, não no bloco no qual elas são declaradas. Se isso parece confuso - e realmente é -, apenas entenda que, ao contrário do que se poderia supor, em Javascript blocos não possuem escopo como em outras linguagens, somente funções têm! Isso quer dizer que mesmo uma váriavel definida com a keyword <code>var</code> dentro de um bloco de instrução <code>if</code>, será visível no resto inteiro da função.</p>
</div>



<h2 id="Block_scoping" name="Block_scoping">Escopo de bloco</h2>

<p>Variáveis declaradas com <code>let</code> são "içadas" para começo do bloco em que elas são definidas (isso é conhecido também pelo termo, hoisting).</p>

<p>Redeclaração de uma mesma variável num mesmo escopo de bloco causa um <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/TypeError" title="TypeError">TypeError</a></code>.</p>

<pre class="brush: js">if (x) {
  let foo;
  let foo; // Emite um TypeError.
}</pre>

<p>No entanto, corpos de funções não possuem essa limitação!</p>

<pre class="brush: js">function do_something() {
  let foo;
  let foo; // Isso funciona.
}</pre>

<div class="warning"><strong>Atenção:</strong> Os rascunhos do ECMAScript 6 (desde abril de 2012) tornam este comportamento ilegal. Isso significa, provavelmente, que as futuras versões do JavaScript levantarão um <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/TypeError" title="TypeError">TypeError</a></code>. Então, se você faz isso, deveria evitar essa prática!</div>

<p>Você pode encontrar erros em instruções <a href="/en-US/docs/JavaScript/Reference/Statements/switch" title="switch"><code>switch</code></a> porque existe apenas um bloco subjacente.</p>

<pre class="brush: js">switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // TypeError para a redeclaração.
    break;
}</pre>

<h2 id="Examples" name="Examples">Exemplos</h2>

<p>Uma <em>expressão let</em> limita o escopo de uma variável declarada somente para aquela expressão.</p>

<pre class="brush: js">var a = 5;
let(a = 6) alert(a); // 6
alert(a); // 5</pre>

<p>Usada dentro de um bloco, <em>let</em> limita os escopo das variáveis para aquele bloco. Observe a diferença entre <em>var </em>em que o escopo é definido dentro da função onde é declarada</p>

<pre class="brush: js">var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do bloco if
  var b = 1; // O escopo é dentro da função

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1</pre>

<p>É possível usar a keyword <em>let</em> para vincular variáveis ​​localmente no escopo de loops em vez de usar uma variável global (definida usando <em>var</em>) para isso.</p>

<pre class="brush: js">for (let i = 0; i&lt;10; i++) {
  alert(i); // 1, 2, 3, 4 ... 9
}

alert(i); // i não está definida</pre>

<h2 id="See_also" name="See_also">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/JavaScript/Reference/Statements/var" title="JavaScript/Reference/Statements/var"><code>var</code></a></li>
 <li><a href="/en-US/docs/JavaScript/Reference/Statements/const" title="JavaScript/Reference/Statements/const"><code>const</code></a></li>
 <li><a href="/pt-BR/docs/JavaScript/New_in_JavaScript/1.7#Block_scope_with_let_(Merge_into_let_Statement)" title="JavaScript/New in JavaScript/1.7#Block scope with let (Merge into let Statement)">Novidades do JavaScript 1.7</a></li>
</ul>
