---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
---

{{HTTPSidebar}}

HTTP **`407 Proxy Authentication Required`** код ответа на ошибку клиента указывает, что запрос не был применён, поскольку он не имеет достоверных учётных данных для {{Glossary("proxy server")}}, который находится между браузером и сервером, который может получить доступ к запрашиваемому ресурсу..

Этот статус отправляется с {{HTTPHeader("Proxy-Authenticate")}}, который содержит информацию о том, как правильно разрешить авторизацию.

## Статус

```
407 Proxy Authentication Required
```

## Пример ответа

```
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Спецификации

| Спецификация                                                 | Название                 |
| ------------------------------------------------------------ | ------------------------ |
| {{RFC("7235", "407 Proxy Authentication Required" , "3.2")}} | HTTP/1.1: Authentication |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [HTTP authentication](/ru/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
