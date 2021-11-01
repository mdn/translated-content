---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---
<div>{{JSRef("Global_Objects", "Date")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>toISOString()</code></strong> возвращает строку в формате ISO (<a href="https://ru.wikipedia.org/wiki/ISO_8601">расширенный формат ISO 8601</a>), который можно описать следующим образом: <strong><code>YYYY-MM-DDTHH:mm:ss.sssZ</code></strong>. Часовой пояс всегда равен UTC, что обозначено суффиксом <code>"Z"</code>.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.toISOString()</code></pre>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_toISOString">Пример: использование метода <code>toISOString()</code></h3>

<pre class="brush: js">var today = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString()); // вернёт 2011-10-05T14:48:00.000Z
</pre>

<p>Пример выше использует разбор нестандартного строкового значения, которое может разобраться некорректно в браузерах, отличных от Firefox.</p>

<h2 id="Polyfill">Полифил</h2>

<p>Этот метод был стандартизирован в ECMA-262 5-го издания. Отсутствие этого метода в движках, которые не были обновлены для его поддержки, можно обойти следующей прокладкой:</p>

<pre class="brush: js">if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number &lt; 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Date.prototype.toLocaleDateString()")}}</li>
 <li>{{jsxref("Date.prototype.toTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toUTCString()")}}</li>
</ul>
