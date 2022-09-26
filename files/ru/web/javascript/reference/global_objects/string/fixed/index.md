---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Методы оборачивания в HTML
translation_of: Web/JavaScript/Reference/Global_Objects/String/fixed
---
<div>{{JSRef("Global_Objects", "String")}} {{deprecated_header}}</div>

<h2 id="Summary">Сводка</h2>
<p>Метод <strong><code>fixed()</code></strong> создаёт HTML-элемент {{HTMLElement("tt")}}, заставляющий строку отображаться моноширинным шрифтом.</p>

<h2 id="Syntax">Синтаксис</h2>
<pre class="syntaxbox"><code><var>str</var>.fixed()</code></pre>

<h2 id="Description">Описание</h2>
<p>Метод <code>fixed()</code> заключает строку в тег <code>&lt;tt&gt;</code>: <code>"&lt;tt&gt;str&lt;/tt&gt;"</code>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_fixed">Пример: использование метода <code>fixed()</code></h3>
<p>В следующем примере для изменения форматирования строки используется метод <code>fixed()</code>:</p>
<pre class="brush: js">var worldString = 'Привет, мир';

document.write(worldString.fixed());
</pre>
<p>Этот пример генерирует такой же вывод, как и следующий HTML:</p>
<pre class="brush: html">&lt;tt&gt;Привет, мир&lt;/tt&gt;
</pre>

<h2 id="Specifications">Спецификации</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарии</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.fixed', 'String.prototype.fixed')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Изначальное определение. Реализована в JavaScript 1.0.<br>
    Определена в (нормативном) Приложении B по Дополнительным возможностям ECMAScript для веб-браузеров.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>
<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>
<ul>
 <li>{{jsxref("String.prototype.bold()")}}</li>
 <li>{{jsxref("String.prototype.italics()")}}</li>
 <li>{{jsxref("String.prototype.strike()")}}</li>
</ul>
