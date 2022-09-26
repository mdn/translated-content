---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
tags:
  - JavaScript
  - SyntaxError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: malformed formal parameter (Firefox)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Существует конструктор <code><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code>, который принимает в коде как минимум два аргумента. Последний аргумент – это исходный код создаваемой функции, а все остальные представляют собой список её аргументов.</p>

<p>Ошибка возникает, когда список аргументов по какой-то причине не является корректным. Возможно, вы случайно взяли в качестве имени аргумента ключевое слово, такое как <code>if</code> или <code>var</code>. Или в списке аргументов затерялся лишний знак пунктуации. Или вы случайно передали некорректное значение, например, число или объект.</p>

<h2 id="OK_это_решило_мою_проблему._Но_почему_нельзя_было_сразу_так_и_сказать">OK, это решило мою проблему. Но почему нельзя было сразу так и сказать?</h2>

<p>Нельзя не признать, что формулировка сообщения об ошибке немного странная. "Formal parameter" (формальный параметр) – это всего лишь необычный способ сказать "function argument" (аргумент функции). А слово "malformed" (уродливый, некорректный) мы используем потому, что все инженеры Firefox без ума от готических романов 19-го века.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Код_с_ошибками">Код с ошибками</h3>

<pre class="brush: js example-bad">var f = Function('x y', 'return x + y;');
// SyntaxError (пропуск запятой)

var f = Function('x,', 'return x;');
// SyntaxError (лишняя запятая)

var f = Function(37, "alert('OK')");
// SyntaxError (числа не могут использоваться в качестве имён аргументов)
</pre>

<h3 id="Правильный_код">Правильный код</h3>

<pre class="brush: js example-good">var f = Function('x, y', 'return x + y;');  // правильная пунктуация

var f = Function('x', 'return x;');

// если есть возможность, не используйте Function - так гораздо быстрее:
var f = function(x) { return x; };
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Function">Function()</a></code></li>
 <li><a href="/ru/docs/Web/JavaScript/Guide/Functions">О функциях</a></li>
 <li><a href="https://www.gutenberg.org/ebooks/84"><em>Франкенштейн</em> Мэри Уотлстонкрафт Шелли, полный текст (англ.)</a> ("[...] прокляты руки, создавшие тебя, пусть это были мои собственные! Ты причинил мне безмерное горе. Я уже не в силах решать, справедливо ли я с тобой поступаю. Поди прочь! Избавь меня от твоего ненавистного вида." (пер. З. Александровой))</li>
</ul>
