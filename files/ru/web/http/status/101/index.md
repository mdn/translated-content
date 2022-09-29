---
title: 101 Switching Protocol
slug: Web/HTTP/Status/101
translation_of: Web/HTTP/Status/101
---
<div>{{HTTPSidebar}}</div>

<p>Код ответа протокола HTTP 101 Switching Protocol указывает протокол, который сервер переключает, используя клиентский запрос {{HTTPHeader("Upgrade")}}.</p>

<p>Сервер отправляет заголовок ответа {{HTTPHeader ("Upgrade")}}, указывая протокол, на который он переключился.</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">101 Switching Protocol</pre>

<h2 id="Примеры">Примеры</h2>

<p>Протоколы переключения могут использоваться с <a href="/en-US/docs/Web/API/WebSockets_API">WebSockets</a>.</p>

<pre>HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade</pre>

<h2 id="Характеристики">Характеристики</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "101 Switching Protocol" , "6.2.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebSockets_API">WebSockets</a></li>
 <li>{{HTTPHeader("Upgrade")}}</li>
 <li>{{HTTPStatus("426")}} <code>Upgrade Required</code></li>
</ul>
