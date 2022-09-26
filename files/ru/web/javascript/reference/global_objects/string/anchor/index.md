---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Référence(2)
  - String
  - Методы оборачивания в HTML
translation_of: Web/JavaScript/Reference/Global_Objects/String/anchor
---
<div>{{JSRef("Global_Objects", "String")}} {{deprecated_header}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>anchor()</code></strong> создаёт якорный HTML-элемент {{HTMLElement("a")}}, используемый в качестве цели гиперссылки.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>str</var>.anchor(<var>name</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Строка, представляющая атрибут <code>name</code> создаваемого тега.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Метод <code>anchor()</code> используется для программного создания и отображения якоря в документе.</p>

<p>Текстовая строка представляет из себя буквальный текст, который ва хотите показать пользователю. Строковый параметр <code>name</code> представляет атрибут <code>name</code> элемента {{HTMLElement("a")}}.</p>

<p>Якоря, созданные методом <code>anchor()</code>, становятся элементами в массиве {{domxref("document.anchors")}}.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_anchor">Пример: использование метода <code>anchor()</code></h3>

<pre class="brush: js">var myString = 'Оглавление';

document.body.innerHTML = myString.anchor('contents_anchor');
</pre>

<p>приведёт к выводу следующего HTML:</p>

<pre class="brush: html">&lt;a name="contents_anchor"&gt;Оглавление&lt;/a&gt;
</pre>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("String.prototype.link()")}}</li>
</ul>
