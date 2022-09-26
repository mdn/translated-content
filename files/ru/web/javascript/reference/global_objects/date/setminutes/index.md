---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
---
<div>{{JSRef("Global_Objects", "Date")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>setMinutes()</code></strong> устанавливает минуты указанной даты по местному времени.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.setMinutes(<var>minutesValue</var>[, <var>secondsValue</var>[, <var>msValue</var>]])</code></pre>

<h3 id="Версия_до_JavaScript_1.3">Версия до JavaScript 1.3</h3>

<pre class="syntaxbox"><code><var>dateObj</var>.setMinutes(<var>minutesValue</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>minutesValue</code></dt>
 <dd>Целое число от 0 до 59, представляющее минуты.</dd>
 <dt><code>secondsValue</code></dt>
 <dd>Необязательный параметр. Целое число от 0 до 59, представляющее секунды. Если вы определите параметр <code>secondsValue</code>, вы также должны определить параметр <code>minutesValue</code>.</dd>
 <dt><code>msValue</code></dt>
 <dd>Необязательный параметр. Целое число от 0 до 999, представляющее миллисекунды. Если вы определите параметр <code>msValue</code>, вы также должны определить параметры <code>minutesValue</code> и <code>secondsValue</code>.</dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Количество миллисекунд между 1 января 1970 00:00:00 UTC и обновлённой датой.</p>

<h2 id="Description">Описание</h2>

<p>Если вы не определите значения параметров <code>secondsValue</code> и <code>msValue</code>, будут использоваться значения, возвращаемые методами {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} и {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}}.</p>

<p>Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод <code>setMinutes()</code> попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве <code>secondsValue</code> передать значение 100, минуты увеличатся на 1 (<code>minutesValue + 1</code>), а в качестве секунд будет использоваться значение 40.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_setMinutes">Пример: использование метода <code>setMinutes()</code></h3>

<pre class="brush: js">var theBigDay = new Date();
theBigDay.setMinutes(45);
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Date.prototype.getMinutes()")}}</li>
 <li>{{jsxref("Date.prototype.setUTCMinutes()")}}</li>
</ul>
