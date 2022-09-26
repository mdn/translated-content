---
title: 'RangeError: invalid date'
slug: Web/JavaScript/Reference/Errors/Invalid_date
tags:
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_date
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p><span id="result_box" lang="ru"><span>Строка, ведущая к недопустимой дате, была выведена</span></span> {{jsxref("Date")}} или {{jsxref("Date.parse()")}}.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неверные_записи">Неверные записи</h3>

<p>Неопознанные строки или даты, содержащие недопустимые значения элементов в строках, отформатированных ISO, обычно возвращают <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN" title="Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number)."><code>NaN</code></a>. Тем не менее, в зависимости от реализации, при несоответствии строкам формата ISO, может также возникнуть ошибка <code>RangeError: invalid date</code>, например в следующих случаях, в Firefox.</p>

<pre class="brush: js example-bad">new Date('foo-bar 2014');
new Date('2014-25-23').toISOString();
new Date('foo-bar 2014').toString();
</pre>

<p>Это, без сомнения, вернёт {{jsxref("NaN")}} в Firefox:</p>

<pre class="brush: js example-bad">Date.parse('foo-bar 2014'); // NaN</pre>

<p>Для получения более подробной информации, смотрите документацию по {{jsxref("Date.parse()")}}</p>

<h3 id="Верная_запись">Верная запись</h3>

<pre class="brush: js example-good">new Date('05 October 2011 14:48 UTC');</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Date")}}</li>
 <li>{{jsxref("Date.prototype.parse()")}}</li>
 <li>{{jsxref("Date.prototype.toISOString()")}}</li>
</ul>
