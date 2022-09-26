---
title: Декремент (--)
slug: Web/JavaScript/Reference/Operators/Decrement
tags:
  - Декремент
  - Оператор
translation_of: Web/JavaScript/Reference/Operators/Decrement
---
<div>{{jsSidebar("Operators")}}</div>

<p>Оператор декремента (<code>--</code>) уменьшает (вычитает единицу) свой операнд и возвращает значение.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}</div>





<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox"><strong>Operator:</strong> <var>x</var>-- or --<var>x</var>
</pre>

<h2 id="Описание">Описание</h2>

<p>Если используется постфикс, с оператором после операнда (например, x--), оператор декремента уменьшает и возвращает значение перед уменьшением.</p>

<p>Если используется префикс, с оператором перед операндом (например, --x), оператор декремента уменьшает и возвращает значение после уменьшения.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Постфиксный_декремент">Постфиксный декремент</h3>

<pre class="brush: js">let x = 3;
y = x--;

// y = 3
// x = 2
</pre>

<h3 id="Префиксный_декремент">Префиксный декремент</h3>

<pre class="brush: js">let a = 2;
b = --a;

// a = 1
// b = 1
</pre>

<h2 id="Характеристики">Характеристики</h2>

<p>Спецификация</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-postfix-decrement-operator', 'Decrement operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузером">Совместимость с браузером</h2>



<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition">Addition operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction">Subtraction operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division">Division operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication">Multiplication operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment">Increment operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary negation operator</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus operator</a></li>
</ul>
