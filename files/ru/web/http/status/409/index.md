---
title: 409 Conflict
slug: Web/HTTP/Status/409
tags:
  - HTTP
  - HTTP Статус Код
  - Ошибка клиента
  - Ссылка
translation_of: Web/HTTP/Status/409
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <code><strong>409 Conflict</strong></code> код состояния ответа указывает на конфликт запроса с текущим состоянием сервера.</p>

<p>Конфликты чаще всего возникают в ответ на {{HTTPMethod("PUT")}} запрос. Например, вы можете получить ответ 409 при загрузке файла, который старше, чем тот, который уже существует на сервере, что приводит к конфликту управления версиями.</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">409 Conflict</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "409 Conflict" , "6.5.8")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPMethod("PUT")}}</li>
</ul>
