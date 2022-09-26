---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/More_arguments_needed
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: Object.create requires more than 0 arguments
TypeError: Object.setPrototypeOf requires more than 1 argument
TypeError: Object.defineProperties requires more than 0 arguments
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Ошибка в вызове функции. Необходимо передать больше аргументов.</p>

<h2 id="Примеры">Примеры</h2>

<p>Метод {{jsxref("Object.create()")}} требует хотя бы один аргумент, а {{jsxref("Object.setPrototypeOf()")}} минимум двух:</p>

<pre class="brush: js example-bad">var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
</pre>

<p>Вы можете исправить это, установив {{jsxref("null")}} в качестве прототипа, например:</p>

<pre class="brush: js example-good">var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/JavaScript/Guide/Functions">Функции</a></li>
</ul>
