---
title: Идентификация ресурсов в Вебе
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
tags:
  - HTTP
  - URI
  - URL
  - Веб
  - Порт
  - Путь
  - Ресурсы
  - Синтаксис
  - Синтаксис URL
  - Схема
  - Фрагмент
  - домен
  - запрос
translation_of: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
original_slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web_RU
---
<div>{{HTTPSidebar}}</div>

<p class="summary">"Объект" (или "цель") HTTP-запроса называется "ресурс", чья природа может быть разной: фото, документ, или что-либо ещё. Каждый ресурс идентифицируется с помощью унифицированного идентификатора ресурса ({{Glossary("URI")}}) используемого повсюду в HTTP для идентификации ресурсов.</p>

<p>Обычно чтобы описать конкретный ресурс (его имя) и его местоположение в Вебе, используется всего один URL (Uniform Resource Locator - Унифицированный локатор ресурса, вид URI, его ещё называют <em>веб-адресом</em>). Можно добавить, что иногда с помощью специального заголовка {{HTTPHeader("Alt-Svc")}} в ответе на запрос можно попросить клиента перезапросить ресурс с другой локации.</p>

<h2 id="URLы_и_URNы">URLы и URNы</h2>

<h3 id="URL">URL</h3>

<p>Самый популярный тип URI - это Uniform Resource Locator ({{Glossary("URL")}}), который также называют <em>веб-адресом</em>.</p>

<pre>https://developer.mozilla.org
https://developer.mozilla.org/ru/docs/Learn
https://developer.mozilla.org/ru/search?q=URL</pre>

<p>Любой из этих URL-ов может быть набран в адресной строке браузера чтобы сказать ему загрузить соответствующую страницу (ресурс).</p>

<p>URL состоит из разных частей, некоторые - обязательны, а другие нет. Более сложный пример:</p>

<pre>http://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#SomewhereInTheDocument</pre>

<h3 id="URN">URN</h3>

<p>Uniform Resource Name (URN) - это URI, который идентифицирует ресурс по имени в конкретном пространстве имён.</p>

<pre>urn:isbn:9780141036144
urn:ietf:rfc:7230
</pre>

<p>Эти два URN-а соответствуют:</p>

<ul>
 <li>книга "1984" Джорджа Оруэлла,</li>
 <li>IETF спецификация 7230, Hypertext Transfer Protocol (HTTP/1.1): Синтаксис и маршрутизация сообщений.</li>
</ul>

<h2 id="Синтаксис_Унифицированных_Идентификаторов_Ресурсов_URI">Синтаксис Унифицированных Идентификаторов Ресурсов (URI)</h2>

<h3 id="Схема_или_протокол">Схема или протокол</h3>

<dl>
 <dt><img alt="Protocol" src="https://mdn.mozillademos.org/files/8013/mdn-url-protocol@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>http://</code> это пример протокола (схемы). Тут описывается какой протокол браузер должен использовать. Обычно это HTTP протокол или его безопасная версия - HTTPS. Интернет требует один из этих двух, но браузеры также знают как работать с некоторыми другими, например <code>mailto:</code> (чтобы открыть почтовый клиент) или <code>ftp:</code> для работы с передачей файлов. Популярные схемы:</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Схема</th>
   <th scope="col">Описание</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>data</td>
   <td><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">Data URIs</a> </td>
  </tr>
  <tr>
   <td>file</td>
   <td>Доступ к файлам на локальном компьютере</td>
  </tr>
  <tr>
   <td>ftp</td>
   <td><a href="/en-US/docs/Glossary/FTP">File Transfer Protocol</a> (протокол передачи файлов)</td>
  </tr>
  <tr>
   <td>http/https</td>
   <td><a href="/en-US/docs/Glossary/HTTP">Hyper text transfer protocol (Secure)</a></td>
  </tr>
  <tr>
   <td>mailto</td>
   <td>Адрес электронной почты</td>
  </tr>
  <tr>
   <td>ssh</td>
   <td>Протокол Secure shell для работы с серверами</td>
  </tr>
  <tr>
   <td>tel</td>
   <td>Телефон</td>
  </tr>
  <tr>
   <td>urn</td>
   <td>Uniform Resource Names</td>
  </tr>
  <tr>
   <td>view-source</td>
   <td>Исходный код ресурса</td>
  </tr>
  <tr>
   <td>ws/wss</td>
   <td>(Зашифрованные) соединения <a href="/en-US/docs/Web/API/WebSockets_API">WebSocket</a></td>
  </tr>
 </tbody>
