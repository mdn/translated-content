---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
translation_of: Web/JavaScript/Reference/Errors/Reserved_identifier
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: The use of a future reserved word for an identifier is invalid (Edge)
SyntaxError: "x" is a reserved identifier (Firefox)
SyntaxError: Unexpected reserved word (Chrome)</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Ключевые_слова">Ключевые слова</a> используются в качестве идентификаторов. Ключевые слова зарезервированные и в строгом и обычном режиме:</p>

<ul>
 <li><code>enum</code></li>
</ul>

<p>Следующие ключевые слова резервируются для кода, который выполняется только в строгом режиме (strict mode):</p>

<ul class="threecolumns">
 <li><code>implements</code></li>
 <li><code>interface</code></li>
 <li> <code><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let">let</a></code></li>
 <li><code>package</code></li>
 <li><code>private</code></li>
 <li><code>protected</code></li>
 <li><code>public</code></li>
 <li><code>static</code></li>
</ul>

<h2 id="Примеры">Примеры</h2>

<h3 id="Строгий_и_нестрогий_режимы_резервирования_ключевых_строк">Строгий и нестрогий режимы резервирования ключевых строк</h3>

<p>Идентификатор <code>enum</code> зарезервирован.</p>

<pre class="brush: js example-bad">var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
</pre>

<p>Резервирование большего количества идентификаторов с использованием строгого режима.</p>

<pre class="brush: js example-bad">"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
</pre>

<p>Вам необходимо переименовать следующие переменные.</p>

<pre class="brush: js example-good">var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];</pre>

<h3 id="Обновление_старых_браузеров">Обновление старых браузеров</h3>

<p>Например, если вы используете старый браузер, в котором ещё не реализована функция <code><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let">let</a></code> или <code><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/class">class</a></code>, вам следует перейти на более новую версию браузера, которая поддерживает данные языковые функции.</p>

<pre class="brush: js">"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (появится только в старых браузерах, например, Firefox 44 и старше)
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="http://wiki.c2.com/?GoodVariableNames">Правильные имена переменных</a></li>
</ul>
