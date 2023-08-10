---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
---

{{HTTPSidebar}}

The HTTP **`412 Precondition Failed`** клиентский код ответа на ошибку указывает, что доступ к целевому ресурсу был отклонён. Это происходит с условными запросами на методы, отличные от {{HTTPMethod("GET")}} или {{HTTPMethod("HEAD")}}, когда условие определено {{HTTPHeader("If-Unmodified-Since")}} или {HTTPHeader("If-None-Match")}} не выполняется. В этом случае запрос, обычно загрузка или изменение ресурса, не может быть выполнен, и этот ответ об ошибке отправляется обратно.

## Статус

```
412 Precondition Failed
```

## Спецификации

| Спецификация                                       | Название                                                     |
| -------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "412 Precondition Failed" , "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
