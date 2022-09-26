---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
translation_of: Web/JavaScript/Reference/Errors/Deprecated_octal
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<p> </p>

<pre>SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
SyntaxError: "0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the "0o" prefix instead</pre>

<p>Перевод:</p>

<pre class="syntaxbox">Ошибка синтаксиса: Восьмеричные числовые литералы и escape-последовательности, не разрешены в строгом режиме (Edge)
Ошибка синтаксиса: восьмеричные литералы с префиксом "0", и восьмеричные escape-последовательности считаются устаревшими;
для восьмеричных литералов используйте префикс "0o"
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}} только в строгом режиме.</p>

<h2 id="Что_пошло_не_так"><strong>Что пошло не так?</strong></h2>

<p>Восьмеричные литералы и восьмеричные escape-последовательности являются устаревшими и будут выдавать {{jsxref("SyntaxError")}} в строгом режиме. С ECMAScript2015 стандартным синтаксисом является использование ведущего нуля с последующей заглавной или строчной латинской буквой "O" (<code>0o</code> или <code>0O</code>)</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="0-prefixed_octal_literals_(восьмеричные_литералы_с_префиксом_0)">"0"-prefixed octal literals (восьмеричные литералы с префиксом "0")<br>
  </h3>

<pre class="brush: js example-bad">"use strict";

03;

// Ошибка синтаксиса: восьмеричные литералы с префиксом "0" и восьмеричные escape-последовательности считаются устаревшими
</pre>

<h3 id="Octal_escape_sequences_(Восьмеричные_escape-последовательности)">Octal escape sequences (Восьмеричные escape-последовательности)</h3>

<pre class="brush: js example-bad">"use strict";

"\251";

// SyntaxError: восьмеричные литералы с префиксом "0" и восьмеричные escape-последовательности считаются устаревшими
</pre>

<h3 id="Valid_octal_numbers_(Допустимые_восьмеричные_числа)">Valid octal numbers (Допустимые восьмеричные числа)</h3>

<p>Используйте ноль с последующей латинской буквой "o" или "O".</p>

<pre class="brush: js example-good">0o3;
</pre>

<p>Вместо escape-последовательностей можно использовать шестнадцатеричные escape-последовательности:</p>

<pre class="brush: js"><span style="font-size: 1rem; letter-spacing: -0.00278rem;">'\xA9';</span></pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Octal">Lexical grammar</a>(Лексическая грамматика)</li>
 <li>
  <p><a href="/en-US/docs/Web/JavaScript/Reference/Errors/Bad_octal">Warning: 08/09 is not a legal ECMA-262 octal constant</a>(Предупреждение: 08/09 нет законной восьмиштырьковой константы ECMA-262)</p>
 </li>
</ul>
