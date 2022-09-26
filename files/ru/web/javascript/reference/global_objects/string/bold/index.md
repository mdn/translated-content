---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Методы оборачивания в HTML
translation_of: Web/JavaScript/Reference/Global_Objects/String/bold
---
<div>{{JSRef("Global_Objects", "String")}} {{deprecated_header}}</div>

<h2 id="Summary">Сводка</h2>
<p>Метод <strong><code>bold()</code></strong> создаёт HTML-элемент {{HTMLElement("b")}}, заставляющий строку отображаться полужирным шрифтом.</p>

<h2 id="Syntax">Синтаксис</h2>
<pre class="syntaxbox"><code><var>str</var>.bold()</code></pre>

<h2 id="Description">Описание</h2>
<p>Метод <code>bold()</code> заключает строку в тег <code>&lt;b&gt;</code>: <code>"&lt;b&gt;str&lt;/b&gt;"</code>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_bold">Пример: использование метода <code>bold()</code></h3>
<p>В следующем примере демонстрируется использование нескольких строковых методов для изменения форматирования строки:</p>
<pre class="brush: js">var worldString = 'Привет, мир';

document.write(worldString.blink());
document.write(worldString.bold());
document.write(worldString.italics());
document.write(worldString.strike());
</pre>
<p>Этот пример генерирует такой же вывод, как и следующий HTML:</p>
<pre class="brush: html">&lt;blink&gt;Привет, мир&lt;/blink&gt;
&lt;b&gt;Привет, мир&lt;/b&gt;
&lt;i&gt;Привет, мир&lt;/i&gt;
&lt;strike&gt;Привет, мир&lt;/strike&gt;
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
   <td>{{SpecName('ES6', '#sec-string.prototype.bold', 'String.prototype.bold')}}</td>
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
 <li>{{jsxref("String.prototype.blink()")}}</li>
 <li>{{jsxref("String.prototype.italics()")}}</li>
 <li>{{jsxref("String.prototype.strike()")}}</li>
</ul>
