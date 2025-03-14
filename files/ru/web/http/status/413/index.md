---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
---

{{HTTPSidebar}}

Код HTTP **`413 Payload Too Large`** , указывает, что объект запроса больше, чем ограничения, определённые сервером; сервер может закрыть соединение или вернуть поле {{HTTPHeader("Retry-After")}}.

## Статус

```
413 Payload Too Large
```

## Спецификации

| Спецификация                                        | Название                                                      |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "413 Payload Too Large" , "6.5.11")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
