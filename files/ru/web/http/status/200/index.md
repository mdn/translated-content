---
title: 200 OK
slug: Web/HTTP/Status/200
translation_of: Web/HTTP/Status/200
---
<div>{{HTTPSidebar}}</div>

<p>Код ответа об успешном статусе "<em>The HTTP</em><strong> 200 OK</strong>" указывает, что запрос выполнен успешно. Ответ 200 может кешироваться по умолчанию.</p>

<p>Значение успеха зависит от метода <em>HTTP-</em>запроса:</p>

<ul>
 <li>{{HTTPMethod("GET")}}: Ресурс был извлечён и передан в теле сообщения.</li>
 <li>{{HTTPMethod("HEAD")}}: Заголовки объектов находятся в теле сообщения.</li>
 <li>{{HTTPMethod("POST")}}: Ресурс, описывающий результат действия, передаётся в теле сообщения.</li>
 <li>{{HTTPMethod("TRACE")}}:Тело сообщения содержит сообщение запроса, полученное сервером.</li>
</ul>

<p>Успешный результат {{HTTPMethod("PUT")}} или {{HTTPMethod("DELETE")}} часто не <strong>200 OK</strong>, {{HTTPStatus ("204")}} <strong>No Content</strong> ( или {{HTTPStatus("201")}} <strong>Created</strong>, когда ресурс загружается в первый раз).</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">200 OK</pre>

<h2 id="Характеристики">Характеристики </h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "200 OK" , "6.3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузером">Совместимость с браузером</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a></li>
</ul>
