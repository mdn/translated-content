---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
translation_of: Web/JavaScript/Reference/Errors/Bad_regexp_flag
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>В коде есть недопустимые флаги регулярных выражений. Литерал в регулярном выражении, который содержит шаблон заключённый между двумя слешами, флаги определяются после второго флага. Они также могут быть объявлены в конструкторе функции {{jsxref("RegExp")}} object (второй параметр). Флаги регулярного выражения могут быть использованы отдельно или вместе в любой очерёдности, но в ECMAScript их только пять.</p>

<p>Чтоб включить флаг в регулярное выражение, используйте синтаксис:</p>

<pre class="brush: js">var re = /pattern/flags;
</pre>

<p>или</p>

<pre class="brush: js">var re = new RegExp('pattern', 'flags');</pre>

<p>Флаги регулярного выражения</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Флаг</th>
   <th scope="col">Описание</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>g</code></td>
   <td>Глобальный поиск.</td>
  </tr>
  <tr>
   <td>i</td>
   <td>Нечувствительный к регистру поиск.</td>
  </tr>
  <tr>
   <td>m</td>
   <td>Поиск по всем строкам.</td>
  </tr>
  <tr>
   <td>u</td>
   <td>Unicode; обрабатывать шаблон как последовательность кода Unicode</td>
  </tr>
  <tr>
   <td>y</td>
   <td>Выполняет «липкий» поиск, который будет начинаться с текущей позиции в целевой строке. См. {{jsxref("RegExp.sticky", "sticky")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Примеры">Примеры</h2>

<p>Существует только пять действительных флагов регулярных выражений.</p>

<pre class="brush: js example-bad">/foo/bar;

// Ошибка синтаксиса: недействительный флаг "b" для регулярного выражения
</pre>

<p>Вы намеревались создать регулярное выражение? Выражение, содержащее два слеша, интерпретируется как литерал регулярного выражения.</p>

<pre class="brush: js example-bad">let obj = {
  url: /docs/Web
};

// Ошибка синтаксиса: недействительный флаг "W" для регулярного выражения
</pre>

<p>Или вы хотели создать строку вместо этого? Добавьте одинарные или двойные кавычки, чтобы создать строковый литерал. </p>

<pre class="brush: js example-good">let obj = {
  url: '/docs/Web'
};</pre>

<h3 id="Действительные_флаги_регулярного_выражения">Действительные флаги регулярного выражения </h3>

<p>Взгляните на таблицу выше, где представлены пять действительных флагов регулярного выражения, которые разрешены в JavaScript</p>

<pre class="brush: js example-good">/foo/g;
/foo/gim;
/foo/uy;
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular expressions</a></li>
 <li><a href="http://xregexp.com/flags/">XRegEx flags</a> – библиотека регулярного выражения, которая предоставляет четыре новых флага (<code>n</code>, <code>s</code>, <code>x</code>, <code>A</code>)</li>
</ul>
