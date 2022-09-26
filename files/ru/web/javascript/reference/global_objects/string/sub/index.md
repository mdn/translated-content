---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Методы оборачивания в HTML
translation_of: Web/JavaScript/Reference/Global_Objects/String/sub
---
<div>{{JSRef("Global_Objects", "String")}} {{deprecated_header}}</div>

<h2 id="Summary">Сводка</h2>
<p>Метод <strong><code>sub()</code></strong> создаёт HTML-элемент {{HTMLElement("sub")}}, заставляющий строку отображаться подстрочным текстом (нижним индексом).</p>

<h2 id="Syntax">Синтаксис</h2>
<pre class="syntaxbox"><code><var>str</var>.sub()</code></pre>

<h2 id="Description">Описание</h2>
<p>Метод <code>sub()</code> заключает строку в тег <code>&lt;sub&gt;</code>: <code>"&lt;sub&gt;str&lt;/sub&gt;"</code>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_sub_and_sup_methods_to_format_a_string">Пример: использование методов <code>sub()</code> и <code>sup()</code></h3>
<p>В следующем примере для форматирования строки используются методы <code>sub()</code> и {{jsxref("String.prototype.sup()", "sup()")}}:</p>
<pre class="brush: js">var superText = 'надстрочный';
var subText = 'подстрочный';

document.write('Вот так выглядит ' + superText.sup() + ' текст.');
document.write('Вот так выглядит ' + subText.sub() + ' текст.');
</pre>
<p>Этот пример генерирует такой же вывод, как и следующий HTML:</p>
<pre class="brush: html">Вот так выглядит &lt;sup&gt;надстрочный&lt;/sup&gt; текст.
Вот так выглядит &lt;sub&gt;подстрочный&lt;/sub&gt; текст.
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
   <td>{{SpecName('ES6', '#sec-string.prototype.sub', 'String.prototype.sub')}}</td>
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
 <li>{{jsxref("String.prototype.sup()")}}</li>
</ul>
