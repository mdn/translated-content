---
title: 'RangeError: repeat count must be non-negative'
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
translation_of: Web/JavaScript/Reference/Errors/Negative_repetition_count
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">RangeError: repeat count must be non-negative (Firefox)
RangeError: Invalid count value (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Был использован метод {{jsxref("String.prototype.repeat()")}}, с параметром <code>count</code>, указывающим количество повторений строки. Параметр может принимать значения между 0 и положительной {{jsxref("Infinity")}}, и не может быть отрицательным числом. Диапазон допустимых значений может быть описан следующим образом: [0, + ∞).</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неверно">Неверно</h3>

<pre class="brush: js example-bad">'abc'.repeat(-1); // RangeError </pre>

<h3 id="Верно">Верно</h3>

<pre class="brush: js example-good">'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("String.prototype.repeat()")}}</li>
</ul>
