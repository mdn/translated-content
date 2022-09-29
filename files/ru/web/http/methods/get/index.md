---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - HTTP
  - Метод запроса
  - Справка
translation_of: Web/HTTP/Methods/GET
---
<div>{{HTTPSidebar}}</div>

<p><strong>HTTP-метод <code>GET</code></strong> запрашивает представление указанного ресурса. <code>GET</code>-запросы должны только получать данные.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Запрос имеет тело</th>
   <td>Нет</td>
  </tr>
  <tr>
   <th scope="row">Успешный ответ имеет тело</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe", "Безопасный")}}</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent", "Идемпотентный")}}</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable", "Кешируемый")}}</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">Допускается в <a href="/ru/docs/Learn/HTML/Forms">HTML-формах</a></th>
   <td>Да</td>
  </tr>
 </tbody>
</table>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">GET /index.html
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Заголовок</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "GET", "4.3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/HTTP/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8">HTTP Заголовки</a></li>
 <li>{{HTTPHeader("Range")}}</li>
 <li><a href="/ru/docs/Web/HTTP/Methods/POST">POST</a></li>
</ul>
