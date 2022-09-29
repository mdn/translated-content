---
title: IIFE
slug: Glossary/IIFE
tags:
  - IIFE
  - JavaScript
  - Глоссарий
  - КодингСкриптинг
translation_of: Glossary/IIFE
original_slug: Глоссарий/IIFE
---
<p><strong>IIFE </strong>(Immediately Invoked Function Expression) это {{glossary("JavaScript")}} {{glossary("функция")}}, которая выполняется сразу же после того, как она была определена.</p>



<pre><code>(function () {
    statements
})();</code></pre>

<p>Это тип выражений, также известный как {{glossary("Self-Executing Anonymous Function")}}, который состоит из двух основных частей. Первая - это сама анонимная функция с лексической областью видимости, заключённым внутри {{jsxref("Operators/Grouping", "Оператора группировки")}} <code>()</code>. Благодаря этому переменные IIFE замыкаются в его пределах, и глобальная область видимости ими не засоряется.</p>

<p>Вторая часть создаёт мгновенно выполняющееся функциональное выражение  <code>()</code> , благодаря которому JavaScript-движок выполняет функцию напрямую.</p>



<h2 id="Примеры">Примеры</h2>

<p>Функция становится мгновенно выполняющимся функциональным выражением. Переменные внутри функции не могут быть использованы за пределами её области видимости.</p>

<pre><code>(function () {
    var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"</code></pre>

<p>Переменная, которой присвоено IIFE, хранит в себе результат выполнения функции, но не саму функцию.</p>

<pre><code>var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"</code></pre>





<h2 id="Узнать_больше">Узнать больше</h2>

<h3 id="Материалы">Материалы</h3>

<ul>
 <li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">Ben Alman's blog post defining IIFEs</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions">Quick example</a> (в конце абзаца "Functions", сразу после "Custom objects")</li>
</ul>

<h3 id="Основные_понятия">Основные понятия</h3>

<ul>
 <li>{{interwiki("wikipedia", "Immediately-invoked function expression", "IIFE")}} на Wikipedia</li>
</ul>
