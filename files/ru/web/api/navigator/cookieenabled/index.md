---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
translation_of: Web/API/Navigator/cookieEnabled
---
<p>{{ ApiRef("HTML DOM") }}</p>

<p>Возвращает логическое значение (Boolean), показывающее включены ли куки или нет.(свойство только для чтения.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="eval">var cookieEnabled = navigator.cookieEnabled;
</pre>

<ul>
 <li><code>cookieEnabled</code> is a Boolean <code>true</code> or <code>false</code>.</li>
</ul>

<h2 id="Example">Пример</h2>

<pre class="brush: js">if (!navigator.cookieEnabled) {
  // пусть пользователь знает, что включённые куки делают страницу более полезной.
</pre>

<h2 id="Совместимость_в_браузере">Совместимость в браузере</h2>

<p>{{Compat}}</p>

<h2 id="Specification">Спецификация</h2>

<p>HTML WHATWG</p>
