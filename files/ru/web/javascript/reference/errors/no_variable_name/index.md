---
title: 'SyntaxError: missing variable name'
slug: Web/JavaScript/Reference/Errors/No_variable_name
tags:
  - JavaScript
  - SyntaxError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/No_variable_name
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>У переменной отсутствует имя. Скорее всего, дело в синтаксической ошибке в вашем коде. Может, где-то неправильно стоит запятая, или у вас возникли трудности с именованием. Прекрасно вас понимаем! Придумывать названия – очень непросто.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Отсутствует_имя_переменной">Отсутствует имя переменной</h3>

<pre class="brush: js example-bad">var = "foo";
</pre>

<p>Придумывать хорошие имена переменным очень тяжело, все мы с таким сталкивались.</p>

<pre class="brush: js example-good">var ohGodWhy = "foo";</pre>

<h3 id="Зарезервированные_ключевые_слова_не_могут_использоваться_как_имена_переменных">Зарезервированные ключевые слова не могут использоваться как имена переменных</h3>

<p>Есть несколько имён, которые являются <a href="/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Ключевые_слова">зарезервированными ключевыми словами</a>. Их нельзя использовать. Увы :(</p>

<pre class="brush: js example-bad">var debugger = "whoop";
// SyntaxError: missing variable name
</pre>

<h3 id="Объявление_нескольких_переменных">Объявление нескольких переменных</h3>

<p>При объявлении нескольких переменных обращайте особое внимание на запятые. Нет ли лишних запятых? Не поставили ли вы случайно запятые вместо точек с запятыми?</p>

<pre class="brush: js example-bad">var x, y = "foo",
var x, = "foo"

var first = document.getElementById('раз'),
var second = document.getElementById('два'),

// SyntaxError: missing variable name
</pre>

<p>Исправленный вариант:</p>

<pre class="brush: js example-good">var x, y = "foo";
var x = "foo";

var first = document.getElementById('раз');
var second = document.getElementById('два');</pre>

<h3 id="Массивы">Массивы</h3>

<p>Литералам {{jsxref("Array")}} в JavaScript необходимы квадратные скобки вокруг значений. Такое не сработает:</p>

<pre class="brush: js example-bad">var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
</pre>

<p>А вот так будет правильно:</p>

<pre class="brush: js example-good">var arr = [1,2,3,4,5];</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="http://wiki.c2.com/?GoodVariableNames">Хорошие имена переменных (на англ.)</a></li>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
 <li><a href="/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Объявления">Объявления переменных в Руководстве по JavaScript</a></li>
</ul>
