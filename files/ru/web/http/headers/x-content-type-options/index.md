---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
tags:
  - HTTP
  - HTTP заголовки
  - Ответы заголовка
  - Справка
translation_of: Web/HTTP/Headers/X-Content-Type-Options
original_slug: Web/HTTP/Заголовки/X-Content-Type-Options
---
<div>{{HTTPSidebar}}</div>

<p>HTTP-заголовок ответа <code><strong>X-Content-Type-Options</strong></code> является маркером, используемым сервером для указания того, что типы MIME, объявленные в заголовках {{HTTPHeader ("Content-Type")}}, должны соблюдаться и не изменяться. Это позволяет отказаться от <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing">перехвата MIME</a>, или, другими словами, это способ сказать, что веб-мастера знали, что они делают.</p>

<p>Этот HTTP-заголовок был введён Microsoft в IE 8 как способ для веб-мастеров блокировать происходящий перехват содержимого и может преобразовывать неисполняемые типы MIME в исполняемые типы MIME. С тех пор другие браузеры внедрили его, даже если их алгоритмы обработки MIME были менее агрессивными.</p>

<p>Тестеры безопасности сайта обычно ожидают, что этот заголовок будет установлен.</p>

<p class="blockIndicator note">Примечание: <code>nosniff</code> применяется только к типам "<code>script</code>" и "<code>style</code>". Также применение <code>nosniff</code> к изображениям оказалось <a href="https://github.com/whatwg/fetch/issues/395">несовместимым с существующими веб-сайтами</a>.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">X-Content-Type-Options: nosniff
</pre>

<h2 id="Директивы">Директивы</h2>

<dl>
 <dt><code>nosniff</code></dt>
 <dd>Блокирует запрос, если запрошенный тип:
 <ul>
  <li>"<code>style</code>" и его MIME не "<code>text/css</code>", или</li>
  <li>"<code>script</code>" и его MIME не <a href="https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type">JavaScript MIME-тип</a>.</li>
 </ul>
 </dd>
</dl>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table" style="height: 126px; width: 628px;">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName("Fetch", "#x-content-type-options-header", "X-Content-Type-Options definition")}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>



<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li><a href="https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/">Первоначальное определение</a> X-Content-Type-Options от Microsoft®.</li>
 <li> Инструмент <a href="https://observatory.mozilla.org/">Обсерватория Mozilla</a> проверяющий конфигурацию (включая этот заголовок) веб-сайтов на безопасность.</li>
 <li><a href="https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/">Смягчение MIME путаницы в Firefox</a></li>
 <li><a href="https://fetch.spec.whatwg.org/#corb">Блокировка чтения из разных источников (Cross-Origin Read Blocking)</a></li>
 <li><a href="https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md">Google Docs CORB explainer</a></li>
</ul>
