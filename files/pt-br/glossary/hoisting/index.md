---
title: Hoisting
slug: Glossary/Hoisting
translation_of: Glossary/Hoisting
original_slug: Glossario/Hoisting
---
<p>Hoisting (içamento, em português) é um termo que você <em>não</em> encontrará usado em nenhuma prosa de especificação normativa antes da <a href="http://www.ecma-international.org/ecma-262/6.0/index.html">especificação de idioma do ECMAScript® 2015</a>. Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript. No entanto, o conceito pode ser um pouco confuso a princípio.</p>

<p>Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de <em>compilação</em>, mas permanecem exatamente onde você as digitou no seu código.</p>

<h2 id="Aprenda_mais">Aprenda mais</h2>

<h3 id="Exemplo_técnico">Exemplo técnico</h3>

<p>Variáveis:</p>

<p>Uma das vantagens do JavaScript em colocar declarações de função na memória antes de executar qualquer segmento de código é que ele permite que você use uma função antes de declara-la em seu código. Por exemplo:</p>

<pre class="brush: js">function catName(name) {
  console.log("O nome do meu gato é " + name);
}

catName("Tigger");

/*
O resultado do código acima é: "O nome do meu gato é Tigger"
*/
</pre>

<p>O trecho de código acima é como você escreveria o código para que ele funcionasse. Agora, vamos ver o que acontece quando chamamos a função antes de escrevê-la:</p>

<pre class="brush: js">catName("Chloe");

function catName(name) {
  console.log("O nome do meu gato é " + name);
}
/*
O resultado do código acima é: "O nome do meu gato é Chloe"
*/
</pre>

<p>Mesmo que chamemos a função em nosso código primeiro, antes que a função seja escrita, o código ainda funciona. Isto ocorre por conta de como a execução de contexto funciona em JavaScript.</p>

<p>Hoisting funciona bem com outros tipos de dados e variáveis. As variáveis podem ser inicializadas e usadas antes de serem declaradas.</p>

<h3 id="Apenas_declarações_são_hoistediçadas_em_português">Apenas declarações são hoisted(içadas, em português)</h3>

<p>O JavaScript apenas eleva (hoists) as declarações, não as inicializações. Se uma variável for declarada e inicializada após usá-la, o valor será undefined. Por exemplo:</p>

<pre class="brush: js">console.log(num); // Retorna undefined
var num;
num = 6;</pre>

<p>Se você declarar a variável depois que ela for usada, mas inicializá-la antecipadamente, ela retornará o valor:</p>

<pre class="brush: js">num = 6;
console.log(num); // retorna 6
var num;
</pre>

<p>Abaixo estão mais exemplos demonstrando a elevação (hoisting).</p>

<pre class="brush: js">//Exemplo 1 - Não eleva (hoist)
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//Isso não funcionará, pois o JavaScript <strong>apenas eleva</strong> <strong>declarações</strong>

//Example 2 - Hoists
var num1 = 3; //Declara e inicializa num1
num2 = 4; //Inicializa num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declara num2 para hoisting

//Example 3 - Hoists
a = 'Cran'; //Inicializa a
b = 'berry'; //Inicializa b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declara ambos a &amp; b para hoisting
</pre>

<h3 id="Referência_técnica">Referência técnica</h3>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var statement</a> — MDN</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function">function statement</a> — MDN</li>
</ul>
