---
title: 'ReferenceError: invalid assignment left-hand side'
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
tags:
  - JavaScript
  - ReferenceError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">ReferenceError: invalid assignment left-hand side
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("ReferenceError")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Найдено неожиданное присваивание. <span id="result_box" lang="ru"><span>Это может быть связано, например, с несоответствием <a href="/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators">оператора присваивания</a> и <a href="/ru/docs/Web/JavaScript/Reference/Operators/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F">оператора сравнения</a>: один знак «<code>=</code>» присваивает значение переменной, а операторы «<code>==</code>» или «<code>===</code>» осуществляют сравнение.</span></span></p>

<h2 id="Пример">Пример</h2>

<pre class="brush: js example-bad">if (Math.PI = 3 || Math.PI = 4) {
  console.log('исключено!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Привет, '
+= 'не меня ли '
+= 'ты ищешь?';
// ReferenceError: invalid assignment left-hand side
</pre>

<p><span id="result_box" lang="ru"><span>В выражении <code>if</code> вам нужно использовать оператор сравнения («==»), а для конкатенации строк необходим оператор плюс («+»).</span></span></p>

<pre class="brush: js example-good">if (Math.PI == 3 || Math.PI == 4) {
  console.log('исключено!');
}

var str = 'Привет '
+ 'с другой '
+ 'стороны!';
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" title="Операторы присваивания">Операторы присваивания</a></li>
 <li><a href="/ru/docs/Web/JavaScript/Reference/Operators/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F" title="Операторы сравнения">Операторы сравнения</a></li>
</ul>
