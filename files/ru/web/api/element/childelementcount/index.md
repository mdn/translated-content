---
title: Node.childElementCount
slug: Web/API/Element/childElementCount
tags:
  - API
  - DOM
  - ParentNode
  - Property
  - Reference
translation_of: Web/API/ParentNode/childElementCount
original_slug: Web/API/ParentNode/childElementCount
---
<div>
<p>{{ APIRef("DOM") }}</p>

<p>Свойство<code><strong> Node.childElementCount</strong></code> предназначено только для чтения и возвращает число дочерних<u> элементов</u> узла.</p>
</div>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox">var <var>elCount</var> = Node.childElementCount;
</pre>

<ul>
 <li><code><strong>elCount</strong></code> - целое число, количество дочерних элементов узла <strong>Node.</strong></li>
 <li><code><strong>Node</strong></code> - объект, представляющий собой <code>Document</code>, <code>DocumentFragment</code> или <code>Element</code>.</li>
</ul>

<div class="warning">
<p>А наш добрый друг<strong> Internet Explorer </strong>в <strong>6, 7</strong> и <strong>8</strong> версиях ошибочно считает элементами комментарии в HTML-коде ({{domxref("Comment")}}).</p>
</div>

<h2 id="Пример">Пример</h2>

<pre class="brush:js">var foo = document.getElementById("foo");
if (foo.childElementCount &gt; 0) {
    // здесь нужный код..
}</pre>

<h2 id="Спецификация">Спецификация</h2>

{{Specifications}}

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>
