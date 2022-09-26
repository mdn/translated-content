---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
tags:
  - Experimental
  - Expérimental(2)
  - JavaScript
  - Method
  - Number
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---
<div>{{JSRef("Global_Objects", "Number")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>Number.isFinite()</code></strong> определяет, является ли переданное значение конечным числом.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code>Number.isFinite(<var>testValue</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>testValue</code></dt>
 <dd>Значение, проверяемое на конечность.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>В отличии от глобальной функции {{jsxref("Global_Objects/isFinite", "isFinite()")}}, этот метод принудительно не преобразует параметр в число. Это означает, что он возвращает <code>true</code> только для конечных значений числового типа.</p>

<h2 id="Examples">Примеры</h2>

<pre class="brush: js">Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, при использовании глобальной
                            // функции isFinite('0') было бы true
</pre>

<h2 id="Polyfill">Полифил</h2>

<pre class="brush: js">Number.isFinite = Number.isFinite || function(value) {
  return typeof value === 'number' &amp;&amp; isFinite(value);
}
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>Объект {{jsxref("Global_Objects/Number", "Number")}}, которому принадлежит этот метод.</li>
</ul>
