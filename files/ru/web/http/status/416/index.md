---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
tags:
  - HTTP
  - Код состояния
  - Ошибка клиента
translation_of: Web/HTTP/Status/416
---
<div>{{HTTPSidebar}}</div>

<p>Код ошибки HTTP <strong>416 Range Not Satisfiable</strong> указывает, что сервер не может обслуживать запрошенные диапазоны. Наиболее вероятная причина заключается в том, что документ не содержит таких диапазонов или что значение {{HTTPHeader ("Range")}}, хотя и синтаксически корректно, не имеет смысла.</p>

<p>Сообщение ответа 416 содержит {{HTTPHeader("Content-Range")}}, указывающий на неудовлетворённый диапазон (это <code>'*'</code>), за которым следуют <code>'/'</code> и текущий ресурс. Например: <code>Content-Range: */12777</code></p>

<p>Столкнувшись с этой ошибкой, браузеры обычно либо прерывают операцию (например, загрузка будет считаться не возобновляемой), либо снова запрашиваются ведь документ.</p>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">416 Range Not Satisfiable</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7233", "416 Request Not Satisfiable" , "4.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPStatus(206)}} <code>Partial Content</code></li>
 <li>{{HTTPHeader("Content-Range")}}</li>
 <li>{{HTTPHeader("Range")}}</li>
</ul>
