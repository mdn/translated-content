---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
---

{{HTTPSidebar}}

**HTTP-метод** `OPTIONS` используется для описания параметров соединения с целевым ресурсом. Клиент может указать особый URL для обработки метода OPTIONS, или \* (звёздочку) чтобы указать весь сервер целиком.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Safe", "Безопасный")}}
      </th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Idempotent", "Идемпотентный")}}
      </th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "Кешируемый")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        Допускается в <a href="/ru/docs/Learn/HTML/Forms">HTML-формах</a>
      </th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## Примеры

### Определение разрешённых сервером методов запроса

Для того, чтобы узнать какие методы запросов поддерживаются сервером, можно воспользоваться curl направить OPTIONS запрос:

```
curl -X OPTIONS http://example.org -i
```

Ответ на запрос содержит {{HTTPHeader("Allow")}} заголовок с поддерживаемыми методами:

```
HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
Content-Length: 0
```

### Предзапросы по технологии CORS

По технологии [CORS](/ru/docs/Web/HTTP/Access_control_CORS), с помощью метода `OPTIONS` направляется предварительный запрос, поэтому сервер может ответить приемлемо ли отправлять запросы этим методом. {{HTTPHeader("Access-Control-Request-Method")}} заголовок уведомляет сервер в составе предварительного запроса о том что, запрос `OPTIONS` будет отправляться на сервер вместе с `POST` запросом. {{HTTPHeader("Access-Control-Request-Headers")}} заголовок уведомляет сервер о том, что при отправке фактического запроса, он будет отправлен с помощью пользовательских заголовков `X-PINGOTHER` и `Content-Type`. В этом случае сервер имеет возможность определять возможно ли принять запрос с такими параметрами.

```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

Ответ сервера содержит параметр {{HTTPHeader("Access-Control-Allow-Methods")}} и сообщает, что `POST`, `GET`, и `OPTIONS` методы являются приемлемыми для данного ресурса. Этот заголовок похож на заголовок {{HTTPHeader("Allow")}} , но используется строго в контексте CORS.

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

## Спецификации

| Спецификация                        | Заголовок                                                     |
| ----------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "OPTIONS", "4.3.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Allow")}} заголовок
- [CORS](/ru/docs/Web/HTTP/Access_control_CORS)
