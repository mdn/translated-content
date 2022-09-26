---
title: Node.prefix
slug: Web/API/Element/prefix
translation_of: Web/API/Node/prefix
original_slug: Web/API/Node/prefix
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p>Свойство <code><strong>Node.prefix</strong></code> только для чтения, возвращающее префикс пространства имён указанного узла или <code>null,</code> если не указан префикс. Это свойство только для чтения.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><var>string</var> = element.prefix
</pre>

<h2 id="Examples">Пример</h2>

<p>Следующее выражение выведет "x".</p>

<pre class="brush:xml">&lt;x:div onclick="alert(this.prefix)"/&gt;
</pre>

<h2 id="Notes">Примечание</h2>

<p>Это будет работать только когда используется соответствующий парсер пространства имен. т.е. когда документ обработан как XML mime-type. Это не будет работать для документов HTML.</p>

<h2 id="Specification">Спецификация</h2>

<ul>
 <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-NodeNSPrefix">Node.prefix</a> (введено в употребление в DOM2)</li>
</ul>

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>
