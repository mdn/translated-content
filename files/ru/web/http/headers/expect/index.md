---
title: Expect
slug: Web/HTTP/Headers/Expect
translation_of: Web/HTTP/Headers/Expect
original_slug: Web/HTTP/Заголовки/Expect
---
<div>{{HTTPSidebar}}</div>

<p>Запрос "HTTP Expect" указывает ожидания, которые должен выполнить сервер, чтобы правильно обработать запрос.</p>

<p>Единственным ожиданием, определённым в спецификации, является "Expect: 100-continue", на который сервер должен ответить:</p>

<ul>
 <li>{{HTTPStatus("100")}} если информации, содержащейся в заголовке, достаточно, чтобы вызвать немедленный успех,</li>
 <li>{{HTTPStatus("417")}} (Expectation Failed) если он не может удовлетворить ожидания; или любой другой статус 4xx..</li>
</ul>

<p>Например, сервер может отклонить запрос, если его {{HTTPHeader("Content-Length")}} слишком большой.</p>

<p>Обычные браузеры не отправляют заголовок Expect, но некоторые другие , такие как cURL, делают это по умолчанию.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Синтаксис">Синтаксис</h2>

<p>Никаких других ожиданий, кроме «100-continue», не указано</p>

<pre class="syntaxbox">Expect: 100-continue
</pre>

<h2 id="Директивы">Директивы</h2>

<dl>
 <dt>100-continue</dt>
 <dd>Сообщает получателям, что клиент собирается отправить (по-видимому большой) тело сообщения в этот запрос и хочет получить промежуточный ответ  {{HTTPStatus("100")}} (Continue).</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<h3 id="Большой_текст_сообщения">Большой текст сообщения</h3>

<p>Клиент отправляет запрос с заголовком Expect и ожидает ответа сервера перед отправкой тела сообщения.</p>

<pre>PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
</pre>

<p>Сервер теперь проверяет  запрос и может ответить с ответом {{HTTPStatus("100")}} (Continue), чтобы дать клиенту указание продолжить и отправить тело сообщения, или он отправит  {{HTTPStatus("417")}} (Expectation Failed), если какие-либо из ожиданий не могут быть выполнены.</p>

<h2 id="Характеристики">Характеристики</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Expect", "5.1.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузером">Совместимость с браузером</h2>

<p>Известно, что обычные браузеры не отправляют этот заголовок.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPStatus("417")}}<code> Expectation Failed</code></li>
 <li>{{HTTPStatus("100")}}<code> Continue</code></li>
</ul>
