---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
translation_of: Web/HTTP/Status/203
---
<div>{{HTTPSidebar}}</div>

<p>"The HTTP <strong><code>203 Non-Authoritative Information" </code></strong>Статус ответа указывает, что запрос был успешным, но прилагаемая полезная нагрузка была изменена с учётом ответа сервера{{HTTPStatus("200")}} (<code>OK</code>) сервера происхождения с помощью преобразующего {{Glossary("Proxy server", "proxy")}}.</p>

<p>"The <code>203"</code> ответ  аналогичен значению <code><a href="/en-US/docs/Web/HTTP/Headers/Warning#Warning_codes">214</a></code>, значение "<code>Transformation Applied"</code>, кода  {{HTTPHeader("Warning")}} имеет дополнительное преимущество, применимое к ответам с любым кодом состояния.</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">203 Non-Authoritative Information</pre>

<h2 id="Характеристики">Характеристики</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPStatus("200")}}</li>
 <li>{{Glossary("Proxy server")}}</li>
 <li>{{HTTPHeader("Warning")}}</li>
</ul>
