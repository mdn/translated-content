---
title: 304 Not Modified
slug: Web/HTTP/Status/304
---

{{HTTPSidebar}}

Код "HTTP **304 Not Modified**" клиента указывает, что нет необходимости повторно передавать запрошенные ресурсы. Это неявное перенаправление на кешированный ресурс. Это происходит, когда метод {{glossary("safe")}}, например {{HTTPMethod("GET")}} или {{HTTPMethod("HEAD")}} запрос или когда запрос является условным и использует {{HTTPHeader("If-None-Match")}} или {{HTTPHeader("If-Modified-Since")}}.

Если эквивалентный ответ {{HTTPStatus("200")}} `OK` включал {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}} и {{HTTPHeader("Vary")}}.

> **Примечание:** Многие [developer tools' network panels](/ru/docs/Tools/Network_Monitor) браузеров создают посторонние запросы, приводящие к 304 ответам, так что доступ к локальному кешу виден разработчикам.

## Статус

```
304 Not Modified
```

## Характеристики

| Спецификации                                | Название                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "304 Not Modified" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
