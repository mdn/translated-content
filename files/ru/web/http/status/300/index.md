---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
---

{{HTTPSidebar}}

Код ответа на перенаправление "The HTTP **`300 Multiple Choices"`** указывает, что запрос имеет несколько возможных ответов. Пользователь-агент или пользователь должны выбрать один из них. Поскольку стандартного способа выбора одного из ответов нет, этот код ответа очень редко используется.

Если сервер имеет предпочтительный выбор, он должен создать {{HTTPHeader("Location")}}.

## Статус

```
300 Multiple Choices
```

## Примеры

См. это: [w3.org page for a Multiple Choice response](https://www.w3.org/Style/Examples/007/figures.ht).

## Характеристики

| Спецификация                                      | Название                                                      |
| ------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "300 Multiple Choices" , "6.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Смотрите также

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
- {{HTTPStatus("308")}} `Permanent Redirect`