</table>

<h3 id="Владелец_имя_хоста">Владелец (имя хоста)</h3>

<dl>
 <dt><img alt="Domaine Name" src="https://mdn.mozillademos.org/files/8015/mdn-url-domain@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>www.example.com</code> - это доменное имя, идентификатор ответственного за это пространство имён. Идентифицирует, какой именно Веб-сервер получает запрос. Альтернативно, можно просто использовать {{Glossary("IP address")}}, но поскольку это не так удобно, то этот способ используется не часто.</dd>
</dl>

<h3 id="Порт">Порт</h3>

<dl>
 <dt><img alt="Port" src="https://mdn.mozillademos.org/files/8017/mdn-url-port@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>:80</code> - это порт сервера. Он идентифицирует технические "ворота", которые нужны для доступа к ресурсу на сервере. Обычно порт не указывается, т.к. существуют общепринятые нормы о стандартных портах для HTTP (80 для HTTP и 443 для HTTPS). В других случаях обязательно нужно указывать.</dd>
</dl>

<h3 id="Путь">Путь</h3>

<dl>
 <dt><img alt="Path to the file" src="https://mdn.mozillademos.org/files/8019/mdn-url-path@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>/path/to/myfile.html</code> - это путь к ресурсу на Веб-сервере. Изначально путь типа этого указывал на физическое место файла на сервере, но сейчас всё чаще это псевдоним или описание некоторого абстрактного ресурса.</dd>
</dl>

<h3 id="Строка_запроса_query_string">Строка запроса (query string)</h3>

<dl>
 <dt><img alt="Parameters" src="https://mdn.mozillademos.org/files/8021/mdn-url-parameters@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>?key1=value1&amp;key2=value2</code> - это дополнительные параметры, предоставляемые Веб-серверу. Это список пар "ключ=значение", разделённых символом <code>&amp;</code> . Веб-сервер может использовать эти параметры как дополнительные инструкции, что именно сделать с ресурсом перед отправкой его пользователю. Каждый Веб-сервер имеет свои правила насчёт параметров, и единственный надёжный способ узнать как конкретный Веб-сервер обрабатывает эти параметры - это спросить того, кто контролирует Веб-сервер.</dd>
</dl>

<h3 id="Фрагмент">Фрагмент</h3>

<dl>
 <dt><img alt="Anchor" src="https://mdn.mozillademos.org/files/8023/mdn-url-anchor@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>#SomewhereInTheDocument</code> - это "якорь" на другую часть ресурса. Якорь представляет собой что-то вроде "закладки" внутри ресурса, давая браузеру  указание показать содержимое с определённого места. В HTML-документе, к примеру, браузер будет скроллить к точке где якорь определён, а на аудио/видео-документе браузер попытается перейти на время, указанное в якоре. Важно что часть, начинающаяся с # - никогда не пересылается серверу в запросе.</dd>
</dl>

<h2 id="Примечания_по_использованию">Примечания по использованию</h2>

<p>Когда используются URLы в {{Glossary("HTML")}} содержимом, вам стоит использовать только несколько из этих схем. Когда идёт обращение к субресурсам (файлам, которые являются частью большого документа) — вам стоит использовать лишь HTTP и HTTPS. Браузеры сейчас перестают использовать FTP для загрузки ресурсов, из соображений безопасности.</p>

<p>FTP до сих пор доступен на верхнем уровне (т.е. когда ссылка указывается в адресной строке или в ссылке), но некоторые браузеры могут делегировать загрузку FTP ресурсов другим приложениям.</p>

<h2 id="Примеры">Примеры</h2>

<pre>https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Название</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "Uniform Resource Identifiers", "2.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Синтаксис и маршрутизация сообщений</td>
  </tr>
 </tbody>
</table>

<h2 id="Читайте_также">Читайте также</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Common_questions/What_is_a_URL">Что такое URL?</a></li>
 <li><a href="http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml">Список URI-схем IANA</a></li>
</ul>
