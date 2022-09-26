---
title: Element.tagName
slug: Web/API/Element/tagName
translation_of: Web/API/Element/tagName
---
<p>{{ ApiRef("DOM") }}</p>

<h2 id="Описание">Описание</h2>

<p>Возвращает HTML-тег элемента <em>("div", "p", "a" и т.д).</em></p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="eval"><em>var elementName</em> = element.tagName;
</pre>

<ul>
 <li><strong><code>elementName</code></strong> это строка, содержащая название HTML-тега элемента<code><strong> element.</strong></code></li>
</ul>

<div class="warning">
<p>В XML (и XML-подобных языках) возвращаемое значение будет в нижнем регистре, а в HTML - в верхнем.</p>
</div>

<div class="note">
<p>Существует более древнее и обыденное свойство <a href="/en/DOM/Node.nodeName" title="En/DOM/Node.nodeName">nodeName</a>!</p>
</div>

<h2 id="Example">Пример</h2>

<p>Предположим, есть на странице элемент с id <strong>"born"</strong>:</p>

<pre class="eval">&lt;span id="born"&gt;Я родился...&lt;/span&gt;
</pre>

<p>Давайте узнаем его HTML-тег:</p>

<pre class="brush: js">var span = document.getElementById("born");
alert(span.tagName); //"SPAN"
</pre>

<h2 id="Спецификации">Спецификации</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-104682815">DOM Level 2 Core: tagName</a></li>
 <li><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents">HTML 5: APIs in HTML documents</a></li>
</ul>
