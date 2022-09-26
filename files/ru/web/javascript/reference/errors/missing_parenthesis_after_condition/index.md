---
title: 'SyntaxError: missing ) after condition'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: missing ) after condition
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Произошла ошибка в написании условия if. В любом языке программирования код принимает решение выполнять действия в зависимости от входных параметров. Оператор if выполняет действия, если условие истинно. В JavaScript это условие должно заключаться в скобки после ключевого слова if, например:</p>

<pre class="brush: js">if (condition) {
  // сделать что-то если условие истинно
}</pre>

<h2 id="Примеры">Примеры</h2>

<p>Это может быть просто недосмотр, внимательно проверьте все скобки в коде.</p>

<pre class="brush: js example-bad">if (3 &gt; Math.PI {
  console.log("Что?");
}

// SyntaxError: missing ) after condition
</pre>

<p>Чтобы исправить ошибку вы должны поставить закрывающую скобку после условия.</p>

<pre class="brush: js example-good">if (3 &gt; Math.PI) {
  console.log("Что?");
}</pre>

<p>Если вы пришли из других языков программирования, то можете случайно использовать ключевые слова, которые в JavaScript обозначают что-то другое или вообще не имеют смысла.</p>

<pre class="brush: js example-bad">if (done is true) {
 console.log("мы сделали!");
}

// SyntaxError: missing ) after condition
</pre>

<p>Вместо этого используйте нужный <a href="/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения">оператор сравнения</a>. Для примера:</p>

<pre class="brush: js example-good">if (done === true) {
 console.log("мы сделали!");
}</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code></li>
 <li><a href="/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения">Операторы сравнения</a></li>
 <li>
  <p><a href="/ru/docs/Learn/JavaScript/Building_blocks/conditionals">Making decisions in your code — conditionals</a></p>
 </li>
</ul>
