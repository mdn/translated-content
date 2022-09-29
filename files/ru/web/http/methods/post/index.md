---
title: POST
slug: Web/HTTP/Methods/POST
tags:
  - HTTP
  - Метод запроса
  - Справка
translation_of: Web/HTTP/Methods/POST
---
<div>{{HTTPSidebar}}</div>

<p><strong>HTTP-метод <code>POST</code></strong> предназначен для отправки данных на сервер. Тип тела запроса указывается в заголовке {{HTTPHeader("Content-Type")}}.</p>

<p>Разница между {{HTTPMethod("PUT")}} и <code>POST</code> состоит в том, что <code>PUT</code> является идемпотентным: повторное его применение даёт тот же результат, что и при первом применении (то есть у метода нет <em>побочных эффектов</em>), тогда как повторный вызов одного и того же метода <code>POST</code> может иметь такие эффекты, как например, оформление одного и того же заказа несколько раз.</p>

<p>Запрос <code>POST</code> обычно отправляется через форму HTML и приводит к изменению на сервере.  element or the formenctype attribute of the &lt;input> or &lt;button> elements:">В этом случае тип содержимого выбирается путём размещения соответствующей строки в атрибуте {{htmlattrxref ("enctype", "form")}} элемента {{HTMLElement ("form")}} или {{htmlattrxref ("formenctype", "input")}} атрибута элементов {{HTMLElement ("input")}} или {{HTMLElement ("button")}}:</p>

<ul>
 <li><code>application/x-www-form-urlencoded</code>: значения кодируются в кортежах с ключом, разделённых символом <code>'&amp;'</code>, с <code>'='</code> между ключом и значением. Не буквенно-цифровые символы - {{glossary ("percent encoded")}}: это причина, по которой этот тип не подходит для использования с двоичными данными (вместо этого используйте <code>multipart/form-data</code>)</li>
 <li><code>multipart/form-data</code>: каждое значение посылается как блок данных ("body part"), с заданными пользовательским клиентом разделителем ("boundary"), разделяющим каждую часть. Эти ключи даются в заголовки <code>Content-Disposition</code> каждой части</li>
 <li><code>text/plain</code></li>
</ul>

<p>Когда запрос <code>POST</code> отправляется с помощью метода, отличного от HTML-формы, — например, через {{domxref ("XMLHttpRequest")}} — тело может принимать любой тип. Как описано в спецификации HTTP 1.1, <code>POST</code> предназначен для обеспечения единообразного метода для покрытия следующих функций:</p>

<ul>
 <li>Аннотация существующих ресурсов</li>
 <li>Публикация сообщения на доске объявлений, в новостной группе, в списке рассылки или в аналогичной группе статей;</li>
 <li>Добавление нового пользователя посредством модальности регистрации;</li>
 <li>Предоставление блока данных, например, результата отправки формы, процессу обработки данных;</li>
 <li>Расширение базы данных с помощью операции добавления.</li>
</ul>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Запрос имеет тело</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">Успешный ответ имеет тело</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe", "Безопасный")}}</th>
   <td>Нет</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent", "Идемпотентный")}}</th>
   <td>Нет</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable", "Кешируемый")}}</th>
   <td>Только если включена информация о свежести сообщения</td>
  </tr>
  <tr>
   <th scope="row">Допускается в <a href="/ru/docs/Learn/HTML/Forms">HTML-формах</a></th>
   <td>Да</td>
  </tr>
 </tbody>
</table>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">POST /index.html</pre>

<h2 id="Пример">Пример</h2>

<p>Простая форма запроса, используя стандартный <code>application/x-www-form-urlencoded</code> content type:</p>

<pre class="line-numbers  language-html">POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&amp;to=Mom</pre>

<p>Форма запроса, используя <code>multipart/form-data</code> content type:</p>

<pre>POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
</pre>

<h2 id="Спецификация">Спецификация</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Content-Disposition")}}</li>
 <li><a href="/ru/docs/Web/HTTP/Methods/GET">GET</a></li>
</ul>
