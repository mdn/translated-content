---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
translation_of: Web/HTTP/Status/415
---
<div>{{HTTPSidebar}}</div>

<p>Код ответа на ошибку клиента HTTP<strong> 415 Unsupported Media Type</strong> указывает, что сервер отказывается принять запрос, потому что формат содержимого не поддерживается сервером.</p>

<p>Проблема формата может быть связана с указанным запросом {{HTTPHeader("Content-Type")}} или {{HTTPHeader("Content-Encoding")}} или в результате непосредственного контроля данных.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">415 Unsupported Media Type</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Content-Encoding")}}</li>
 <li>{{HTTPHeader("Accept")}}</li>
</ul>
