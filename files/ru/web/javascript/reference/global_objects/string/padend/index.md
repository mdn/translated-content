---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/padEnd
---
<div>{{JSRef}}{{SeeCompatTable}}</div>

<p>Метод <strong><code>padEnd()</code></strong> дополняет текущую строку с помощью заданной строки (в конечном счёте повторяя), так чтобы результирующая строка достигла заданной длины. Дополнение применяется в конце (справа) текущей строки.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox"><var>str</var>.padEnd(<var>targetLength</var> [, <var>padString</var>])</pre>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt><code>targetLength</code></dt>
 <dd>Длина результирующей строки, после того как текущая строка была дополнена. Если этот параметр меньше длины текущей строки, то будет возвращена текущая строка , как она есть.</dd>
 <dt><code>padString</code> {{optional_inline}}</dt>
 <dd>Строка для дополнения текущей строки с. Если эта строка слишком длинная, она будет урезана и будет применяться её левая большая часть. " " (U+0020) - значение по умолчанию для этого параметра.</dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Строка указанной длинны дополненная с помощью дополнительной строки в конце текущей строки.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js">'abc'.padEnd(10);         // "abc       "
'abc'.padEnd(10, "foo");  // "abcfoofoof"
'abc'.padEnd(6,"123456"); // "abc123"
</pre>

<h2 id="Характеристики">Характеристики</h2>

<p>Этот метод ещё не достиг стандарта ECMAScript. Сейчас он в состоянии <a href="https://github.com/tc39/proposal-string-pad-start-end">proposal for ECMAScript</a>.</p>

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>
