---
title: CORS
slug: Glossary/CORS
translation_of: Glossary/CORS
original_slug: Глоссарий/CORS
---
<p><strong>CORS </strong>(Cross-Origin Resource Sharing, рус. "Совместное использование ресурсов между разными источниками") - это система, состоящая из отправки <a href="/en-US/docs/Web/HTTP/Headers">HTTP заголовков</a>, которые определяют: заблокировать или выполнить запрос к ограниченному ресурсу на веб-странице из другого домена, отличного от домена происхождения запрашиваемого ресурса.</p>

<p>The <a href="/en-US/docs/Web/Security/Same-origin_policy">same-origin security policy (рус. "правило ограничения домена")</a> по умолчанию запрещает междоменные запросы. CORS предоставляет веб-серверам возможность контролировать междоменные запросы и позволяет производить безопасный обмен данными между разными доменами.</p>

<h2 id="Узнать_больше">Узнать больше</h2>

<h3 id="Основная_база_знаний">Основная база знаний</h3>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a> на MDN</li>
 <li>{{Interwiki("wikipedia", "Cross-origin resource sharing")}} на Wikipedia</li>
</ul>

<h3 id="CORS_заголовки">CORS заголовки</h3>

<dl>
 <dt>{{HTTPHeader("Access-Control-Allow-Origin")}}</dt>
 <dd>Указывает, разрешён ли такой запрос для ресурсов из данного источника.</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Credentials")}}</dt>
 <dd>Указывает, разрешён ли ответ на запрос в случае, если credentials flag выставлен в <code>true</code>.</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Headers")}}</dt>
 <dd>Используется в ответе на запрос в случае "предполётной проверки"({{glossary("preflight request")}}) - проверки, какие из HTTP заголовков могут быть использованы для запроса.</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Methods")}}</dt>
 <dd>Указывает метод или методы, которые разрешены для доступа к ресурсу в ответ на "предполётный запрос"({{glossary("preflight request")}}).</dd>
 <dt>{{HTTPHeader("Access-Control-Expose-Headers")}}</dt>
 <dd>Указывает, какие заголовки могут быть предоставлены как часть ответа, перечисляя их имена.</dd>
 <dt>{{HTTPHeader("Access-Control-Max-Age")}}</dt>
 <dd>Указывает, как долго могут быть закешированы результаты "предполётного запроса"({{glossary("preflight request")}}).</dd>
 <dt>{{HTTPHeader("Access-Control-Request-Headers")}}</dt>
 <dd>Используется для исполнения "предполётного запроса"({{glossary("preflight request")}}), чтобы указать серверу, какие из HTTP заголовков будут использоваться во время реального запроса.</dd>
 <dt>{{HTTPHeader("Access-Control-Request-Method")}}</dt>
 <dd>Используется для исполнения "предполётного запроса"({{glossary("preflight request")}}), чтобы указать серверу, какие <a href="/en-US/docs/Web/HTTP/Methods">HTTP методы</a> будут использоваться во время реального запроса.</dd>
 <dt>{{HTTPHeader("Origin")}}</dt>
 <dd>Указывает, откуда производится запрос.</dd>
</dl>

<h3 id="Техническая_документация">Техническая документация</h3>

<ul>
 <li><a href="https://fetch.spec.whatwg.org">Fetch specification</a></li>
</ul>
