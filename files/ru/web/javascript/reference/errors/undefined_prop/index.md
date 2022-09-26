---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
tags:
  - JavaScript
  - ReferenceError
  - Ошибки
  - Строгий режим
translation_of: Web/JavaScript/Reference/Errors/Undefined_prop
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">ReferenceError: reference to undefined property "x" (Firefox)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>(только в Firefox) Предупреждение {{jsxref("ReferenceError")}}, возникает, только если значение настройки <code>javascript.options.strict</code> равно <code>true</code>.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Совершена попытка обращения к свойству объекта, которое не определено. Существует два способа обращения к свойствам: обратитесь к странице справочника {{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}} для более подробной информации.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Случаи_возникновения_ошибки">Случаи возникновения ошибки</h3>

<p>В данном примере свойство <code>bar</code> не определено, поэтому возникнет ошибка <code>ReferenceError</code>.</p>

<pre class="brush: js example-bad">var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
</pre>

<h3 id="Правильный_код">Правильный код</h3>

<p>Чтобы избежать ошибки, потребуется либо задать для объекта свойство <code>bar</code>, либо проверить существование данного свойства, прежде чем обращаться к нему. Одним из способов это сделать является использование метода {{jsxref("Object.prototype.hasOwnProperty()")}}:</p>

<pre class="brush: js example-good">var foo = {};

// Задать свойство bar

foo.bar = 'moon';
console.log(foo.bar); // "moon"

// Убедиться, что свойство bar существует, прежде чем обращаться к нему

if (foo.hasOwnProperty('bar')) {
  console.log(foo.bar);
}</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}}</li>
</ul>
