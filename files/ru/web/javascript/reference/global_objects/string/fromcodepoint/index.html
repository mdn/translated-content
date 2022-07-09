---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
  - ECMAScript6
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Method
  - Reference
  - Référence(2)
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---
<div>{{JSRef("Global_Objects", "String")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Статический метод <strong><code>String.fromCodePoint()</code></strong> возвращает строку, созданную из указанной последовательности кодовых точек.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>String.fromCodePoint(<var>num1</var>[, ...[, <var>numN</var>]])</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>num1, ..., num<em>N</em></code></dt>
 <dd>Последовательность кодовых точек.</dd>
</dl>

<h3 id="Throws">Выбрасываемые исключения</h3>

<dl>
 <dt>{{jsxref("Global_Objects/RangeError", "RangeError")}}</dt>
 <dd>Исключение {{jsxref("Global_Objects/RangeError", "RangeError")}} выбрасывается в случае, если методу предоставлена неверная кодовая точка Юникода (например, "RangeError: NaN is not a valid code point").</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Поскольку метод <code>fromCodePoint()</code> является статическим методом объекта {{jsxref("Global_Objects/String", "String")}}, вы всегда должны использовать его как <code>String.fromCodePoint()</code>, а не как метод созданного вами экземпляра {{jsxref("Global_Objects/String", "String")}}.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_fromCharCode">Пример: использование метода <code>fromCodePoint()</code></h3>

<pre class="brush: js">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
</pre>

<pre class="brush: js">// Метод String.fromCharCode() не может вернуть символ по такой большой кодовой точке
// Следующий же метод может вернуть 4-байтный символ так же, как и обычный
// 2-байтный (то есть, он может вернуть один символ, который на самом деле
// имеет длину 2, а не 1!)
console.log(String.fromCodePoint(0x2F804)); // или 194564 в десятичной записи
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Метод <code>String.fromCodePoint()</code> был добавлен к стандарту ECMAScript в 6-й версии и может поддерживаться ещё не во всех браузерах или окружениях. Используйте код ниже в качестве полифила:</p>

<pre class="brush: js">/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
if (!String.fromCodePoint) {
  (function() {
    var defineProperty = (function() {
      // IE 8 поддерживает метод `Object.defineProperty` только на элементах DOM
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) &amp;&amp; $defineProperty;
      } catch(error) {}
      return result;
    }());
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function() {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return '';
      }
      var result = '';
      while (++index &lt; length) {
        var codePoint = Number(arguments[index]);
        if (
          !isFinite(codePoint) ||       // `NaN`, `+Infinity` или `-Infinity`
          codePoint &lt; 0 ||              // неверная кодовая точка Юникода
          codePoint &gt; 0x10FFFF ||       // неверная кодовая точка Юникода
          floor(codePoint) != codePoint // не целое число
        ) {
          throw RangeError('Invalid code point: ' + codePoint);
        }
        if (codePoint &lt;= 0xFFFF) { // кодовая точка Базовой многоязыковой плоскости (БМП)
          codeUnits.push(codePoint);
        } else { // Астральная кодовая точка; делим её на суррогатную пару
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          codePoint -= 0x10000;
          highSurrogate = (codePoint &gt;&gt; 10) + 0xD800;
          lowSurrogate = (codePoint % 0x400) + 0xDC00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length &gt; MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, 'fromCodePoint', {
        'value': fromCodePoint,
        'configurable': true,
        'writable': true
      });
    } else {
      String.fromCodePoint = fromCodePoint;
    }
  }());
}
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
</ul>
