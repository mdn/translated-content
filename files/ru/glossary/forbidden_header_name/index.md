---
title: Запрещённое имя заголовка
slug: Glossary/Forbidden_header_name
tags:
  - HTTP
  - Заголовки
  - Глоссарий
  - запрещённый
translation_of: Glossary/Forbidden_header_name
original_slug: Глоссарий/Forbidden_header_name
---
Запрещённое имя заголовка (Forbidden header name) это имя какого-либо [HTTP заголовка](/en-US/docs/Web/HTTP/Headers), который нельзя изменить программно.

Изменение этих заголовков запрещено, потому что пользовательский агент (браузер) удерживает полный контроль над ними. Заголовки, чьи имена начинаются с \`<code title="">Sec-</code>\`, зарезервированы для создания новых заголовков, безопасных (отделённых) от {{glossary("API","APIs")}}, используемого [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), которое даёт разработчику контроль над заголовками. Утверждение также верно и для {{domxref("XMLHttpRequest")}}.

Запрещённые имена заголовков начинаются с `Proxy-` или `Sec-`, или содержат следующие имена:

<ul class="brief"><li><code title="">Accept-Charset</code></li><li><code title="">Accept-Encoding</code></li><li><code title="">Access-Control-Request-Headers</code></li><li><code title="">Access-Control-Request-Method</code></li><li><code title="">Connection</code></li><li><code title="">Content-Length</code></li><li><code title="">Cookie</code></li><li><code title="">Cookie2</code></li><li><code title="">Date</code></li><li><code title="">DNT</code></li><li><code title="">Expect</code></li><li><code title="">Host</code></li><li><code title="">Keep-Alive</code></li><li><code title="http-origin">Origin</code></li><li><code title="http-origin">Proxy-</code></li><li><code title="http-origin">Sec-</code></li><li><code title="">Referer</code></li><li><code title="">TE</code></li><li><code title="">Trailer</code></li><li><code title="">Transfer-Encoding</code></li><li><code title="">Upgrade</code></li><li><code title="">Via</code></li></ul>

<div class="note"><p><strong>Примечание</strong>: Заголовок <code>User-Agent</code> более не запрещён, <a href="https://fetch.spec.whatwg.org/#terminology-headers">как указано в спецификации</a> — посмотрите список запрещённых заголовков (он был реализован в Firefox 43,) так что <code>User-Agent</code> может быть установлен через в объект <a href="/en-US/docs/Web/API/Headers">Headers</a> под Fetch через вызов метода <a href="/en-US/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29">setRequestHeader()</a>.</p></div>
