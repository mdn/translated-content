---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
translation_of: Web/HTTP/Status/426
---
<div>{{HTTPSidebar}}</div>

<p>Код ответа на  HTTP <code><strong>426 Upgrade Required</strong></code>  указывает, что сервер отказывается выполнять запрос с использованием текущего протокола, но может захотеть сделать это после того, как клиент обновится до другого протокола.</p>

<p>Сервер отправляет {{HTTPHeader("Upgrade")}} с этим ответом, чтобы указать требуемый протокол (ы).</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">426 Upgrade Required</pre>

<h2 id="Примеры">Примеры</h2>

<pre>HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "426 Upgrade Required" , "6.5.15")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPHeader("Upgrade")}}</li>
 <li>{{HTTPStatus("101")}} <code>Switching Protocol</code></li>
</ul>
