---
title: Агент пользователя
slug: Glossary/User_agent
translation_of: Glossary/User_agent
original_slug: Глоссарий/User_agent
---
<p><span class="seoSummary"><strong>Пользовательский агент</strong> (<em>user agent</em>, UA), или <strong>агент пользователя</strong>, это компьютерная программа, представляющая пользователя и выполняющая действия от его лица, например, {{Glossary("Browser","браузер")}} в контексте {{Glossary("World Wide Web", "Всемирной паутины")}}.</span></p>

<p>Агентом пользователя может быть не только браузер, но и бот, удаляющий веб-страницы, менеджер закачек или другое приложение, использующее Веб. Выполняя запросы к серверу, браузеры, чтобы была возможность их идентифицировать, снабжают каждый запрос так называемой строкой пользовательского агента (UA-строкой), завёрнутой в {{Glossary("HTTP")}}-заголовок <code>User-Agent</code>. Это строка идентифицирует браузер, сообщает номер его версии и информацию об операционной системе.</p>

<p>Спам-боты, менеджеры закачек и некоторые браузеры нередко шлют подложные UA-строки, чтобы выдать себя за другие клиенты. Эта ситуация известна под названием <em>подмена или подделка пользовательского агента</em> (<em>user agent spoofing</em>).</p>

<p>Строчку пользовательского агента можно прочитать<span class="objectBox objectBox-string"> на стороне клиента</span> с помощью<span class="objectBox objectBox-string"> </span>{{Glossary("JavaScript")}}, обратившись к свойству<span class="objectBox objectBox-string"> </span><code>navigator.userAgent.</code></p>

<p>Типичная UA-строка выглядит так: <span class="objectBox objectBox-string"><code>"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"</code>. </span></p>

<h2 id="Смотрите_также">Смотрите также</h2>

<h3 id="Общие_сведения">Общие сведения</h3>

<ul>
 <li><a href="https://ru.wikipedia.org/wiki/User_agent">User agent</a> на Википедии</li>
</ul>

<h3 id="Техническая_справка">Техническая справка</h3>

<ul>
 <li><a href="http://tools.ietf.org/html/rfc2616#section-14.43">User agent</a> заголовок запроса в спецификации RFC 2616</li>
</ul>
