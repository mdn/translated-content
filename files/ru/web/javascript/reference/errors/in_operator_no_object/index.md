---
title: >-
  TypeError: cannot use 'in' operator to search for 'x' in 'y'(не удаётся
  использовать 'in' оператор поиска для 'x' в 'y')
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
translation_of: Web/JavaScript/Reference/Errors/in_operator_no_object
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщения">Сообщения</h2>

<pre class="syntaxbox">TypeError: недопустимый операнд в "in" (edge)
TypeError: правая часть 'in' должна быть объектом, есть 'x' (Firefox)
TypeError: невозможно использовать оператор 'in' для поиска 'x' в 'y' (Firefox, Chrome)

</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Оператор in можно использовать только для проверки наличия свойства в объекте. Вы не можете искать в строках, числах или других примитивных типах.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Поиск_в_строках">Поиск в строках</h3>

<p>В отличие от других языков программирования (например, Python), поиск в строках с помощью оператора in невозможен.</p>

<pre class="brush: js example-bad">"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'</pre>

<p>Вместо этого вам нужно будет использовать{{jsxref("String.prototype.indexOf()")}}или примеры</p>

<pre class="brush: js example-good">"Hello World".indexOf("Hello") !== -1;
// true</pre>

<h3 id="Операнд_не_может_бытьnull_или_undefined">Операнд не может быть<code>null</code> или <code>undefined</code></h3>

<p>Убедитесь, что объект, который вы осматриваете, на самом деле не {{jsxref("null")}} или {{jsxref("undefined")}}.</p>

<pre class="brush: js example-bad">var foo = null;
"bar" in foo;
// TypeError: не удаётся использовать оператор 'in' для поиска 'bar' в 'foo' (Chrome)
// TypeError: правая часть 'in' должна быть объектом, полученным null (Firefox)
</pre>

<p>Оператор in всегда ожидает объект.</p>

<pre class="brush: js example-good">var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
</pre>

<h3 id="Поиск_в_Массивах">Поиск в Массивах</h3>

<p>Будьте осторожны при использовании оператора для поиска {{jsxref("Array")}} объекты. the <code>in</code> оператор проверяет номер индекса, а не его значение.</p>

<pre class="brush: js">var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
3 in trees; // true
"oak" in trees; // false</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> operator</a></li>
</ul>
