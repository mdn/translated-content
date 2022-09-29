---
title: 422 Unprocessable Entity
slug: Web/HTTP/Status/422
tags:
  - HTTP
  - HTTP коды состояний
  - WebDAV
  - Коды состояний
  - Ошибка клиента
translation_of: Web/HTTP/Status/422
---
<p>{{HTTPSidebar}}</p>

<p>Код состояния ответа HTTP <code><strong>422 Unprocessable Entity</strong></code> указывает, что сервер понимает тип содержимого в теле запроса и синтаксис запроса является правильным, но серверу не удалось обработать инструкции содержимого.</p>

<p>К примеру, эта ошибка может возникнуть, если тело запроса содержит хорошо сформированный (т.е. синтаксически корректный) XML-документ, но семантически ошибочные XML-инструкции.</p>

<div class="warning">
<p><strong>Важно</strong>: Клиент не должен повторять запрос повторно, т.е. без модификаций.</p>
</div>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">422 Unprocessable Entity</pre>

<h2 id="Характеристики">Характеристики</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("4918", "422 Unprocessable Entity" , "11.2")}}</td>
   <td>HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)</td>
  </tr>
 </tbody>
</table>
