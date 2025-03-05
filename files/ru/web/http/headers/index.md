---
title: Заголовки HTTP
slug: Web/HTTP/Headers
---

{{ HTTPSidebar }}

**Заголовки HTTP** позволяют клиенту и серверу отправлять дополнительную информацию с HTTP запросом или ответом. В HTTP-заголовке содержится не чувствительное к регистру название, а затем после (`:`) непосредственно значение. [Пробелы](/ru/docs/Glossary/Whitespace) перед значением игнорируются.

Пользовательские собственные заголовки исторически использовались с префиксом X, но это соглашение было объявлено устаревшим в июне 2012 года из-за неудобств, вызванных тем, что нестандартные поля стали стандартом в [RFC 6648](https://tools.ietf.org/html/rfc6648); другие перечислены в реестре [IANA](https://www.iana.org/assignments/message-headers/perm-headers.html), исходное содержимое которого было определено в [RFC 4229](https://tools.ietf.org/html/rfc4229). IANA также поддерживает [реестр предлагаемых новых заголовков HTTP](https://www.iana.org/assignments/message-headers/message-headers.xhtml).

HTTP-заголовки сопровождают обмен данными по протоколу HTTP. Они могут содержать описание данных и информацию, необходимую для взаимодействия между клиентом и сервером. Заголовки и их статусы перечислены в [реестре IANA](https://www.iana.org/assignments/message-headers/perm-headers.html), который постоянно обновляется.

Заголовки могут быть сгруппированы по следующим контекстам:

- {{Glossary("General header", "Основные заголовки")}} применяется как к запросам, так и к ответам, но не имеет отношения к данным, передаваемым в теле.
- {{Glossary("Заголовок запроса", "Заголовки запроса")}} содержит больше информации о ресурсе, который нужно получить, или о клиенте, запрашивающем ресурс.
- {{Glossary("Response header", "Заголовки ответа")}} содержат дополнительную информацию об ответе, например его местонахождение, или о сервере, предоставившем его.
- {{Glossary("Entity header", "Заголовки сущности")}} содержат информацию о теле ресурса, например его [длину содержимого](/ru/docs/Web/HTTP/Headers/Content-Length) или тип [MIME](/ru/docs/Web/SVG/Content_type).

Заголовки также могут быть сгруппированы согласно тому, как [прокси (proxies)](/ru/docs/Glossary/Proxy_server) обрабатывают их:

- {{ httpheader("Connection") }}
- {{ httpheader("Keep-Alive") }}
- {{ httpheader("Proxy-Authenticate") }}
- {{ httpheader("Proxy-Authorization") }}
- {{ httpheader("TE") }}
- {{ httpheader("Trailer") }}
- {{ httpheader("Transfer-Encoding") }}
- {{ httpheader("Upgrade") }}.

**Сквозные заголовки**
Эти заголовки должны быть переданы конечному получателю сообщения: серверу для запроса или клиенту для ответа. Промежуточные прокси-серверы должны повторно передавать эти заголовки без изменений, а кеши должны их хранить.

**Хоп-хоп заголовки (Хоп-хоп заголовки)**
Эти заголовки имеют смысл только для одного соединения транспортного уровня и не должны повторно передаваться прокси или кешироваться. Обратите внимание, что с помощью общего заголовка {{httpheader ("Connection")}} могут быть установлены только заголовки переходов.

## Аутентификация

**{{HTTPHeader("WWW-Authenticate")}}**
Определяет метод аутентификации, который должен использоваться для доступа к ресурсу.
**{{HTTPHeader ( "Authorization")}}**
Содержит учётные данные для аутентификации агента пользователя на сервере.
**{{HTTPHeader ( "Proxy-Authenticate")}}**
Определяет метод аутентификации, который должен использоваться для доступа к ресурсам на прокси-сервере.
**{{HTTPHeader ( "Proxy-Authorization")}}**
Содержит учётные данные для аутентификации агента пользователя с прокси-сервером.

Ниже перечислены основные HTTP заголовки с кратким описанием:

<table class="standard-table" style="width: 100%">
  <tbody>
    <tr>
      <th>Заголовок</th>
      <th>Описание</th>
      <th>Подробнее</th>
      <th>Стандарт</th>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Content_negotiation#The_Accept.3a_header"
            title="https://developer.mozilla.org/en/HTTP/Content_negotiation#The_Accept.3a_header"
            >Accept</a
          ></code
        >
      </td>
      <td>Список MIME типов, которые ожидает клиент.</td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>HTTP/1.1</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Content_negotiation#The_Accept-CH_header"
            >Accept-CH</a
          ></code
        >
        <p>{{non-standard_inline}}</p>
      </td>
      <td>
        Список конфигурационных данных, которые могут быть учтены сервером при
        выборе соответствующего ответа клиенту.
      </td>
      <td>
        <a href="http://igrigorik.github.io/http-client-hints"
          >HTTP Client Hints</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>Accept-Features</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>RFC 2295, §8.2</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Content_negotiation#The_Accept-Encoding.3a_header"
            title="https://developer.mozilla.org/en/HTTP/Content_negotiation#The_Accept-Encoding.3a_header"
            >Accept-Encoding</a
          ></code
        >
      </td>
      <td>Список форматов сжатия данных, которые поддерживает клиент.</td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>HTTP/1.1</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Content_negotiation#The_Accept-Language.3a_header"
            title="https://developer.mozilla.org/en/HTTP/Content_negotiation#The_Accept-Language.3a_header"
            >Accept-Language</a
          ></code
        >
      </td>
      <td>Определяет языковые предпочтения клиента.</td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>HTTP/1.1</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Заголовки/Accept-Ranges"
            title="ru/Accept-Ranges"
            >Accept-Ranges</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Allow-Credentials"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Allow-Credentials"
            >Access-Control-Allow-Credentials</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Allow-Origin"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Allow-Origin"
            >Access-Control-Allow-Origin</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Allow-Methods"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Allow-Methods"
            >Access-Control-Allow-Methods</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Allow-Headers"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Allow-Headers"
            >Access-Control-Allow-Headers</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Max-Age"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Max-Age"
            >Access-Control-Max-Age</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Expose-Header"
            title="en/HTTP access control#Access-Control-Expose-Header"
            >Access-Control-Expose-Headers</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Request-Method"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Request-Method"
            >Access-Control-Request-Method</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Access-Control-Request-Headers"
            title="https://developer.mozilla.org/En/HTTP_access_control#Access-Control-Request-Headers"
            >Access-Control-Request-Headers</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Age" title="en/Age"
            >Age</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Allow" title="en/Allow"
            >Allow</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>Alternates</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>RFC 2295, §8.3</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Authorization"
            title="en/Authorization"
            >Authorization</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Cache-Control"
            title="en/Cache-Control"
            >Cache-Control</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Заголовки/Connection"
            title="ru/Connection"
            >Connection</a
          ></code
        >
      </td>
      <td>
        Определяет, остаётся ли сетевое соединение открытым после завершения
        текущей транзакции (запроса).
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Encoding"
            title="en/Content-Encoding"
            >Content-Encoding</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Language"
            title="en/Content-Language"
            >Content-Language</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Length"
            title="en/Content-Length"
            >Content-Length</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Location"
            title="en/Content-Location"
            >Content-Location</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Range"
            title="en/Content-Range"
            >Content-Range</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Security-Policy"
            title="en/Content-Security-Policy"
            >Content-Security-Policy</a
          ></code
        >
      </td>
      <td>
        Реализует механизм защиты от угроз межсайтового выполнения скриптов.
      </td>
      <td><a href="/en/Security/CSP">CSP (Content Security Policy)</a></td>
      <td>
        <a href="http://www.w3.org/TR/CSP2/">W3C Content Security Policy</a>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Content-Type"
            title="en/Content-Type"
            >Content-Type</a
          ></code
        >
      </td>
      <td>Позволяет клиенту определить MIME тип документа.</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Cookie" title="en/Cookie"
            >Cookie</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td>
        <a class="external" href="http://www.ietf.org/rfc/rfc2109.txt"
          >RFC 2109</a
        >
      </td>
    </tr>
    <tr>
      <td><code>DNT</code></td>
      <td>
        With a value of 1, indicates that the user explicitly opts out of any
        form of online tracking.
      </td>
      <td>
        Supported by Firefox 4, Firefox 5 for mobile, IE9, and a few major
        companies.
      </td>
      <td><a href="https://www.w3.org/TR/tracking-dnt/">Tracking Preference Expression (DNT)</a></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Date" title="en/Date"
            >Date</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/ETag" title="en/ETag"
            >ETag</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Expect" title="en/Expect"
            >Expect</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Expires" title="en/Expires"
            >Expires</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/From" title="en/From"
            >From</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Host" title="en/Host"
            >Host</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/If-Match" title="en/If-Match"
            >If-Match</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/If-Modified-Since"
            title="en/If-Modified-Since"
            >If-Modified-Since</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/If-None-Match"
            title="en/If-None-Match"
            >If-None-Match</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/If-Range" title="en/If-Range"
            >If-Range</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/If-Unmodified-Since"
            title="en/If-Unmodified-Since"
            >If-Unmodified-Since</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Last-Modified"
            title="en/Last-Modified"
            >Last-Modified</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Link"
            title="en/HTTP/Headers/Link"
            >Link</a
          ></code
        >
      </td>
      <td>
        Содержит ссылки на связанные ресурсы и определяет их отношение к
        отправленному документу.
      </td>
      <td>
        <p>
          For the <code>rel=prefetch</code> case, see
          <a
            href="/ru/docs/Link_prefetching_FAQ"
            title="en/Link prefetching FAQ"
            >Link Prefetching FAQ</a
          >
        </p>
      </td>
      <td>
        <p>
          Introduced in
          <a
            class="external"
            href="http://tools.ietf.org/html/rfc2068#section-19.6.2.4"
            >HTTP 1.1's RFC 2068, section 19.6.2.4</a
          >, it was removed in the final
          <a
            class="external"
            href="http://www.w3.org/Protocols/rfc2616/rfc2616.html"
            >HTTP 1.1 spec</a
          >, then reintroduced, with some extensions, in
          <a
            class="external"
            href="http://greenbytes.de/tech/webdav/rfc5988.html"
            >RFC 5988</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Location" title="en/Location"
            >Location</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Max-Forwards"
            title="en/Max-Forwards"
            >Max-Forwards</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>Negotiate</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>RFC 2295, §8.4</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/HTTP_access_control#Origin"
            title="https://developer.mozilla.org/En/HTTP_access_control#Origin"
            >Origin</a
          ></code
        >
      </td>
      <td></td>
      <td>
        <a href="/ru/docs/HTTP_access_control" title="En/HTTP access control"
          >HTTP Access Control</a
        >
        and
        <a
          href="/ru/docs/Server-Side_Access_Control"
          title="En/Server-Side Access Control"
          >Server Side Access Control</a
        >
      </td>
      <td>
        More recently defined in the
        <a href="https://fetch.spec.whatwg.org/#http-extensions">Fetch spec</a>
        (see <a href="/ru/docs/Web/API/Fetch_API">Fetch API</a>.) Originally
        defined in
        <a class="external" href="http://www.w3.org/TR/cors/"
          >W3C Cross-Origin Resource Sharing</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Pragma" title="en/Pragma"
            >Pragma</a
          ></code
        >
      </td>
      <td></td>
      <td>
        for the pragma: nocache value see
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Proxy-Authenticate"
            title="en/Proxy-Authenticate"
            >Proxy-Authenticate</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Proxy-Authorization"
            title="en/Proxy-Authorization"
            >Proxy-Authorization</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Range" title="en/Range"
            >Range</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Заголовки/Referer" title="ru/Referer"
            >Referer</a
          ></code
        >
      </td>
      <td>
        <p>
          Содержит URL-адрес ресурса, из которого был запрошен обрабатываемый
          запрос. Если запрос поступил из закладки, прямого ввода адреса
          пользователем или с помощью других методов, при которых исходного
          ресурса нет, то этот заголовок отсутствует или имеет значение
          "about:blank".
        </p>
        <div class="note">
          <p>
            Это ошибочное имя заголовка (referer, вместо referrer) было введено
            в спецификацию HTTP/0.9, и ошибка должна была быть сохранена в более
            поздних версиях протокола для совместимости.
          </p>
        </div>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Retry-After"
            title="en/Retry-After"
            >Retry-After</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>Sec-Websocket-Extensions</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07"
          >Websockets</a
        >
      </td>
    </tr>
    <tr>
      <td><code>Sec-Websocket-Key</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07"
          >Websockets</a
        >
      </td>
    </tr>
    <tr>
      <td><code>Sec-Websocket-Origin</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07"
          >Websockets</a
        >
      </td>
    </tr>
    <tr>
      <td><code>Sec-Websocket-Protocol</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07"
          >Websockets</a
        >
      </td>
    </tr>
    <tr>
      <td><code>Sec-Websocket-Version</code></td>
      <td></td>
      <td></td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-07"
          >Websockets</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Server" title="en/Server"
            >Server</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Set-Cookie"
            title="en/Set-Cookie"
            >Set-Cookie</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td>
        <a class="external" href="http://www.ietf.org/rfc/rfc2109.txt"
          >RFC 2109</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Set-Cookie2"
            title="en/Set-Cookie2"
            >Set-Cookie2</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td>
        <a class="external" href="http://www.ietf.org/rfc/rfc2965.txt"
          >RFC 2965</a
        >
      </td>
    </tr>
    <tr>
      <td><code>Strict-Transport-Security</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Security/HTTP_Strict_Transport_Security"
          title="en/Security/HTTP Strict Transport Security"
          >HTTP Strict Transport Security</a
        >
      </td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/draft-hodges-strict-transport-sec-02"
          >IETF reference</a
        >
      </td>
    </tr>
    <tr>
      <td><code>TCN</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>RFC 2295, §8.5</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/TE" title="en/TE">TE</a></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Trailer" title="en/Trailer"
            >Trailer</a
          ></code
        >
      </td>
      <td>
        lists the headers that will be transmitted after the message body, in a
        trailer block. This allows servers to compute some values, like
        <code>Content-MD5:</code> while transmitting the data. Note that the
        <code>Trailer:</code> header must not list the
        <code>Content-Length:,</code> <code>Trailer:</code> or
        <code>Transfer-Encoding:</code> headers.
      </td>
      <td></td>
      <td>
        <a
          class="external"
          href="http://tools.ietf.org/html/rfc2616#section-14.40"
          >RFC 2616, §14.40</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/Transfer-Encoding"
            title="en/Transfer-Encoding"
            >Transfer-Encoding</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Upgrade" title="en/Upgrade"
            >Upgrade</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Content_negotiation#The_User-Agent.3a_header"
            title="https://developer.mozilla.org/en/HTTP/Content_negotiation#The_User-Agent.3a_header"
            >User-Agent</a
          ></code
        >
      </td>
      <td></td>
      <td>
        for Gecko's user agents see the
        <a
          href="/ru/docs/User_Agent_Strings_Reference"
          title="En/User Agent Strings Reference"
          >User Agents Reference</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>Variant-Vary</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content negotiation"
          >HTTP Content Negotiation</a
        >
      </td>
      <td>RFC 2295, §8.6</td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Content_negotiation#The_Vary.3a_response_header"
            title="https://developer.mozilla.org/en/HTTP/Content_negotiation#The_Vary.3a_response_header"
            >Vary</a
          ></code
        >
      </td>
      <td>
        lists the headers used as criteria for choosing a specific content by
        the web server. This server is important for efficient and correct
        caching of the resource sent.
      </td>
      <td>
        <a
          href="/ru/docs/Web/HTTP/Content_negotiation"
          title="ru/HTTP/Content_negotiation"
          >HTTP Content Negotiation</a
        >
        &#x26;
        <a href="/ru/docs/HTTP_Caching_FAQ" title="en/HTTP Caching FAQ"
          >HTTP Caching FAQ</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Via" title="en/Via"
            >Via</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ru/docs/Web/HTTP/Headers/Warning" title="en/Warning"
            >Warning</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="/ru/docs/Web/HTTP/Headers/WWW-Authenticate"
            title="en/WWW-Authenticate"
            >WWW-Authenticate</a
          ></code
        >
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>X-Content-Duration</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Configuring_servers_for_Ogg_media"
          title="https://developer.mozilla.org/en/Configuring_servers_for_Ogg_media"
          >Configuring servers for Ogg media</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>X-Content-Security-Policy</code></td>
      <td></td>
      <td>
        Using
        <a
          href="/ru/docs/Security/CSP/Using_Content_Security_Policy"
          title="en/Security/CSP/Using Content Security Policy"
          >Content Security Policy</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>X-DNSPrefetch-Control</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/Controlling_DNS_prefetching"
          title="En/Controlling DNS prefetching"
          >Controlling DNS prefetching</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>X-Frame-Options</code></td>
      <td></td>
      <td>
        <a
          href="/ru/docs/The_X-FRAME-OPTIONS_response_header"
          title="en/The X-FRAME-OPTIONS response header"
          >The XFrame-Option Response Header</a
        >
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>X-Requested-With</code></td>
      <td>Often used with the value "XMLHttpRequest" when it is the case</td>
      <td></td>
      <td>Not standard</td>
    </tr>
  </tbody>
</table>

## Примечание

> [!NOTE]
> The Keep-Alive request header is not sent by Gecko 5.0; previous versions did send it but it was not formatted correctly, so the decision was made to remove it for the time being. The {{ httpheader("Connection") }} or {{ httpheader("Proxy-Connection") }} header is still sent, however, with the value "keep-alive".

## Смотрите также

[Wikipedia page on List of HTTP headers](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
