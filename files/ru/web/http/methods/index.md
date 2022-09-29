---
title: Методы HTTP запроса
slug: Web/HTTP/Methods
tags:
  - HTTP
  - Methods
  - Reference
translation_of: Web/HTTP/Methods
---
<p>{{HTTPSidebar}}</p>

<p>HTTP определяет множество <strong>методов запроса</strong>, которые указывают, какое желаемое действие выполнится для данного ресурса. Несмотря на то, что их названия могут быть существительными, эти методы запроса иногда называются <em>HTTP глаголами</em>. Каждый реализует свою семантику, но каждая группа команд разделяет общие свойства: так, методы могут быть {{glossary("safe", "безопасными")}}, {{glossary("idempotent", "идемпотентными")}} или {{glossary("cacheable", "кешируемыми")}}.</p>

<dl>
 <dt><code><a href="/ru/docs/Web/HTTP/Methods/GET">GET</a></code></dt>
 <dd>Метод <code>GET</code> запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.</dd>
 <dt><code><a href="/en-US/docs/Web/HTTP/Methods/HEAD">HEAD</a></code></dt>
 <dd><code>HEAD</code> запрашивает ресурс так же, как и метод GET, но без тела ответа.</dd>
 <dt><code><a href="/ru/docs/Web/HTTP/Methods/POST">POST</a></code></dt>
 <dd><code>POST</code> используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то побочные эффекты на сервере.</dd>
 <dt><code><a href="/ru/docs/Web/HTTP/Methods/PUT">PUT</a></code></dt>
 <dd>
 <p><code>PUT</code> заменяет все текущие представления ресурса данными запроса.</p>
 </dd>
 <dt><code><a href="/en-US/docs/Web/HTTP/Methods/DELETE">DELETE</a></code></dt>
 <dd><code>DELETE</code> удаляет указанный ресурс.</dd>
 <dt><code><a href="/en-US/docs/Web/HTTP/Methods/CONNECT">CONNECT</a></code></dt>
 <dd>
 <p><code>CONNECT</code> устанавливает "туннель" к серверу, определённому по ресурсу.</p>
 </dd>
 <dt><code><a href="/ru/docs/Web/HTTP/Methods/OPTIONS">OPTIONS</a></code></dt>
 <dd><code>OPTIONS</code> используется для описания параметров соединения с ресурсом.</dd>
 <dt><code><a href="/en-US/docs/Web/HTTP/Methods/TRACE">TRACE</a></code></dt>
 <dd>
 <p><code>TRACE</code> выполняет вызов возвращаемого тестового сообщения с ресурса.</p>
 </dd>
 <dt><code><a href="/en-US/docs/Web/HTTP/Methods/PATCH">PATCH</a></code></dt>
 <dd><code>PATCH</code> используется для частичного изменения ресурса.</dd>
</dl>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Request methods", "4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
   <td>Определение GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE.</td>
  </tr>
  <tr>
   <td>{{RFC("5789", "Patch method", "2")}}</td>
   <td>PATCH метод для HTTP</td>
   <td>Определение PATCH.</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/HTTP/Заголовки">HTTP заголовки</a></li>
</ul>
