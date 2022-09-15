---
title: Operador Exponencial
slug: Web/JavaScript/Reference/Operators/Exponentiation
tags:
- JavaScript
- Operador Exponencial
translation_of: Web/JavaScript/Reference/Operators/Exponentiation
original_slug: Web/JavaScript/Reference/Operators/Operador_Exponencial
---
<div>{{jsSidebar("Operators")}}</div>

<h2 id="Summary" name="Summary">Sumário</h2>

<p>O <strong>operador de exponenciação (**)</strong> retorna o resultado de elevar o primeiro operando à potência do
    segundo operando. É equivalente ao método <code>Math.pow</code>, exceto que também aceita números do tipo BigInt
    como operandos.</p>

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="brush: js">
    x ** y;
</pre>

<h2 id="Descrição">Descrição</h2>

<p>O operador de exponenciação é associativo à direita: <code>a ** b ** c</code> é igual a <code>a ** (b ** c)</code>.</p>

<p>
    Na maioria das linguagens, como PHP, Python e outras que têm um operador de exponenciação <code>(**)</code>, 
    o operador de exponenciação é definido para ter uma precedência maior do que os operadores unários, 
    como o unário <code>+</code> e unário <code>-</code>, mas há algumas exceções.
    Por exemplo, no Bash, o operador <code>**</code> é definido para ter uma precedência menor do que os operadores unários.
</p>

<p>
    Em JavaScript, é impossível escrever uma expressão de exponenciação ambígua. 
    Ou seja, você não pode colocar um operador unário (<code>+ / - / ~ /! / delete / void / typeof</code>) 
    imediatamente antes do número base; fazer isso causará um SyntaxError.
</p>


<pre class="brush: js">
    -2 ** 2;
    // // 4 no Bash, -4 em outros idiomas.
    // Isso é inválido em JavaScript, pois a operação é ambígua.
    
    -(2 ** 2);
    // -4 em JavaScript e a intenção do autor não é ambígua.
</pre>

<p>
    Observe que algumas linguagens de programação usam o símbolo circunflexo <code>^</code> para exponenciação, 
    mas o JavaScript usa esse símbolo para o operador <code>XOR lógico bit a bit</code>.
</p>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Exponenciação_básica">Exponenciação básica</h3>

<pre class="brush: js">
    2 ** 3   // 8
    3 ** 2   // 9
    3 ** 2.5 // 15.588457268119896
    10 ** -1 // 0.1
    NaN ** 2 // NaN
</pre>

<h3 id="Associatividade">Associatividade</h3>

<pre class="brush: js">
    2 ** 3 ** 2   // 512
    2 ** (3 ** 2) // 512
    (2 ** 3) ** 2 // 64
</pre>

<h3 id="Uso_com_operadores_unários">Uso com operadores unários</h3>

<p>Para inverter o sinal do resultado de uma expressão de exponenciação:</p>

<pre class="brush: js">
    -(2 ** 2) // -4
</pre>

<p>Para forçar a base de uma expressão de exponenciação a ser um número negativo:</p>

<pre class="brush: js">
    (-2) ** 2 // 4
</pre>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat}}</p>

<h2 id="See_also" name="See_also">Veja também</h2>

<ul>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else">Operador condicional if</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Addition">Operador de adição</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Subtraction">Operador de subtração</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication">Operador de multiplicação</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Division">Operador de divisão</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder">Operador de resto</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Increment">Operador de incremento</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Decrement">Operador de decremento</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_negation">Operador de negação unária</a></li>
    <li><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/Unary_plus">Operador de adição unária</a></li>
</ul>
