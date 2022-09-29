---
title: 411 Length Required
slug: Web/HTTP/Status/411
translation_of: Web/HTTP/Status/411
---
<div>{{HTTPSidebar}}</div>

<p>Код ответа на ошибку <code><strong>411</strong></code><strong><code> Length Required</code></strong> указывает, что сервер отказывается принять запрос без определённого  {{HTTPHeader("Content-Length")}}. </p>

<p>Обратите внимание, что по спецификации при отправке данных в ряд фрагментов<strong> Content-Length</strong> опущен, и в начале каждого фрагмента вам нужно добавить длину текущего фрагмента в шестнадцатеричном формате. Подробнее смотрите {{HTTPHeader("Transfer-Encoding")}}.</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">411 Length Required</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "411 Length Required" , "6.5.10")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPHeader("Content-Length")}}</li>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
