---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
---

{{HTTPSidebar}}

Код ответа на статус ошибки HTTP **`401 Unauthorized`** клиента указывает, что запрос не был применён, поскольку ему не хватает действительных учётных данных для целевого ресурса.

Этот статус отправляется с {{HTTPHeader("WWW-Authenticate")}}, который содержит информацию о правильности авторизации.

Этот статус похож на {{HTTPStatus("403")}}, но в этом случае возможна аутентификация.

## Статус

```
401 Unauthorized
```

## Пример ответа

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## Спецификации

| Спецификация                                | Название                 |
| ------------------------------------------- | ------------------------ |
| {{RFC("7235", "401 Unauthorized" , "3.1")}} | HTTP/1.1: Authentication |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [HTTP authentication](/ru/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
