---
title: Element.accessKey
slug: Web/API/HTMLElement/accessKey
translation_of: Web/API/HTMLElement/accessKey
translation_of_original: Web/API/Element/accessKey
original_slug: Web/API/Element/accessKey
---
<div>{{APIRef("DOM")}}</div>

<div> </div>

<h2 id="Описание">Описание</h2>

<p>Свойство <strong>accessKey</strong> позволяет перейти к элементу с помощью сочетания клавиш - заданной им и тех, что назначит браузер.</p>

<div class="note">
<p>По сути, <strong>accessKey </strong>задаёт значение для <a href="https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/accesskey">одноимённого атрибута</a>...</p>
</div>

<div class="warning">
<p>Данное свойство использовать не рекомендуется, поскольку в браузерах уже заданы подобные привязки и неосторожное обращение может привести к жестокому конфликту.</p>
</div>

<h2 id="sect1"> </h2>

<h2 id="Синтаксис">Синтаксис</h2>

<pre>var key = elem.accessKey;
elem.accessKey = key;
</pre>

<h2 id="sect2"> </h2>

<h2 id="Пример">Пример</h2>

<pre class="brush: js">var elem = document.getElementById("id");
elem.accessKey = "w";
</pre>

<h2 id="Немного_информации">Немного информации</h2>

<p>Фокусировка на элемент произойдёт при нажатии следующих клавиш (,где<strong> acesskey</strong> - значение свойства<code><strong> acessKey).</strong></code></p>

<table class="standard-table" style="height: 252px; width: 388px;">
 <tbody>
  <tr>
   <td>
    <h3 id="Браузер"><strong>      Браузер</strong></h3>
   </td>
   <td>
    <h3 id="Сочетание">      Сочетание</h3>
   </td>
  </tr>
  <tr>
   <td>Firefox</td>
   <td>[Alt] [Shift] + <em>accesskey</em></td>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>[Alt] + <em>accesskey</em></td>
  </tr>
  <tr>
   <td>Chrome</td>
   <td>[Alt] + <em>accesskey</em></td>
  </tr>
  <tr>
   <td>Safari</td>
   <td>[Alt] + <em>accesskey</em></td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>[Shift] [Esc] + <em>accesskey</em></td>
  </tr>
 </tbody>
</table>
