---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
---

{{HTTPSidebar}}

Код статуса HTTP **428 Precondition Required** означает, что сервер требует, чтобы запрос был [условным](/ru/docs/Web/HTTP/Conditional_requests) (соответствовал неким предварительно заданным условиям).

Как правило, это означает, что требуемый заголовок предварительного условия, например {{HTTPHeader("If-Match")}} отсутствует .

Если заголовок предусловия **не соответствует** состоянию на стороне сервера, ответ должен быть {{HTTPStatus(412)}} `Precondition Failed`.

## Статус

```
428 Precondition Required
```

## Спецификации

| Спецификации                                       | Название                      |
| -------------------------------------------------- | ----------------------------- |
| {{RFC("6585", "428 Precondition Required" , "3")}} | Расширенные коды статуса HTTP |

## Смотрите также

- [Условные запросы HTTP](/ru/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
