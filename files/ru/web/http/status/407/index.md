---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
translation_of: Web/HTTP/Status/407
---
<div>
<p>{{HTTPSidebar}}</p>

<p>HTTP <strong><code>407 Proxy Authentication Required </code></strong>код ответа на ошибку клиента указывает, что запрос не был применён, поскольку он не имеет достоверных учётных данных для {{Glossary("proxy server")}}, который находится между браузером и сервером, который может получить доступ к запрашиваемому ресурсу..</p>

<p>Этот статус отправляется с {{HTTPHeader("Proxy-Authenticate")}}, который содержит информацию о том, как правильно разрешить авторизацию.</p>
</div>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">407 Proxy Authentication Required </pre>

<h2 id="Пример_ответа">Пример ответа</h2>

<pre>HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7235", "407 Proxy Authentication Required" , "3.2")}}</td>
   <td>HTTP/1.1: Authentication</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузером">Совместимость с браузером</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Authentication">HTTP authentication</a></li>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}</li>
</ul>
