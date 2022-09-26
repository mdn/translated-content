---
title: Node.removeChild
slug: Web/API/Node/removeChild
tags:
  - API
  - DOM
  - DOM Element Methods
  - Method
translation_of: Web/API/Node/removeChild
---
<div>{{ApiRef}}</div>

<h2 id="Summary">Аннотация</h2>

<p>Удаляет дочерний элемент из DOM. Возвращает удалённый элемент.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><em>var oldChild</em> = <em>element</em>.removeChild(<em>child</em>);
<em>element</em>.removeChild(<em>child</em>);
</pre>

<ul>
 <li><code>child</code> дочерний элемент который будет удалён из DOM.</li>
 <li><code>element</code> родительский элемент удаляемого <code>child</code>.</li>
 <li><code>oldChild</code> ссылка на удаляемый дочерний элемент. <code>oldChild</code> === <code>child</code>.</li>
</ul>

<p>Удалённый дочерний элемент остаётся в памяти, но больше не является частью DOM. Вы можете повторно использовать удалённый элемент с помощью ссылки на объект - <code>oldChild</code>.</p>

<p>Если <code>child</code> не является дочерним элементом <code>element</code>, тогда метод генерирует исключение. Также это происходит если <code>child</code> является дочерним элементом <code>element</code> во время вызова метода, но был удалён во время вызова обработчика событий удаляющего элемент(т.e при удалении элемента непосредственно перед вызовом обработчика событий).</p>

<h2 id="Example">Пример</h2>

<pre>&lt;!-- Пример --&gt;

&lt;div id="top" align="center"&gt;
  &lt;div id="nested"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush:js">// <em>Удаление элемента с известным родителем</em>
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
</pre>

<pre class="brush:js">// Удаление элемента без указания его родителя
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
</pre>

<pre class="brush:js">// Удаление всех дочерних элементов
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
</pre>

<h2 id="Specification">Спецификация</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild">DOM Level 1 Core: removeChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066">DOM Level 2 Core: removeChild</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066">DOM Level 3 Core: removeChild</a></li>
</ul>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{domxref("Node.replaceChild")}}</li>
 <li>{{domxref("Node.parentNode")}}</li>
 <li>{{domxref("ChildNode.remove")}}</li>
</ul>
