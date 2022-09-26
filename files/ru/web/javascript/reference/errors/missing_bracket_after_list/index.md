---
title: 'SyntaxError: missing ] after element list'
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
tags:
  - JavaScript
  - SyntaxError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: missing ] after element list
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Ошибка в синтаксисе инициализации массива. Скорее всего, пропущена закрывающая квадратная скобка ("<code>]</code>") или запятая ("<code>,</code>").</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Незавершённый_инициализатор_массива">Незавершённый инициализатор массива</h3>

<pre class="brush: js example-bad">var list = [1, 2,

var instruments = [
  'Укулеле',
  'Гитара',
  'Пианино'
};

var data = [{foo: 'bar'} {bar: 'foo'}];
</pre>

<p>Правильные варианты:</p>

<pre class="brush: js example-good">var list = [1, 2];

var instruments = [
 'Укулеле',
 'Гитара',
 'Пианино'
];

var data = [{foo: 'bar'}, {bar: 'foo'}];</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
</ul>
