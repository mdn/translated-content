---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
translation_of: Web/HTTP/Status/414
---
<div>{{HTTPSidebar}}</div>

<p>Код состояния HTTP <code><strong>414 URI Too Long</strong></code>  указывает, что URI, запрошенный клиентом, длиннее, чем сервер готов интерпретировать.</p>

<p>Есть несколько редких условий, когда это может произойти:</p>

<ul>
 <li>Когда клиент неправильно конвертировал {{HTTPMethod("POST")}} запрос в {{HTTPMethod ("GET")}} запрос с длинной информацией запроса,</li>
 <li>Когда клиент спустился в цикл перенаправления (например, перенаправленный префикс URI, который указывает на суффикс самого себя),,</li>
 <li>Или когда сервер подвергается атаке со стороны клиента, пытающегося использовать потенциальные дыры в безопасности.</li>
</ul>

<h2 id="Статус">Статус</h2>

<pre class="syntaxbox">414 URI Too Long</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификации</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "414 URI Too Long" , "6.5.12")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{Glossary("URI")}}</li>
</ul>
