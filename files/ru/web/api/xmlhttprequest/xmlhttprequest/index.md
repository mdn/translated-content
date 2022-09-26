---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
tags:
  - API
  - Reference
  - XHR
  - XMLHttpRequest
  - Конструктор
  - Получение данных
  - Чтение данных
translation_of: Web/API/XMLHttpRequest/XMLHttpRequest
---
<h4 id="XMLHttpRequest"><strong>XMLHttpRequest</strong></h4>

<p>Конструктор <code><strong>XMLHttpRequest()</strong></code> создаёт новый объект {{domxref("XMLHttpRequest")}}.</p>

<p>Для получения подробной информации о том, как использовать <code>XMLHttpRequest</code>, см. <a class="internal" href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Использование XMLHttpRequest</a>.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">const <var>request</var> = new XMLHttpRequest();
</pre>

<h3 id="Параметры">Параметры</h3>

<p>Нет.</p>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Новый объект {{domxref("XMLHttpRequest")}}. Этот объект должен быть подготовлен вызовом функции {{domxref("XMLHttpRequest.open", "open()")}} перед вызовом {{domxref("XMLHttpRequest.send", "send()")}} для отправки запроса на сервер.</p>

<h2 id="Нестандартный_синтаксис_Firefox">Нестандартный синтаксис Firefox </h2>

<p>В Firefox 16 в конструктор добавлен нестандартный параметр, который позволяет включать анонимный режим (см. {{Bug("692677")}}). Установка флага <code>mozAnon</code> в значение <code>true</code> по сути напоминает конструктор <a href="http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest" title="see AnonXMLHttpRequest in the XMLHttpRequest specification"><code>AnonXMLHttpRequest()</code></a>, описанный в более старых версиях спецификации XMLHttpRequest.</p>

<pre class="syntaxbox">const <var>request</var> = new XMLHttpRequest(<var>paramsDictionary</var>);</pre>

<h3 id="Параметры_нестандартные">Параметры (нестандартные)</h3>

<dl>
 <dt><code>objParameters</code> </dt>
 <dd>Существует два флага, которые можно установить:
 <dl>
  <dt><code>mozAnon</code></dt>
  <dd>Boolean: Установка этого флага в значение <code>true</code> приведёт к тому, что браузер не будет раскрывать {{Glossary("origin")}} и <a href="http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials" title="Defintion of “User credentials” in the XMLHttpRequest specification.">учётные данные пользователя</a> при получении ресурсов. Главным образом это означает, что файлы {{Glossary("Cookie", "cookies")}} не будут отправлены, если они не добавлены явно с использованием setRequestHeader.</dd>
  <dt><code>mozSystem</code></dt>
  <dd>Boolean: Установка этого флага в значение <code>true</code> позволяет устанавливать межсайтовые соединения не требуя подключения сервера с помощью {{Glossary("CORS")}}. <em>Требует установки флага <code>mozAnon: true</code>, т.к. это нельзя сочетать с отправкой файлов cookie или других учётных данных пользователя. Это работает только в привилегированных (проверенных) приложениях ({{Bug ("692677")}}));  не работает на произвольных веб-страницах, загруженных в Firefox.</em></dd>
 </dl>
 </dd>
</dl>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Использование XMLHttpRequest</a></li>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">HTML в XMLHttpRequest</a></li>
</ul>
