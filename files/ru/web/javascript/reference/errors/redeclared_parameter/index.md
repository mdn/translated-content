---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
tags:
  - JavaScript
  - SyntaxError
  - Ошибки
translation_of: Web/JavaScript/Reference/Errors/Redeclared_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Одно и то же имя переменной сначала использовано в качестве параметра, а потом объявлено ещё раз в теле функции с помощью оператора присваивания <code><a href="/ru/docs/Web/JavaScript/Reference/Statements/let">let</a></code>. В JavaScript не допустимо переопределение переменной в рамках области видимости функции или блока при помощи <code>let</code>.</p>

<h2 id="Примеры">Примеры</h2>

<p>В данном случае переменная "arg" переопределяет аргумент:</p>

<pre class="brush: js example-bad">function f(arg) {
  let arg = 'foo';
}

// SyntaxError: redeclaration of formal parameter "arg"
</pre>

<p>Если вы хотите изменить значение переменной "arg" в теле функции, это можно сделать, но для этого не требуется объявлять эту же переменную ещё раз. Иначе говоря, ключевое слово <code>let</code> можно опустить. Если же вы хотите создать новую переменную, необходимо её переименовать, поскольку в противном случае она вступает в конфликт с уже существующим параметром функции.</p>

<pre class="brush: js example-good">function f(arg) {
  arg = 'foo';
}

function f(arg) {
  let bar = 'foo';
}
</pre>

<h2 id="Примечания_о_совместимости">Примечания о совместимости</h2>

<ul>
 <li>В версиях Firefox до Firefox 49 {{geckoRelease(49)}}, у данной ошибки был тип {{jsxref("TypeError")}} ({{bug(1275240)}}).</li>
</ul>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Statements/let">let</a></code></li>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Statements/const">const</a></code></li>
 <li><code><a href="/ru/docs/Web/JavaScript/Reference/Statements/var">var</a></code></li>
 <li><a href="/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Объявления">Объявления переменных</a> в <a href="/ru/docs/Web/JavaScript/Guide">Руководстве по JavaScript</a></li>
</ul>
