---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
tags:
  - Заголовок
  - заголовок запроса
  - оригинальный адрес
translation_of: Web/HTTP/Headers/X-Forwarded-For
original_slug: Web/HTTP/Заголовки/X-Forwarded-For
---
<div>{{HTTPSidebar}}</div>

<p>Заголовок <code>X-Forwarded-For</code> (XFF) является <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82_%D0%B4%D0%B5-%D1%84%D0%B0%D0%BA%D1%82%D0%BE">де-факто стандартным</a> заголовком для идентификации происхождения IP-адреса клиента, подключающегося к веб-серверу через HTTP-прокси или балансировщик нагрузки. Когда трафик перехватывается между клиентами и серверами, журналы доступа к серверу содержат только IP-адрес прокси-сервера или балансировки нагрузки. Чтобы увидеть origin IP-адрес клиента, используется заголовок запроса <code>X-Forwarded-For</code>.</p>

<p>Этот заголовок используется для отладки, статистики и создания зависимого от местоположения контента, и архитектурно он предоставляет секретную информацию, такую как IP-адрес клиента. Поэтому при использовании этого заголовка необходимо учитывать конфиденциальность пользователя.</p>

<p>Стандартизованной версией этого заголовка является HTTP {{HTTPHeader("Forwarded")}} заголовок.</p>

<p><code>X-Forwarded-For</code>  также является заголовком электронной почты, указывающим, что сообщение электронной почты было отправлено из другой учётной записи.</p>

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

<pre class="syntaxbox">X-Forwarded-For: &lt;client&gt;, &lt;proxy1&gt;, &lt;proxy2&gt;
</pre>

<h2 id="Директивы">Директивы</h2>

<dl>
 <dt>&lt;client&gt;</dt>
 <dd>IP адрес клиента</dd>
 <dt>&lt;proxy1&gt;, &lt;proxy2&gt;</dt>
 <dd>Если запрос проходит через несколько прокси-серверов, перечислены IP-адреса каждого последующего прокси-сервера. Это означает, что самый правый IP-адрес - это IP-адрес самого последнего прокси-сервера, а самый левый IP-адрес - это IP-адрес отправляющего клиента.</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<pre>X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
</pre>

<p>Other non-standard forms:</p>

<pre># Used for some Google services
X-ProxyUser-Ip: 203.0.113.19</pre>

<h2 id="Спецификации">Спецификации</h2>

<p>Не является частью любой текущей спецификации. Стандартизованная версия этого заголовка {{HTTPHeader("Forwarded")}}.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Forwarded")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
 <li>{{HTTPHeader("Via")}}</li>
</ul>
