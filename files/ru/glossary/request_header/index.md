---
title: Заголовок запроса
slug: Glossary/Request_header
---

**Заголовок запроса** - {{Glossary("header", "HTTP header")}} который используется в HTTP-запросе и который не относится к содержимому сообщения. Заголовки запроса, такие как {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language", "Accept-*")}} или {{HTTPHeader("If-Modified-Since", "If-*")}} позволяют выполнять условные запросы; другие, такие как {{HTTPHeader("Cookie")}}, {{HTTPHeader("User-Agent")}} или {{HTTPHeader("Referer")}} уточняют контекст, чтобы сервер мог адаптировать ответ.

Не все заголовки, появляющиеся в запросе, являются _заголовками запроса_. Например, {{HTTPHeader("Content-Length")}}, появляющийся в запросе {{HTTPMethod("POST")}}, на самом деле является {{Glossary("entity header", "заголовки сущности")}}, ссылающимся на размер тела сообщения запроса. Однако в таком контексте эти заголовки сущности часто называют заголовками запроса.

Кроме того, [CORS](/ru/docs/Glossary/CORS) определяет подмножество заголовков запросов как {{Glossary("simple header", "простой заголовок")}}, заголовки запросов, которые всегда считаются авторизованными и не указаны явно в ответах на {{Glossary("preflight request","preflight")}} запросов.

Несколько заголовков запроса после запроса {{HTTPMethod("GET")}}:

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

Строго говоря, заголовок {{HTTPHeader("Content-Length")}} в этом примере является не заголовком запроса, как другие, а представляет {{Glossary("entity header", "заголовок сущности")}}:

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Узнать больше

### Технические знания

- [Список всех HTTP заголовков](/ru/docs/Web/HTTP/Заголовки)
