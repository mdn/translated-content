---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
translation_of: Web/HTTP/Status/431
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <code><strong>431 Request Header Fields Too Large</strong></code>Код состояния ответа указывает, что сервер не желает обрабатывать запрос, потому что его поля заголовка слишком велики. Запрос может быть повторно представлен после уменьшения размера полей заголовка запроса.</p>

<p>Его можно использовать, если общее количество полей заголовка запроса слишком велико или когда одно поле заголовка слишком велико.</p>

<p>Эта ошибка не должна происходить в хорошо проверенных производственных системах, но её можно найти чаще при тестировании новой системы.</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">431 Request Header Fields Too Large</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("6585", "431 Request Header Fields Too Large" , "5")}}</td>
   <td>Additional HTTP Status Codes</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{Glossary("Request header")}}</li>
</ul>
