---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
---

{{HTTPSidebar}}

Код ответа на ошибку клиента HTTP **415 Unsupported Media Type** указывает, что сервер отказывается принять запрос, потому что формат содержимого не поддерживается сервером.

Проблема формата может быть связана с указанным запросом {{HTTPHeader("Content-Type")}} или {{HTTPHeader("Content-Encoding")}} или в результате непосредственного контроля данных.

## Status

```
415 Unsupported Media Type
```

## Спецификации

| Спецификация                                             | Название                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
