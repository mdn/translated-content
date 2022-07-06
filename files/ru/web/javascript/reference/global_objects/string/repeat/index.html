---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
  - ECMAScript 2015
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Référence(2)
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/repeat
---
<div>{{JSRef}}</div>

<div>Метод <strong><code>repeat()</code></strong> конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.</div>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>str</var>.repeat(<var>count</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>count</code></dt>
 <dd>Целое число от 0 до +∞: [0, +∞), определяющее число повторений строки во вновь создаваемой и возвращаемой строке.</dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Новая строка, содержащая указанное количество копий строки, для которой был вызван метод.</p>

<h3 id="Throws">Исключения</h3>

<ul>
 <li>{{jsxref("Errors/Negative_repetition_count", "RangeError")}}: число повторений не должно быть отрицательным.</li>
 <li>{{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: число повторений должно быть меньше бесконечности и не должно превышать максимально допустимую длину строки.</li>
</ul>

<dl>
</dl>

<h2 id="Examples">Примеры</h2>

<pre class="brush: js">'абв'.repeat(-1);   // RangeError
'абв'.repeat(0);    // ''
'абв'.repeat(1);    // 'абв'
'абв'.repeat(2);    // 'абвабв'
'абв'.repeat(3.5);  // 'абвабвабв' (количество будет преобразовано в целое число)
'абв'.repeat(1/0);  // RangeError

({ toString: () =&gt; 'абв', repeat: String.prototype.repeat }).repeat(2);
// 'абвабв' (метод repeat() является обобщённым методом)
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Этот метод был добавлен к спецификации ECMAScript 2015 и может быть доступен ещё не во всех реализациях JavaScript. Однако, вы можете легко эмулировать этот метод при помощи следующего кода:</p>

<pre class="brush: js">if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count &lt; 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
    // соптимизировать главную часть функции. Впрочем, большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, длиннее 1 &lt;&lt; 28 символов, так что:
    if (str.length * count &gt;= 1 &lt;&lt; 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i &lt; count; i++) {
      rpt += str;
    }
    return rpt;
  }
}
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>
<p>{{Compat}}</p>
