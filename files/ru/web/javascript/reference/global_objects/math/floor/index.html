---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Math/floor
---
<div>{{JSRef("Global_Objects", "Math")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>Math.floor()</code></strong> - округление вниз. Округляет аргумент до ближайшего меньшего целого.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Math.floor(<var>x</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Число.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Поскольку метод <code>floor()</code> является статическим методом объекта <code>Math</code>, вы всегда должны использовать его как <code>Math.floor()</code>, а не пытаться вызывать метод на созданном экземпляре объекта <code>Math</code> (поскольку объект <code>Math</code> не является конструктором).</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example_Using_Math.floor">Пример: использование метода <code>Math.floor()</code></h3>

<pre class="brush: js">Math.floor( 45.95); //  45
Math.floor(-45.95); // -46
</pre>

<h3 id="Example_Decimal_adjustment">Пример: корректировка округления десятичных дробей</h3>

<pre class="brush: js">// Замыкание
(function() {
  /**
   * Корректировка округления десятичных дробей.
   *
   * @param {String}  type  Тип корректировки.
   * @param {Number}  value Число.
   * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
   * @returns {Number} Скорректированное значение.
   */
  function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === 'number' &amp;&amp; exp % 1 === 0)) {
      return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Обратный сдвиг
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Десятичное округление к ближайшему
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Десятичное округление вниз
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Десятичное округление вверх
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Округление к ближайшему
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
// Округление вниз
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Округление вверх
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.ceil()")}}</li>
 <li>{{jsxref("Math.round()")}}</li>
 <li>{{jsxref("Math.sign()")}} {{experimental_inline}}</li>
 <li>{{jsxref("Math.trunc()")}} {{experimental_inline}}</li>
</ul>
