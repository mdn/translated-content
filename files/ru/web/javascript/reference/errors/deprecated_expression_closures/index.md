---
title: 'Предупреждение: затворы выражения являются устаревшими'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">Warning: замыкания выражений являются устаревшими
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>Предупреждающий. Выполнение скрипта не будет остановлено.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Нестандартный синтаксис закрытия выражений (сокращённый синтаксис функций) устарел и больше не должен использоваться. Этот синтаксис будет полностью удалён в Этот синтаксис будет полностью удалён в {{bug(1083458)}} а скрипты с его помощью {{jsxref("SyntaxError")}} затем.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неправильный_синтаксис">Неправильный синтаксис</h3>

<p>Замыкания выражений пропускают фигурные скобки или операторы return из объявлений функций или определений методов в объектах.</p>

<pre class="brush: js example-bad">var x = function() 1;

var obj = {
  count: function() 1
};
</pre>

<h3 id="Стандартный_синтаксис">Стандартный синтаксис</h3>

<p>To convert the non-standard expression closures syntax to standard ECMAScript syntax, you can add curly braces and return statements.</p>

<pre class="brush: js example-good">var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
</pre>

<h3 id="Стандартный_синтаксис_с_использованием_функций_со_стрелками">Стандартный синтаксис с использованием функций со стрелками:</h3>

<pre class="brush: js example-good">var x = () =&gt; 1;</pre>

<h3 id="Стандартный_синтаксис_с_использованием_сокращённого_синтаксиса_метода">Стандартный синтаксис с использованием сокращённого синтаксиса метода</h3>

<p>Замыкания выражений также можно найти с помощью getter'а и setter'а, например:</p>

<pre class="brush: js example-bad">var obj = {
  get x() 1,
  set x(v) this.v = v
};
</pre>

<p>With ES2015 <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">method definitions</a>, это может быть конвертированно в:</p>

<pre class="brush: js example-good">var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures">Expression closures</a> (Закрытие выражений)</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow functions</a> (Стрелочные функции)</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">Method definitions</a> (Определение метода)</li>
</ul>
