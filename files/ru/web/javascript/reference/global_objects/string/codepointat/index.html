---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
tags:
  - ECMAScript6
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Référence(2)
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---
<div>{{JSRef("Global_Objects", "String")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>codePointAt()</code></strong> возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>str</var>.codePointAt(<var>pos</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>pos</code></dt>
 <dd>Позиция элемента в строке, чья кодовая точка возвращается функцией.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Если на указанной позиции нет элементов, будет возвращено значение {{jsxref("Global_Objects/undefined", "undefined")}}. Если суррогатная пара UTF-16 не начинается в позиции <code>pos</code>, будет возвращено кодовое значение в позиции <code>pos</code>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_codePointAt">Пример: использование метода <code>codePointAt()</code></h3>

<pre class="brush: js">'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined
</pre>

<h2 id="Polyfill">Полифил</h2>

<p>Следующий полифил расширяет прототип строки определённой в ECMAScript 6 функцией <code>codePointAt()</code>, если браузер не имеет её родной поддержки.</p>

<pre class="brush: js">/*! http://mths.be/codepointat v0.1.0 от @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // необходимо для поддержки методов `apply`/`call` с `undefined`/`null`
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) { // лучше, чем `isNaN`
        index = 0;
      }
      // Проверяем выход индекса за границы строки
      if (index &lt; 0 || index &gt;= size) {
        return undefined;
      }
      // Получаем первое кодовое значение
      var first = string.charCodeAt(index);
      var second;
      if ( // проверяем, не начинает ли оно суррогатную пару
        first &gt;= 0xD800 &amp;&amp; first &lt;= 0xDBFF &amp;&amp; // старшая часть суррогатной пары
        size &gt; index + 1 // следующее кодовое значение
      ) {
        second = string.charCodeAt(index + 1);
        if (second &gt;= 0xDC00 &amp;&amp; second &lt;= 0xDFFF) { // младшая часть суррогатной пары
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
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
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
</ul>
