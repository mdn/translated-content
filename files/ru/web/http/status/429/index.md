---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
---

{{HTTPSidebar}}

HTTP **`429 Too Many Requests`** код ответа указывает, что пользователь отправил слишком много запросов за последнее время ("ограничение скорости" или "rate limiting" ).

В этот ответ может быть включён {{HTTPHeader("Retry-After")}}, указывающий, как долго ждать нового запроса.

## Статус

```
429 Too Many Requests
```

## Пример

```
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## Спецификации

| Спецификация                                   | Название                     |
| ---------------------------------------------- | ---------------------------- |
| {{RFC("6585", "429 Too Many Requests" , "4")}} | Additional HTTP Status Codes |

## Смотрите также

- {{HTTPHeader("Retry-After")}}
- [429 Too Many Requests](https://www.exai.com/blog/429-error)
